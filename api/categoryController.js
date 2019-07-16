'use strict';
const db = require('../models');
const sequelize = require('sequelize');
const Joi = require('joi');

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

const deleteCategory = (req, res) => {
  return db.sequelize.transaction((t) =>{
    return db.category.destroy({
      where : {
        id : Number(req.params.id)
      },
      transaction : t
    }).then((response) => {
      console.log('response', response);
      if (response) {
        return db.products.destroy({
          where : {
            categoryid : Number(req.params.id)
          },
          transaction : t
        }).then((result) => {
          return res.send('Category Deleted Successfully.');
        })
        .catch((err) => {
          console.log('err', err);
        })
      } else {
        return res.send(`No Category found with the id ${Number(req.params.id)}`);
      }
    }).catch((err) => {
      console.log('err', err);
    })
  })
  // const Schema = Joi.object().keys({
  //   id : Joi.number().required()
  // })
  // return Joi.validate(req.params, (error, response) => {
  //   console.log('error=---', error);
  //   if (error) {
  //     console.log('Validation Error', error);
  //     return res.status(422).json({
  //       Error : err
  //     });
  //   }
  //   console.log('response=---', response);
  // })
};
module.exports = {
  getAllCategories : getAllCategories,
  deleteCategory : deleteCategory
};
