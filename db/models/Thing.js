'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Thing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Thing.init({
    name: DataTypes.STRING,
    isTreasure: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Thing',
  });
  return Thing;
};