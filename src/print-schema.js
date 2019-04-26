const fs = require('fs');
const typeDefs = require('./schema');

console.log(typeDefs);
fs.writeFileSync("out.graphqls", typeDefs);
