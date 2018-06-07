const queries = `
	# Determines the input format from the referenced data and \
	finds the chain of converter algorithms to convert the data to the specified output format
	findConverters(dataRefId: ID!, outFormat: String!): [AlgorithmRef!]!

	# Find the chain of converter algorithms to convert data from given input format to given output format
	findConvertersByFormat(inFormat: String!, outFormat: String!): [AlgorithmRef!]!
`

const mutations = `
	# Converts the referenced data into the desired output format
	convertData(dataRefId: ID!, outFormat: String!): DataRef

	# Removes the referenced data from the data manager
	removeData(dataRefId: ID): Boolean

	# Sets label to the referenced data
	setLabel(dataRefId: ID, label: String): Boolean

	# Selects the referenced data objects in the data manager
	setSelectedData(dataRefIds: [ID!]): Void
`

module.exports = {queries, mutations}