const express = require('express');

const Router = express.Router({mergeParams : true});
// const ProductController = require('./productsController');
const CategoryController = require('./categoryController');

Router.delete('/api/category/:id', CategoryController.deleteCategory);
Router.get('/api/categories', CategoryController.getAllCategories);

module.exports = Router;
