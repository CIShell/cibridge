const framework = require('./framework');
const dataConversion = require('./data-conversion');
const guiBuilder = require('./gui-builder');
const dataManager = require('./data-manager');
const scheduler = require('./scheduler');
const logger = require('./logger');
const preferences = require('./preferences');

const scalars = 
`\
# scalar types
scalar ID
scalar Value
scalar Time
scalar File
scalar Void
`

const schema = `\
# GraphQL root schema
schema {
	# root query type
	query: Query

	# root mutation type 
	mutation: Mutation

	# root subscription type
	subscription: Subscription
}
`
const queries = `\
type Query{\
	${framework.queries}
	${dataConversion.queries}
	${guiBuilder.queries}
	${dataManager.queries}
	${scheduler.queries}
	${logger.queries}
	${preferences.queries}
}
`

const mutations = `\
type Mutation{\
	${framework.mutations}
	${dataConversion.mutations}
	${guiBuilder.mutations}
	${scheduler.mutations}
}
`
const subscriptions = `\
type Subscription{\
	${framework.subscriptions}
	${guiBuilder.subscriptions}
	${dataManager.subscriptions}
	${scheduler.subscriptions}
	${logger.subscriptions}
}
`

const pageInfo = `\
# type to store info relate to pagination
# type PageInfo {
# 	hasNextPage: Boolean!
# 	hasPreviousPage: Boolean!
# }
`

module.exports = {scalars, schema, queries, mutations, subscriptions, pageInfo}