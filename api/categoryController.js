'use strict';
const db = require('../models');
const sequelize = require('sequelize');
const Joi = require('joi');

// this function is to get all the categories from the database
// with their respected products count
// Resultant query - Left outer join on products table of category table selecting the id, name as categoryname
// from category table and Count of respective products from products table with the associated category
// group by using id of category table.
const getAllCategories = (req, res) => {
  db.category.findAll({
    attributes : ['id', ['name', 'categoryName'], [sequelize.fn('COUNT', sequelize.col('products.id')), 'totalProducts']],
    include : [{
      model : db.products,
      attributes : []
    }],
    raw : true,
    group : ['category.id']
  }).then((response) => {
    if (response.length) {
      return res.send(response);
    } else {
      return res.send('No categories found.');
    }
  })
  .catch((err) => {
    console.log(err);
    return res.status(500).json({
      Error : err
    });
  })
};
// this function is to delete the category provided with category id in req.params
// along with all the products corresponds to perticular category
// transaction is used in case of failure so that no transaction is executed
const deleteCategory = (req, res) => {
  return db.sequelize.transaction((t) =>{
    // query to delete category from category table with the perticular id
    return db.category.destroy({
      where : {
        id : Number(req.params.id)
      },
      transaction : t
    }).then((response) => {
      // response return the no of categories deleted
      // if no category is deleted it returns 0.
      if (response) {
        // query to delete products from category table with the perticular categoryid
        return db.products.destroy({
          where : {
            categoryid : Number(req.params.id)
          },
          transaction : t
        }).then((result) => {
          return res.send('Category Deleted Successfully.');
        })
        .catch((err) => {
          return res.status(500).json({
            Error : err
          });
        })
      } else {
        return res.send(`No Category found for the id ${Number(req.params.id)}`);
      }
    }).catch((err) => {
      return res.status(500).json({
        Error : err
      });
    })
  });
};
module.exports = {
  getAllCategories : getAllCategories,
  deleteCategory : deleteCategory
};
