var sequelize = require('sequelize');

const db = new sequelize('graphql', "graphql", "graphql", {
    host: 'localhost',
    dialect: 'mysql'
});


const Continent = db.define('GQL_continents', {
  id: {
    type: sequelize.UUID,
    primaryKey: true
  },
  name: sequelize.STRING
},{timestamps: false});

const Region = db.define('GQL_regions', {
  id: {
    type: sequelize.UUID,
    primaryKey: true
  },
  name: sequelize.STRING,
  id_continent: sequelize.UUID,
  id_kingdom: sequelize.UUID
},{timestamps: false});

const House = db.define('GQL_houses', {
  id: {
    type: sequelize.UUID,
    primaryKey: true
  },
  name: sequelize.STRING,
  slogan: sequelize.STRING
},{timestamps: false});

const Kingdom = db.define('GQL_kingdoms', {
  id: {
    type: sequelize.UUID,
    primaryKey: true
  },
  name: sequelize.STRING,
    capital: sequelize.STRING
},{timestamps: false});

const Title = db.define('GQL_titles', {
  id: {
    type: sequelize.UUID,
    primaryKey: true
  },
  name: sequelize.STRING,
  id_house: sequelize.INTEGER
},{timestamps: false});

const People = db.define('GQL_people', {
  id: {
    type: sequelize.UUID,
    primaryKey: true
  },
  name: sequelize.STRING,
  nickname: sequelize.STRING,
  id_house: sequelize.UUID
},{timestamps: false});

Region.belongsTo(Continent, {foreignKey: 'id'});
//Region.belongsTo(Kingdom, {foreignKey: 'id'});
Kingdom.hasOne(Region, {foreignKey:'id_kingdom'});
Kingdom.belongsTo(House, { foreignKey: 'id' })
Title.belongsTo(House, {foreignKey: 'id'});

db.sync();

module.exports = { Continent, Region, Kingdom, Title, House, People };
