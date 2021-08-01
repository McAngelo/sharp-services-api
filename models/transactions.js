'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transactions.belongsTo(models.User);
    }
  };
  Transactions.init({
    user_id: DataTypes.STRING,
    transaction_type: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    transaction_title: DataTypes.STRING,
    transaction_description: DataTypes.STRING,
    transaction_status: DataTypes.BOOLEAN,
    transaction_created_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};