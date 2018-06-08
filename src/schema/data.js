const types = `\
# Reference type for the data created in CIShell
type DataRef {
	# Reference ID to the data
	id: ID!

	# format of the data
	format: String!

	# The label to give the data object if displayed
	label: String

	# A short label to give the Data object for shorter displays. It is recommended to keep the string length below 20 characters
	shortLabel: String

	# The parent data object of the data object. \
	This is used when a data object is derived from another data object to show the hierarchical relationship between them. \
	This property can be null, signifying that the data object was not derived from any other data object, \
	such as when loading a new data object from a file.
	parent: String

	# Specifies the general type of the data
	type: DataType

	# Flag to determine if the Data object has been modified and not saved since the modification. \
	This is used to do things like notify the user before they exit that a modified Data object exists and ask if they want to save it.
	modified: String

	# Other metadata information related to the data
	otherProperties: [Property!]
}
`

const inputTypes = `\
# Input type to filter the matching data objects
input DataFilter {
	# Identifier for the data filter object
	id: ID

	# To filter the data objects based on the given format
	format: String
}
`

const enums = `\
# Enum type to specify the general type of data objects
enum DataType {
	# The data model is abstractly a database
	DATABASE

	# The data model is abstractly a matrix
	MATRIX

	# the data model is a 'model' object
	MODEL

	# The data model is abstractly a network
	NETWORK

	# The data model is abstractly a data plot
	PLOT

	# The data model is a JPEG object
	RASTERIMAGE

	# The data model is an 'R Instance' object
	RINSTANCE

	# The data model is abstractly a table
	TABLE

	# The data model is abstractly a plain text file
	TEXT

	# The data model is abstractly a tree
	TREE

	# The data model is abstractly an unknown type
	UNKNOWN

	# The data model is a PostScript file
	VECTORIMAGE
}
`

module.exports = { types, inputTypes, enums };
