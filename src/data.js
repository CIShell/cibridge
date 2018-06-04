const types = `\
# Data reference type
type DataRef {
	id: ID!
	format: String!
	metadata: DataMetadata!
}

type DataMetadata {
	label: String
	shortLabel: String
	parent: String
	type: DataType
	modified: String
	serviceReference: String
	otherProperties: [Property!]
}
`

const inputTypes = `\
input DataFilter {
	id: ID
	format: String
}
`

const enums = `\
enum DataType {
	DATABASE
	MATRIX
	MODEL
	NETWORK
	PLOT
	RASTERIMAGE
	RINSTANCE
	TABLE
	TEXT
	TREE
	UNKNOWN
	VECTORIMAGE
}
`

module.exports = { types, inputTypes, enums };