const queries = `
	# Determines the input format from the referenced data and \
	finds the chain of converter algorithms to convert the data to the specified output format
	findConverters(dataId: ID!, outFormat: String!): [AlgorithmInstance!]!

	# Find the chain of converter algorithms to convert data from given input format to given output format
	findConvertersByFormat(inFormat: String!, outFormat: String!): [AlgorithmInstance!]!
`

const mutations = `
	# Converts the referenced data into the desired output format
	convertData(dataId: ID!, outFormat: String!): Data
`

module.exports = {queries, mutations}
