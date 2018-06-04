const queries = `
	getAlgorithms(filter: AlgorithmFilter): [Algorithm!]
	validateData(algorithmId: ID!, dataRefIds: [ID]!): String
	downloadData(dataRefId: ID!): File
`

const mutations = `
	uploadData(file: File!, format: String): DataRef
	createAlgorithm(algorithmId: ID!, dataRefIds: [ID!], params: [PropertyInput!]): AlgorithmRef
	refreshAlgorithmRef(algorithmRefId: ID): AlgorithmRef
	setAlgorithmCancelled(algorithmRefId: ID!, bool: Boolean): AlgorithmRef
	setAlgorithmPaused(algorithmRefId: ID!, bool: Boolean): AlgorithmRef
`

const subscriptions = `
	algorithmAdded: Algorithm
	algorithmRemoved: Algorithm
	algorithmRefUpdated(filter: AlgorithmFilter): AlgorithmRef
`
module.exports = { queries, mutations, subscriptions };