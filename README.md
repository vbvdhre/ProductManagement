
## Development server

This project is developed for testing purpose and not commercially used anywhere.
To run this project locally, first take the clone from github repository on your develpment system. Following are the commands to run this project locally.\n
1. `git clone https://github.com/vbvdhre/ProductManagement.git`
2. `cd ProductManagement`
3. `npm install`
4. `npm db:migrate`
5. `npm start`
Server will be running on 'http://localhost:3000'
To access Production environment you can use 'http://13.232.50.44:3000' url.\n
So the `Domain_url` will be 'http://localhost:3000' for develepoment and 'http://13.232.50.44:3000' for production.

## Api-
1. Delete Category and associate path-
1. Path
Domain_url + "/api/category/:id"
2. Method
delete
3. Requested params
category id you want to delete in place of ":id" in api url.
4. Output
"Category Deleted Successfully."

2. List all the categories along with the number of products associated with it-
1. Path
Domain_url + "/api/categories"
2. Method
get
3. Requested params
No params required
4. Output
Output is array of object,each object containg individual category id, name and its products count.\n
for Ex:-\n
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
