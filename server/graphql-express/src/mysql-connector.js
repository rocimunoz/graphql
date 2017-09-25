var Sequelize = require('sequelize');

const db = new Sequelize('graphql', "graphql", "graphql", {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

const dm = {};



dm.Continent = db.define("GQL_continents", {
    id:         { type: Sequelize.UUID,        primaryKey: true  },
    name:       { type: Sequelize.STRING(100), allowNull:  false }
});

dm.Region = db.define("GQL_regions", {
    id:         { type: Sequelize.UUID,        primaryKey: true  },
    name:       { type: Sequelize.STRING(100), allowNull:  false }
});

dm.House = db.define("GQL_houses", {
    id:         { type: Sequelize.UUID,        primaryKey: true  },
    name:       { type: Sequelize.STRING(100), allowNull:  false },
    slogan:       { type: Sequelize.STRING(100), allowNull:  true }
});

dm.Kingdom = db.define("GQL_kingdoms", {
    id:         { type: Sequelize.UUID,        primaryKey: true  },
    name:       { type: Sequelize.STRING(100), allowNull:  false },
    capital:       { type: Sequelize.STRING(100), allowNull:  true }
});

dm.Title = db.define("GQL_titles", {
    id:         { type: Sequelize.UUID,        primaryKey: true  },
    name:       { type: Sequelize.STRING(100), allowNull:  false }
});

dm.People = db.define("GQL_people", {
    id:         { type: Sequelize.UUID,        primaryKey: true  },
    name:       { type: Sequelize.STRING(100), allowNull:  false },
    nickname:   { type: Sequelize.STRING(100), allowNull:  true }
});

//dm.Continent.hasMany(dm.Region);
dm.Region.belongsTo(dm.Continent, { foreignKey: "id_continent"    });
dm.Kingdom.hasOne   (dm.Region,  {  foreignKey: "id_kingdom"   });
dm.Kingdom.belongsTo(dm.House, { foreignKey: "id"    });
dm.Title.belongsTo(dm.House, {  foreignKey: "id"    });
/*
Region.belongsTo(Continent, {foreignKey: 'id'});
Kingdom.hasOne(Region, {foreignKey:'id_kingdom'});
Kingdom.belongsTo(House, { foreignKey: 'id' })
Title.belongsTo(House, {foreignKey: 'id'});*/

db.sync();

module.exports = { dm };
