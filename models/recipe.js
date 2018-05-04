'use strict';
module.exports = (sequelize, DataTypes) => {
  var Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    ingredients: DataTypes.ARRAY(DataTypes.STRING),
    steps: DataTypes.ARRAY(DataTypes.STRING),
  }, {});
  
  Recipe.associate = function(models) {
    // associations can be defined here
    models.Recipe.belongsTo(models.User, {
      onDelete: `CASCADE`,
      foreignKey: 'id',
    })
  };
  return Recipe;
};