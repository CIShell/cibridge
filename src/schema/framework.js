const queries = `
	# Returns all the algorithm factory templates matching the given filter criteria
	getAlgorithmDefinition(filter: AlgorithmFilter): AlgorithmDefinitionQueryResults

	# Returns all the algorithm instances matching the given filter criteria
	getAlgorithmRef(filter: AlgorithmFilter): [AlgorithmRef!]

	# Validates the given data that is proposed to be given to the algorithm
	validateData(algorithmId: ID!, dataRefIds: [ID]!): String

	# Downloads the data associated with the given data reference as a file
	downloadData(dataRefId: ID!): File
`

const mutations = `
	# Uploads the data file and creates the data reference in the data manager
	uploadData(file: File!, format: String): DataRef

	# Create instance of the given algorithm template using the data references
	createAlgorithm(algorithmId: ID!, dataRefIds: [ID!], params: [PropertyInput!]): AlgorithmRef

	# Get current state of the specified algorithm
	refreshAlgorithmRef(algorithmRefId: ID): AlgorithmRef

	# Cancel or uncancel the referenced algorithm based on the passed boolean value
	setAlgorithmCancelled(algorithmRefId: ID!, bool: Boolean): AlgorithmRef

	# Pause or unpause the referenced algorithm based on the passed boolean value
	setAlgorithmPaused(algorithmRefId: ID!, bool: Boolean): AlgorithmRef
`

const subscriptions = `
	# Receives the algorithm template when it is added
	algorithmDefinitionAdded: AlgorithmDefinition

	# Receives the algorithm template when it is removed
	algorithmDefinitionRemoved: AlgorithmDefinition

	# Receives the reference to an algorithm instance matching the filter criteria when it is updated
	algorithmRefUpdated(filter: AlgorithmFilter): AlgorithmRef
`
module.exports = { queries, mutations, subscriptions };
