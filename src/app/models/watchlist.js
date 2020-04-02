module.exports = (sequelize, DataTypes) => {

    const Watchlist = sequelize.define('Watchlist', {
      user_id: DataTypes.INTEGER, 
      movies_list: DataTypes.ARRAY(DataTypes.STRING),
    });
  
    Watchlist.associate = function(models) {
      Watchlist.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
    };

    return Watchlist;
  }