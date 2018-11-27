# Homeaway clone backend

## Setup

### create .env file

```env
APP="HomeAway"
PORT=8081
MONGOURI=mongodb://<username>:<password>@<hostname>:<port>/homeaway
APP_SECRET=somekey
```

## API documentation

### API routes

#### /auth

/login
Basic login API call returns token if successfull
request :

```json
{
    "email": "saketthakare@gmail.com",
    "password": "saket123"
}
```

response :

```json
{
    "message": "success",
    "user": {
        "id": "5bd19e9acc3b947d5aa57813",
        "fname": "Saket",
        "lname": "Thakare",
        "email": "saketthakare@gmail.com",
        "createdAt": "2018-10-25T10:44:42.430Z",
        "role": "traveler",
        "aboutMe": "",
        "city": "",
        "country": "",
        "company": "",
        "school": "",
        "hometown": "",
        "language": "",
        "phoneNumber": "",
        "gender": "",
        "profilePicture": ""
    },
    "token": "eyJhbGciOiFIUzI1NiIsInC5cCI6IkpXVCJ9.eyJzdWIiOiI1YmQxOTlhYjU3ZDU0ZjdjOTQ5ZmAjOGEiLCJpYXQiOjE1NDA0NjMyMjh9.LR3oYStZHeEAWKk-ij-XZYIsaJNQO8ZYbPV1ZJ5e2vI"
}
```

/register
Creates a new user
request :

```json
{
    "id": "5bd19e9acc3b947d5aa57813",
    "fname": "Saket",
    "lname": "Thakare",
    "email": "saketthakare@gmail.com",
    "createdAt": "2018-10-25T10:44:42.430Z",
    "role": "traveler",
    "aboutMe": "",
    "city": "",
    "country": "",
    "company": "",
    "school": "",
    "hometown": "",
    "language": "",
    "phoneNumber": "",
    "gender": "",
    "profilePicture": ""
}
```

response :

```json
{
    "id": "5bd199ab57d54f7c949fac8a",
    "fname": "Saket",
    "lname": "Thakare",
    "email": "saketthakare@gmail.com",
    "createdAt": "2018-10-25T10:23:39.276Z",
    "role": "traveler"
}
```

#### /user

/detial/:userid

response

```json
{
    "id": "5bd19e9acc3b947d5aa57813",
    "fname": "Saket",
    "lname": "Thakare",
    "email": "saketthakare@gmail.com",
    "createdAt": "2018-10-25T10:44:42.430Z",
    "role": "traveler",
    "aboutMe": "",
    "city": "",
    "country": "",
    "company": "",
    "school": "",
    "hometown": "",
    "language": "",
    "phoneNumber": "",
    "gender": "",
    "profilePicture": ""
}
```

/update

request

```json
{
    "id": "5bd19e9acc3b947d5aa57813",
    "fname": "Saket",
    "lname": "Thakare",
    "email": "saketthakare@gmail.com",
    "role": "traveler",
    "aboutMe": "",
    "city": "",
    "country": "",
    "company": "",
    "school": "",
    "hometown": "",
    "language": "marathi",
    "phoneNumber": "",
    "gender": "male",
    "profilePicture": ""
}
```

response

```json
{
    "id": "5bd19e9acc3b947d5aa57813",
    "fname": "Saket",
    "lname": "Thakare",
    "email": "saketthakare@gmail.com",
    "role": "traveler",
    "aboutMe": "",
    "city": "",
    "country": "",
    "company": "",
    "school": "",
    "hometown": "",
    "language": "marathi",
    "phoneNumber": "",
    "gender": "male",
    "profilePicture": ""
}
```

#### /booking

/create
request
```json
{
    "ownerId": "5bd1af06e505ed8072be02b8",
    "travellerId" :"5bd19e9acc3b947d5aa57813",
    "propertyId" : "5bd2392f666aa584bc0c01a1",
    "startDate": 1540623600000,
    "endDate": 1541404800000,
    "price": 100
}
```
response


