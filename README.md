
## Development server

This project is developed for testing purpose and not commercially used anywhere.
To run this project locally, first take the clone from github repository on your develpment system. Following are the commands to run this project locally.
`git clone https://github.com/vbvdhre/ProductManagement.git`
`cd ProductManagement`
`npm install`
`npm db:migrate`
`npm start`
Server will be running on 'http://localhost:3000'
To access Production environment you can use 'http://13.232.50.44:3000' url.
So the `Domain_url` will be 'http://localhost:3000' for develepoment and 'http://13.232.50.44:3000' for production.

## Api-
1. Delete Category and associate path-
#path
Domain_url + "/api/category/:id"
#method
delete
#requested params
category id you want to delete in place of ":id" in api url.
#output
"Category Deleted Successfully."

2. List all the categories along with the number of products associated with it-
#path
Domain_url + "/api/categories"
#method
get
#requested params
No params required
#output
Output is array of object,each object containg individual category id, name and its products count.
for Ex:-
[
    {
        "id": 3,
        "categoryName": "pencil",
        "totalProducts": "4"
    },
    {
        "id": 1,
        "categoryName": "pen",
        "totalProducts": "3"
    }
]


## Libraries used
1. Serverside framework- Express.js
2. ORM - Sequelize
3. Database - Postgres
4. Joi - Serverside validation.
