var sequelize = require('sequelize');

const db = new sequelize('graphql', "graphql", "graphql", {
    host: 'localhost',
    dialect: 'mysql'
});


const Continent = db.define('continents', {
  name: sequelize.STRING
},{timestamps: false});

const Region = db.define('regions', {
  name: sequelize.STRING
},{timestamps: false});

const House = db.define('houses', {
  name: sequelize.STRING
},{timestamps: false});

const Kingdom = db.define('kingdoms', {
  name: sequelize.STRING
},{timestamps: false});

const Title = db.define('titles', {
  name: sequelize.STRING
},{timestamps: false});



db.sync();

/*const Continent = db.models.continents;
const Region = db.models.region;
const Kingdom = db.models.kingdom;
const House = db.models.house;
const Title = db.models.title;*/




module.exports = { Continent, Region, Kingdom, Title, House };
