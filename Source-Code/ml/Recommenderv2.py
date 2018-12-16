import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from pymongo import MongoClient
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier


client = MongoClient('mongodb://ajinkya:aj12345@ds261917.mlab.com:61917/goldenheart')
db = client['goldenheart']
charityCollc = db.charities
userCOllc = db.Zone_final

class Recommender:

    def __init__(self):
        
        users = userCOllc.find()
        metausers = pd.DataFrame(list(users))
        metausers.head()
        feature_names = ['gender','age','zone']
        X = metausers[feature_names]
        y = metausers['charity_category']
        X_train, X_test, y_train, y_test = train_test_split(X, y,random_state=42 )
        self.scaler = MinMaxScaler()
        X_train = self.scaler.fit_transform(X_train)
        X_test = self.scaler.transform(X_test)
        self.knn = KNeighborsClassifier(n_neighbors=7)
        self.knn.fit(X_train, y_train)
        #print('Accuracy of K-NN classifier on training set: {:.2f}'.format(self.knn.score(X_train, y_train)))
        #print('Accuracy of K-NN classifier on test set: {:.2f}'.format(self.knn.score(X_test, y_test)))
        
    
    def getCharitiesForUser(self,age,gender,latitude,longitude):

        category_id = self.getCategoryID(age,gender,latitude,longitude)
        #print(category_id)
        category = self.getCategory(category_id)
        #print(category)
        recommendations = self.getCharities(age,latitude,longitude,category)
        #result = self.getResult(recommendations)
        return recommendations
    
    def calc_zone(self,lat,lon):

        if (lon>-102.2066):
            if(lat>40.9439):
                zone=1
                return zone
            else:
                zone=2
                return zone
        else:
            if(lat>40.9439):
                zone=3
                return zone
            else:
                zone=4
                return zone


    def getResult(self,recommendations):
        charities = db.charities
        clist = []
        for key in recommendations:
            #print(key)
            for cdata in charities.find({'charity_id':key}):
                objid = cdata['_id']
                #print(cdata['_id'])
                clist.append(objid)                
        return clist


    def getCharityCategory(self,age,gender,lat,lon):

        category_id = self.getCategoryID(age,gender,lat,lon)
        #print(category_id)
        category = self.getCategory(category_id)
        return category


    def getCategoryID(self,age,gender,lat,lon):

        #loaded_model = pickle.load(open('knn_model_final.sav', 'rb'))        
        zone = self.calc_zone(float(lat),float(lon))
        #print("zone is ----------------")
        #print(zone)
        list1=[]
        list2=[]
        list1.append(gender)
        list1.append(age)
        list1.append(zone)
        list2.append(list1)
        list2=self.scaler.transform(list2)
        #result = loaded_model.predict_charity(age,gender,lat,lon)        
        #result = loaded_model.predict_charity(age)
        prediction = self.knn.predict(list2)
        return int(prediction[0])        
        #return result


    def getCategory(self, category_id):

        data = charityCollc.find_one({'category_id':category_id,'latitude':0,'longitude':0})
        #print("\n\n"+data['charity_name']+"\n")
        return data['charity_name']


    def getCharities(self, age, lat, lon, category):

        #print(age)
        minlat = int(lat)-5
        maxlat = int(lat)+5
        minlon = int(lon)-5
        maxlon = int(lon)+5
        charity_data = charityCollc.find({'minage':{'$lte':int(age)},'maxage':{'$gte':int(age)},'$or':[{'latitude':{'$gte':minlat,'$lte':maxlat}},{'latitude':0}],'$or':[{'longitude':{'$gte':minlon,'$lte':maxlon}},{'longitude':0}]})
        #metadata = pd.read_csv('charity_with_missions_clean.csv',low_memory=False)
        metadata = pd.DataFrame(list(charity_data))
        #print(metadata.head(2))
        tfidf = TfidfVectorizer(stop_words='english')
        tfidf_mat = tfidf.fit_transform(metadata['charity_mission'])
        cos_sim = linear_kernel(tfidf_mat, tfidf_mat)
        indices = pd.Series(metadata.index, index=metadata['charity_name']).drop_duplicates()
        idx = indices[category]
        sim_scores = list(enumerate(cos_sim[idx]))
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
        sim_scores = sim_scores[1:11]
        charity_indices = [i[0] for i in sim_scores]
        result = metadata['charity_name'].iloc[charity_indices]
        dict_result = result.to_dict()
        return dict_result



'''
if __name__== '__main__':
    r = Recommender()
    result = r.getCharities("AID FOR AIDS International")
    #print(type(result))
    print(result)
'''