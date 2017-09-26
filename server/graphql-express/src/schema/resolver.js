
const connector = require('../mysql-connector');

var continent = connector.dm.Continent;
var region = connector.dm.Region;
var kingdom = connector.dm.Kingdom;
var title = connector.dm.Title;
var house = connector.dm.House;
var people = connector.dm.People;

module.exports = {
  Query: {
        allContinents(_, args){
          return continent.findAll({ include: [{ model: region, as:'regions'}]}, {where: args});
        },
        allRegions(_, args){
          return region.findAll({include: [ { model: continent, as:'continent'}  ]}, {where: args});
        },
        allKingdoms(_, args){
            return kingdom.findAll({include: [ { model: region, as:'region'}  ]}, {where: args});
        },
        allHouses(_, args){
            return house.findAll({where: args});
        },
        allTitles(_, args){
            return title.findAll({where: args});
        },
        allPeople(_, args){
            return people.findAll({where: args});
        },
    },


};
