
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
          return region.findAll({include: [ { model: continent, as:'continent'}, { model: kingdom, as:'kingdom'} ]}, {where: args});
        },
        allKingdoms(_, args){
            return kingdom.findAll({include: [ { model: region, as:'regions'}, { model: house, as:'house'}  ]}, {where: args});
        },
        allHouses(_, args){
            return house.findAll({ include: [{ model: title, as:'titles'}, { model: people, as:'people'}]}, {where: args});
        },
        allTitles(_, args){
            return title.findAll({ include: [{ model: house, as:'house'}]}, {where: args});
        },
        allPeople(_, args){
            return people.findAll({ include: [{ model: house, as:'house'}]}, {where: args});
        },

    },
    Mutation:{
      createPeople(_, args){
        return people.create({id: 6, name: 'rocio'},{fields:['id','name']});
      }
    }


};
