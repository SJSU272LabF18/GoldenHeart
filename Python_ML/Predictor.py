import pandas as pd
import matplotlib.pyplot as plt
#from pandas.tools.plotting import scatter_matrix
from matplotlib import cm
import seaborn as sns
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
import pymongo
import numpy as np
import pickle

class Predictor:
    def __init__(self):

        mng_client = pymongo.MongoClient('mongodb://sarthak:sarthak123@ds261917.mlab.com:61917/goldenheart')
        mng_db = mng_client['goldenheart'] 
        data = mng_db.Users

        mongo_data = data.find()
    #fruits = pd.read_csv('pandas_example.csv')
        self.fruits = pd.DataFrame(list(mongo_data))
        self.fruits.head()
    
    def train_model(self):

        feature_names = ['age']
        X = self.fruits[feature_names]
        y = self.fruits['charity_category']
        X_train, X_test, y_train, y_test = train_test_split(X, y,random_state=42 )
    #print(X_test)
        self.scaler = MinMaxScaler()
        X_train = self.scaler.fit_transform(X_train)
        X_test = self.scaler.transform(X_test)
        self.knn = KNeighborsClassifier(n_neighbors=7)
        self.knn.fit(X_train, y_train)
        #print('Accuracy of K-NN classifier on training set: {:.2f}'.format(self.knn.score(X_train, y_train)))
        #print('Accuracy of K-NN classifier on test set: {:.2f}'.format(self.knn.score(X_test, y_test)))

    def predict_charity(self,age):
        list1=[]
        list2=[]
        list1.append(age)
        list2.append(list1)
        list2=self.scaler.transform(list2)
        prediction = self.knn.predict(list2)
        return int(prediction[0])
    
    def save_model(self):
        filename = 'knn_model_finalv2.sav'
        pickle.dump(self, open(filename, 'wb'))

c = Predictor()
#c.train_model()
#c.save_model()

#filename = 'knn_model_final.sav'
#pickle.dump(c, open(filename, 'wb'))
#print(c.predict_charity(45))
#loaded_model = pickle.load(open('knn_model_final.sav', 'rb'))
#result = loaded_model.predict_charity(28)
#print(result)

'''test = np.array([0.58, 0.76])
print test       # Produces: [ 0.58  0.76]
print test.shape # Produces: (2,) meaning 2 rows, 1 col

test = test.reshape(1, -1)'''