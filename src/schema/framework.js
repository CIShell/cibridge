const queries = `
	# Returns all the algorithm factory templates matching the given filter criteria
	getAlgorithmDefinitions(filter: AlgorithmFilter): AlgorithmDefinitionQueryResults!

	# Returns all the algorithm instances matching the given filter criteria
	getAlgorithmInstances(filter: AlgorithmFilter): AlgorithmInstanceQueryResults!

	# Validates the given data that is proposed to be given to the algorithm
	validateData(algorithmDefinitionId: ID!, dataIds: [ID]!): String
`;

const mutations = `
	# Create instance of the given algorithm template using the data references
	createAlgorithm(algorithmDefinitionId: ID!, dataIds: [ID!], parameters: [PropertyInput!]): AlgorithmInstance!
`;

const subscriptions = `
	# Receives the algorithm template when it is added
	algorithmDefinitionAdded: AlgorithmDefinition!

	# Receives the algorithm template when it is removed
	algorithmDefinitionRemoved: AlgorithmDefinition!

	# Receives the algorithm instance when it is updated and is optionally matched by the filter
	algorithmInstanceUpdated(filter: AlgorithmFilter): AlgorithmInstance!
`;

module.exports = { queries, mutations, subscriptions };
