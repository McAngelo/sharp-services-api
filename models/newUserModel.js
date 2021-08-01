'use strict'
module.exports = function(sequeize, DataTypes) {
    let User = sequeize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING
    });

    return User;
}