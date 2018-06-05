const queries = `
	findConverters(dataRefId: ID!, outFormat: String!): [AlgorithmRef!]!
	findConvertersByFormat(inFormat: String!, outFormat: String!): [AlgorithmRef!]!
`

const mutations = `
	convertData(dataRefId: ID!, outFormat: String!): DataRef
	removeData(dataRefId: ID): Boolean
	setLabel(dataRefId: ID, label: String): Boolean
	setSelectedData(dataRefIds: [ID!]): Void
`

module.exports = {queries, mutations}