```
{
    "travellerId": "5bd19e9acc3b947d5aa57813",
    "ownerId": "5bd1af06e505ed8072be02b8",
    "propertyId": "5bd2392f666aa584bc0c01a1",
    "startDate": 1540623600000,
    "endDate": 1541404800000,
    "price": 100
}
```
/fetch

request
```json
{
    "travellerId": "5bd19e9acc3b947d5aa57813",
    "ownerId": "5bd1af06e505ed8072be02b8",
    "propertyId": "5bd2392f666aa584bc0c01a1",
    "startDate": 1540623600000,
    "endDate": 1541404800000,
    "price": 100,
    "page": 1
}
```
response
```json
{
    "payLoad": [
        {
            "_id": "5bd25dd56e385888a3d2b565",
            "ownerId": "5bd1af06e505ed8072be02b8",
            "travellerId": "5bd19e9acc3b947d5aa57813",
            "propertyId": "5bd2392f666aa584bc0c01a1",
            "startDate": 1540623600000,
            "endDate": 1541404800000,
            "price": 100,
            "createdAt": "2018-10-26T00:20:37.535Z",
            "updatedAt": "2018-10-26T00:20:37.535Z",
            "__v": 0
        }
    ],
    "pager": {
        "total": 1,
        "limit": 10,
        "page": 1,
        "pages": 1
    }
}
```
#### /property

/create

request

```json
{
    "ownerId": "5bd1af06e505ed8072be02b8",
    "address": "Alameda & Rodhes, San Jose",
    "headline": "2BHK Furnished Apartment",
    "description": "A really nice furnished appartment available. 5 mins from bustop, 10 min from Diridon Station. Swimming Pool Gym avaible",
    "type": "APARTMENT",
    "bedroom": 2,
    "accomodate": 5,
    "bathroom": 3,
    "amenities": "Gym, Swimming Pool, Barbeque",
    "area": 900,
    "startDate": 1540623600000,
    "endDate": 1541404800000,
    "currency": "USD",
    "minimumStayingNight": 2,
    "nightlyBaseRate": 100,
    "imageList": "0e7071af-ced8-49f3-bff8-0f9648282563.jpg,0fc8c1e3-3570-40f8-b4cf-78fa51251a69.jpg,a9752b87-8dce-40f4-9e57-428a7b0525c7.jpg"
}
```
reponse
```json
{
    "ownerId": "5bd1af06e505ed8072be02b8",
    "address": "Alameda & Rodhes, San Jose",
    "headline": "2BHK Furnished Apartment",
    "description": "A really nice furnished appartment available. 5 mins from bustop, 10 min from Diridon Station. Swimming Pool Gym avaible",
    "type": "APARTMENT",
    "bedroom": 2,
    "accomodate": 5,
    "bathroom": 3,
    "amenities": "Gym, Swimming Pool, Barbeque",
    "area": 900,
    "startDate": 1540623600000,
    "endDate": 1541404800000,
    "currency": "USD",
    "nightlyBaseRate": 100,
    "imageList": "0e7071af-ced8-49f3-bff8-0f9648282563.jpg,0fc8c1e3-3570-40f8-b4cf-78fa51251a69.jpg,a9752b87-8dce-40f4-9e57-428a7b0525c7.jpg"
}
```
/fetch

request

```json
{
	"id" : "5bd2392f666aa584bc0c01a1",
    "ownerId": "5bd1af06e505ed8072be02b8",
    "address": "San Jose",
    "bedroom": 2,
    "accomodate": 5,
    "startDate": 1540623600000,
    "endDate": 1541404800000,
    "priceFrom": 90,
    "priceTo": 110,
    "page":1
}
```
Note : Every single field in the request body can be removed

response

