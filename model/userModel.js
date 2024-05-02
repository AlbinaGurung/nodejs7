module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull : false
      },
      email: {
        type: DataTypes.TEXT,
        allowNull:false
      },
      photo:{
        type : DataTypes.STRING,
        allowNull : true
      }
    });
    return User;
  };