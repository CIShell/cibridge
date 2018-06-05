const rootSchema = require('./root-schema');
const algorithm = require('./algorithm');
const data = require('./data');
const guiBuilder = require('./gui-builder');
const logger = require('./logger');
const util = require('./util');

const typeDefs = `\
${rootSchema.scalars}
${rootSchema.schema}
${rootSchema.queries}
${rootSchema.mutations}
${rootSchema.subscriptions}
${rootSchema.pageInfo}
${algorithm.types}
${algorithm.inputTypes}
${algorithm.enums}
${data.types}
${data.inputTypes}
${data.enums}
${guiBuilder.types}
${guiBuilder.inputTypes}
${guiBuilder.enums}
${logger.types}
${logger.inputTypes}
${logger.enums}
${util.types}
${util.inputTypes}
${util.enums}`;

module.exports = typeDefs;
