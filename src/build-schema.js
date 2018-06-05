const fs = require('fs');
const package = require('../package.json');
const typeDefs = require('./schema');

fs.writeFileSync(package.schema, typeDefs);
