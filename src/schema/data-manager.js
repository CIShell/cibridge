const queries = `
	# Returns references for all the data objects that matches the given filter
	getData(filter: DataFilter): [DataRef]

	# Returns the data references for the selected data objects in the data manager
	getSelectedData: [DataRef!]
`

const subscriptions = `
	# Receives the reference to a data object matching the filter criteria when it is updated
	dataUpdated(filter: DataFilter): DataRef

	# Receives the reference to a data object matching the filter criteria when it is added to the data manager
	dataAdded(filter: DataFilter): DataRef

	# Receives the reference to a data object matching the filter criteria when its label is changed
	dataLabelChanged(filter: DataFilter): DataRef

	# Receives the reference to a data object matching the filter criteria when it is removed from the data manager
	dataRemoved(filter: DataFilter): DataRef

	# Receives the references to data objects which have been selected in the data manager
	dataSelected: [DataRef!]
`
module.exports = { queries, subscriptions };
