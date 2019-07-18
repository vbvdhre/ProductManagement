const express = require('express');
const Router = express.Router({mergeParams : true});
const CategoryController = require('./categoryController');

// definign the end points for apis
Router.delete('/api/category/:id', CategoryController.deleteCategory);
Router.get('/api/categories', CategoryController.getAllCategories);

module.exports = Router;
