const fs = require('fs');
const path =  require('path');
const Sequelize =  require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../_config/config.js`)[env];
let db = {};

console.log("DATABASE CONFIG", config);
let sequelize = new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname).filter(function(file){
    return(file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach(function(file) {
    let model = path.join(__dirname, file)(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
})


Object.keys(db).forEach(function(modelName){
    if(db[modelName].associate){
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.export = db;
