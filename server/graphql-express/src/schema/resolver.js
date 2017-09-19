
const connector = require('../mysql-connector');

var continentModel = connector.Continent;
var regionModel = connector.Region;
var kingdomModel = connector.Kingdom;
var titleModel = connector.Title;
var houseModel = connector.House;

module.exports = {
  Query: {
        allContinents(_, args){
          return continentModel.findAll({where: args});
        },
        allRegions(_, args){
            return regionModel.findAll({where: args});
        },
        allKingdoms(_, args){
            return kingdomModel.findAll({where: args});
        },
        allHouses(_, args){
            return houseModel.findAll({where: args});
        },
        allTitles(_, args){
            return titleModel.findAll({where: args});
        },
    },
};
