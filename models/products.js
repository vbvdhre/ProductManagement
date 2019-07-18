'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    categoryid: DataTypes.NUMBER
  }, {});
  products.associate = function(models) {
    models.products.belongsTo(models.category, {
      foreignKey : 'categoryid',
      targetKey : 'id'
    });
  };
  return products;
};
