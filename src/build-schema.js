const fs = require('fs');
const package = require('../package.json');
const typeDefs = require('./schema');

fs.writeFileSync(package.schema.replace('VERSION', package.version), typeDefs);

const schema = typeDefs.split('\n').filter(s => s.trim().length > 0).map((s) => `        "${s}\\n"`).join(' +\n');
const schemaProviderJavaClass = `package org.cishell.cibridge.graphql.schema;

public class CIBridgeSchema {
    public static String SCHEMA_STRING =
${schema};
}
`;

fs.writeFileSync(package.schemaProviderJavaClass, schemaProviderJavaClass);
