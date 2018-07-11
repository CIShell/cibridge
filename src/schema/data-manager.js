const queries = `
	# Returns references for all the data objects that matches the given filter
	getData(filter: DataFilter): DataQueryResults!

	# Downloads the data associated with the given data reference as a file
	downloadData(dataId: ID!): File!
`;

const mutations = `
	# Uploads a data file and creates the data reference in the data manager
	uploadData(file: File!, properties: DataProperties): Data!

	# Removes the referenced data from the data manager
	removeData(dataId: ID): Boolean!

	# Sets label to the referenced data
	updateData(dataId: ID, properties: DataProperties): Boolean!
`;

const subscriptions = `
	# Receives the reference to a data object when it is added to the data manager
	dataAdded: Data!

	# Receives the reference to a data object when it is removed from the data manager
	dataRemoved: Data!

	# Receives the reference to a data object when it is updated
	dataUpdated: Data!
`;

module.exports = { queries, mutations, subscriptions };
