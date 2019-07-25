#  Chuck Norris Joke Generator #

A serverless application that wraps the chuck norris API (https://api.chucknorris.io/).

# Technoligies used #

* React (Apollo client)
* Node.js (Serverless Apollo Server)
* GraphQL 
* Serverless
* AWS

# Set up for running locally #

* Install serverless globally:
``` npm install -g serverless ```
* Create a user from your AWS account and use those credentials to configure serverless:
``` serverless config credentials --provider aws --key <user_key> --secret <user_secret> ```
* Deploy server to AWS: ```cd server && serverless deploy ``` 
* Use the endpoint returned from serverless, create a .env file in your parent directory & add ```REACT_APP_GRAPHQL_ENDPOINT="<your endpoint>"```
* Run client: ``` cd client && npm start ```

# Todo #

Apollo client caches results so for the same category, you get the same joke. Need to make changes so it makes a fresh request everytime.


