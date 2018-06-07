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
# Identifier for the given object
scalar ID

# data type to store values (of any data type specified by the user)
scalar Value

# data type to store datetime information
scalar Time

# data type to store file information
scalar File

# data type equivalent to null value
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
# Root query type
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
# Root mutation type
type Mutation{\
	${framework.mutations}
	${dataConversion.mutations}
	${guiBuilder.mutations}
	${scheduler.mutations}
}
`
const subscriptions = `\
# Root subscription type
type Subscription{\
	${framework.subscriptions}
	${guiBuilder.subscriptions}
	${dataManager.subscriptions}
	${scheduler.subscriptions}
	${logger.subscriptions}
}
`

const pageInfo = `\
# type to store info related to pagination
# type PageInfo {
# 	hasNextPage: Boolean!
# 	hasPreviousPage: Boolean!
# }
`

module.exports = {scalars, schema, queries, mutations, subscriptions, pageInfo}