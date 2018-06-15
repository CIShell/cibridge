const types = `\
# Reference to data stored on the server
type Data {
	# Reference ID to the data
	id: ID!

	# format of the data
	format: String!

	# A short label to give the Data object for shorter displays. It is recommended to keep the string length below 20 characters
	name: String

	# The label to give the data object if displayed
	label: String

	# The parent data object of the data object. \
	This is used when a data object is derived from another data object to show the hierarchical relationship between them. \
	This property can be null, signifying that the data object was not derived from any other data object, \
	such as when loading a new data object from a file.
	parentDataId: ID

	# Specifies the general type of the data
	type: DataType

	# Flag to determine if the Data object has been modified and not saved since the modification. \
	This is used to do things like notify the user before they exit that a modified Data object exists and ask if they want to save it.
	isModified: Boolean

	# Other metadata information related to the data
	properties: [Property!]
}

# Paginated Algorithm Definition Query Results
type DataQueryResults implements QueryResults {
	# A list of matching algorithm references
	results: [Data!]!

	# Pagination information
	pageInfo: PageInfo!
}
`

const inputTypes = `\
# Input type to filter data objects
input DataFilter {
	# list of data IDs to match on
	dataIds: [ID!]

	# Filter the data objects based on the given formats
	formats: [String!]

	# Filter the data by modified state
	isModified: Boolean

	# Filter the data by data types
	types: [DataType!]

	# A list of key/value pairs to match on in the algorithm metadata
	properties: [PropertyInput]
}

# Input type for uploading new data or updating existing ones
input DataProperties {
	# format of the data
	format: String

	# A short label to give the Data object for shorter displays. It is recommended to keep the string length below 20 characters
	name: String

	# The label to give the data object if displayed
	label: String

	# The parent data object of the data object. \
	This is used when a data object is derived from another data object to show the hierarchical relationship between them. \
	This property can be null, signifying that the data object was not derived from any other data object, \
	such as when loading a new data object from a file.
	parent: String

	# Specifies the generic type of the data
	type: DataType

	# Other metadata information related to the data
	properties: [PropertyInput!]

	# Maximum number of items to fetch while filtering
	limit: Int

	# Number of items to skip while matching
	offset: Int
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
