const queries = `
	getData(filter: DataFilter): [DataRef]
	getSelectedData: [DataRef!]
`

const subscriptions = `
	dataRefUpdated(filter: DataFilter): DataRef
	dataAdded(filter: DataFilter): DataRef
	dataLabelChanged(filter: DataFilter): DataRef
	dataRemoved(filter: DataFilter): DataRef
	dataSelected: [DataRef!]
`
module.exports = { queries, subscriptions };