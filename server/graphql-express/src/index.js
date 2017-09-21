const express = require('express');
const bodyParser = require('body-parser');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const schema = require('./schema');

const connectMysql = require('./mysql-connector');

const start = async => {
  // 3

  //const mysql =  connectMysql();
  var app = express();
  app.use('/graphql', bodyParser.json(), graphqlExpress({
    context: {connectMysql}, 
    schema
  }));
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
  }));

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`CodersCantabria GraphQL server running on port ${PORT}.`)
  });
};

start();
