const types = `\
# Reference to an algorithm instance
type AlgorithmInstance {
	# Reference ID for the algorithm instance
	id: ID!

	# The input data given to the algorithm
	inData: [Data!]

	# Additional parameters given to the algorithm by the user
	parameters: [Property!]

	# The algorithm definition used to create the instance
	algorithmDefinition: AlgorithmDefinition!

	# Current state of the algorithm instance
	state: AlgorithmState

	# Scheduled run time for the algorithm instance
	scheduledRunTime: Date

	# Current progress of the algorithm instance, from 1 to 100
	progress: Int

	# Data outputted after algorithm execution
	outData: [Data!]
}

# Algorithm definition for creating algorithm instances
type AlgorithmDefinition {
	# ID that uniquely identifies the algorithm definition
	id: ID!

	# Input parameters required by the algorithm
	parameters: InputParameters

	# Formats and number of data inputs the algorithm accepts
	inData: [String!]

	# Formats and number of data the algorithm produces
	outData: [String!]

	# A human-readable short name for the algorithm
	label: String

	# A description which provides more details on workings of the algorithm
	description: String

	# If the output Data produced by an instance of this algorithm should be a child \
	of the first input Data item (if applicable). If this is set to false or is \
	not set at all, then it is up to the algorithm to set up these relationships.
	parentOutputData: Boolean

	# Type of the algorithm. If no type is set, then it is assumed to be of type AlgorithmType.STANDARD
	type: AlgorithmType

	# Specifies if the algorithm can be run remotely. \
	If this property is not set, then it is assumed that it cannot be run remotely.
	remoteable: Boolean

	# Specifies where on the menu an algorithm is to be placed if a menu bar is used. \
	Otherwise, it can act as a primitive hierarchical classification of the algorithm.
	menuPath: String

	# For converter algorithms, specifies the types of conversion which can be lossy or loseless
	conversion: ConversionType

	# A comma separated list of the authors of the abstract algorithm
	authors: String

	# A comma separated list of the developers who implemented the algorithm in code
	implementers: String

	# A comma separated list of the developers who integrated the algorithm code as a compliant CIShell algorithm
	integrators: String

	# A URL to relevant documentation for the algorithm
	documentationUrl: String

	# A formal reference to a paper explaining the abstract algorithm
	reference: String

	# A URL to a paper explaining the abstract algorithm
	referenceUrl: String

	# A comma separated list of the programming languages used to implement and integrate the algorithm code
	writtenIn: String

	# Additional metadata information apart from standard metadata
	otherProperties: [Property!]
}

# Specifies parameter inputs required for the algorithm
type InputParameters {
	# Identifier for the input parameters object
	id: ID

	# Title to be displayed if presented to the user
	title: String

	# Description
	description: String

	# List of specific parameters
	parameters: [ParameterDefinition!]
}

# Paginated Algorithm Definition Query Results
type AlgorithmDefinitionQueryResults implements QueryResults  {
	# A list of matching algorithm definitions
	results: [AlgorithmDefinition!]!

	# Pagination information
	pageInfo: PageInfo!
}

# Paginated Algorithm Instance Query Results
type AlgorithmInstanceQueryResults implements QueryResults  {
	# A list of matching algorithm references
	results: [AlgorithmInstance!]!

	# Pagination information
	pageInfo: PageInfo!
}
`;

const inputTypes = `\
# Input type for filtering algorithms based on
input AlgorithmFilter {
	# list of algorithm definition IDs to match on
	algorithmDefinitionIds: [ID!]

	# list of AlgorithmInstance IDs to match on
	algorithmInstanceIds: [ID!]

	# list of algorithm states to match on
	states: [AlgorithmState!]

	# List of reference ids to the input data to match on
	inputDataIds: [ID!]

	# list of formats of the input data to match on
	inputFormats: [String!]

	# list of formats of the output data to match on
	outputFormats: [String!]

	# A list of key/value pairs to match on in the algorithm metadata
	properties: [PropertyInput]

	# Maximum number of items to fetch while filtering
	limit: Int

	# Number of items to skip while matching
	offset: Int
}
`;

const enums = `\
# Specifies the current state of the algorithm instance
enum AlgorithmState {
	# The algorithm was cancelled by the user
	CANCELLED

	# The algorithm encountered error during the run
	ERRORED

	# The algorithm is created and waiting to be scheduled
	IDLE

	# The algorithm is paused
	PAUSED

	# The algorithm is running currently
	RUNNING

	# The algorithm is scheduled and waiting to be executed
	SCHEDULED

	# The algorithm is waiting for user input
	WAITING
}

# The specific types of algorithm
enum AlgorithmType {
	# A type of algorithm for converting data of one type to another. \
	TODO: make converters be a separate entity from Algorithms
	CONVERTER

	# A type of algorithm for providing pre-generated data for use in the CIShell platform
	DATASET

	# The default type of algorithm
	STANDARD

	# A type of algorithm which checks either an incoming or outgoing file to be sure it is of the type specified
	VALIDATOR
}

# For the converter algorithms, it specifies if any data is lost in the conversion
enum ConversionType {
	# Specifies the type of data conversion where no data is lost
	LOSSLESS

	# Specifies the type of data conversion where some data can be lost
	LOSSY
}
`;

module.exports = { types, inputTypes, enums };
