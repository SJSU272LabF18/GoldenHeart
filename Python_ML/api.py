from flask import Flask, request
from flask_restful import Resource, Api
from Recommenderv2 import Recommender

app = Flask(__name__)
api = Api(app)

class Recommendation(Resource):

    def get(self):
        args = request.get_json()
        rec = Recommender()
        #result = rec.getCharities(args['name'])
        result = rec.getCharitiesForUser(args['age'],args['gender'],args['latitude'],args['longitude'])
        #print(result)
        print("\n")
        return result,200

api.add_resource(Recommendation,'/api/recommender')


if __name__ == '__main__':
    app.run(debug=True)