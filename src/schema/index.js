const rootSchema = require('./root-schema');
const algorithm = require('./algorithm');
const data = require('./data');
const notification = require('./notification');
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
${notification.types}
${notification.inputTypes}
${notification.enums}
${logger.types}
${logger.inputTypes}
${logger.enums}
${util.types}
${util.inputTypes}
${util.enums}`;

module.exports = typeDefs;
