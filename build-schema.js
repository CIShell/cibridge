const fs = require('fs');
const rootSchema = require('./src/root-schema');
const algorithm = require('./src/algorithm');
const data = require('./src/data');
const guiBuilder = require('./src/gui-builder');
const logger = require('./src/logger');
const util = require('./src/util');

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

fs.writeFileSync('cibridge-schema_0.1.0-draft.graphqls', typeDefs);
