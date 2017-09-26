var Sequelize = require('sequelize');

const db = new Sequelize('graphql', "graphql", "graphql", {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

const dm = {};

dm.Continent = db.define("continents", {
    id:         { type: Sequelize.UUID,        primaryKey: true  },
    name:       { type: Sequelize.STRING(100), allowNull:  false }
});

dm.Region = db.define("regions", {
    id:         { type: Sequelize.UUID,        primaryKey: true  },
    name:       { type: Sequelize.STRING(100), allowNull:  false }
});

dm.House = db.define("houses", {
    id:         { type: Sequelize.UUID,        primaryKey: true  },
    name:       { type: Sequelize.STRING(100), allowNull:  false },
    slogan:       { type: Sequelize.STRING(100), allowNull:  true }
});

dm.Kingdom = db.define("kingdoms", {
    id:         { type: Sequelize.UUID,        primaryKey: true  },
    name:       { type: Sequelize.STRING(100), allowNull:  false },
    capital:       { type: Sequelize.STRING(100), allowNull:  true }
});

dm.Title = db.define("titles", {
    id:         { type: Sequelize.UUID,        primaryKey: true  },
    name:       { type: Sequelize.STRING(100), allowNull:  false }
});

dm.People = db.define("people", {
    id:         { type: Sequelize.UUID,        primaryKey: true  },
    name:       { type: Sequelize.STRING(100), allowNull:  false },
    nickname:   { type: Sequelize.STRING(100), allowNull:  true }
});

dm.Continent.hasMany(dm.Region, {  foreignKey: "id_continent", as:'regions'});
dm.Region.belongsTo(dm.Continent, {  foreignKey: "id_continent", as:'continent'});
dm.Kingdom.hasOne   (dm.Region,  {  foreignKey: "id_kingdom", as:'region'});
dm.Kingdom.belongsTo(dm.House, { foreignKey: "id_house", as:'house'    });
dm.Title.belongsTo(dm.House, {  foreignKey: "id_house", as:'house'    });
dm.People.belongsTo(dm.House, {  foreignKey: "id_house", as:'house'    });


db.sync();

module.exports = { dm };