```json
{
    "payLoad": [
        {
            "_id": "5bd2392f666aa584bc0c01a1",
            "ownerId": "5bd1af06e505ed8072be02b8",
            "address": "Alameda & Rodhes, San Jose",
            "headline": "2BHK Furnished Apartment",
            "description": "A really nice furnished appartment available. 5 mins from bustop, 10 min from Diridon Station. Swimming Pool Gym avaible",
            "type": "APARTMENT",
            "bedroom": 2,
            "accomodate": 5,
            "bathroom": 3,
            "amenities": "Gym, Swimming Pool, Barbeque",
            "area": 900,
            "startDate": 1540623600000,
            "endDate": 1541404800000,
            "currency": "USD",
            "minimumStayingNight": 2,
            "nightlyBaseRate": 100,
            "imageList": "0e7071af-ced8-49f3-bff8-0f9648282563.jpg,0fc8c1e3-3570-40f8-b4cf-78fa51251a69.jpg,a9752b87-8dce-40f4-9e57-428a7b0525c7.jpg",
            "createdAt": "2018-10-25T21:44:15.513Z",
            "updatedAt": "2018-10-25T21:44:15.513Z",
            "__v": 0
        }
    ],
    "pager": {
        "total": 1,
        "limit": 10,
        "page": 1,
        "pages": 1
    }
}
```

#### /document

/upload

/download

request

/download/0e7071af-ced8-49f3-bff8-0f9648282563.jpg,1b2071af-ced8-49f3-bff8-0f9648282213.jpg

response
```json
{
    "payLoad": ["very big base64 text", "very big base64 text"]
}
```

#### /conversation

/create

request
```json
{
    "ownerId": "5bd1af06e505ed8072be02b8",
    "travellerId": "5bd19e9acc3b947d5aa57813",
    "sender": "traveller",
    "text": "Hi, I am intrested in the property. Can tell me if kitchen is equipped with an oven?"
}
```

response
```json
{
    "_id": "5bd2e772b3c91294252d042a",
    "ownerId": "5bd1af06e505ed8072be02b8",
    "travellerId": "5bd19e9acc3b947d5aa57813",
    "message": [
        {
            "_id": "5bd2e772b3c91294252d0429",
            "sender": "traveller",
            "text": "Hi, I am intrested in the property. Can tell me if kitchen is equipped with an oven?",
            "createdAt": "2018-10-26T10:07:46.762Z",
            "updatedAt": "2018-10-26T10:07:46.762Z"
        }
    ],
    "createdAt": "2018-10-26T10:07:46.762Z",
    "updatedAt": "2018-10-26T10:07:46.762Z",
    "__v": 0
}
```

/fetch

request

```json
{
	"id": "5bd2e772b3c91294252d042a",
    "ownerId": "5bd1af06e505ed8072be02b8",
    "travellerId": "5bd19e9acc3b947d5aa57813"
}
```
response

```json
{
    "payLoad": [
        {
            "_id": "5bd2e772b3c91294252d042a",
            "ownerId": "5bd1af06e505ed8072be02b8",
            "travellerId": "5bd19e9acc3b947d5aa57813",
            "message": [
                {
                    "_id": "5bd2e772b3c91294252d0429",
                    "sender": "traveller",
                    "text": "Hi, I am intrested in the property. Can tell me if kitchen is equipped with an oven?",
                    "createdAt": "2018-10-26T10:07:46.762Z",
                    "updatedAt": "2018-10-26T10:07:46.762Z"
                },
                {
                    "_id": "5bd2e928b3c91294252d042c",
                    "sender": "owner",
                    "text": "Yes, there's is an over",
                    "updatedAt": "2018-10-26T10:15:04.944Z",
                    "createdAt": "2018-10-26T10:15:04.944Z"
                }
            ],
            "createdAt": "2018-10-26T10:07:46.762Z",
            "updatedAt": "2018-10-26T10:15:04.944Z",
            "__v": 0
        }
    ]
}
```
