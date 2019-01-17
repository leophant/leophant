const Leophant = require('../lib/leophant');

const leophant = new Leophant({
  dataSources: require('./config/datasources.json'),
  models:      require('./config/models.json')
});
