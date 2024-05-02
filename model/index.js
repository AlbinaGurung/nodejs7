const dbConfig = require("../config/dbconfig");
const { Sequelize, DataTypes } = require("sequelize");


// la sequelize yo config haru lag ani database connect gardey vaneko hae 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("you are CONNECTED!!");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.blogs = require("./blogModel.js")(sequelize,DataTypes);
db.users = require('./userModel')(sequelize,DataTypes);

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize.sync({ force: false}).then(() => {
  console.log("yes re-sync done");
});

module.exports = db;