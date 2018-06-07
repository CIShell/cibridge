const types = `\
# Reference to algorithm instance
type AlgorithmRef {
	# Reference ID for the algorithm instance
	id: ID!
	
	# Data reference for the input data
	inData: [DataRef!]
	
	# Additional parameters
	options: [Property!]
	
	# The algorithm factory template used to create the instance
	algorithm: Algorithm!

	# Current state of the algorithm instance
	state: AlgorithmState

	# Scheduled datetime for the algorithm instance
	scheduledRunTime: Time

	# Current progress of the algorithm instance in work units
	progress: Int

	# Data reference for the output data
	outData: [DataRef!]
}

# Algorithm factory template for creating algorithm instances
type Algorithm {
	# service pid that uniquely identifies the algorithm template
	id: ID!

	# Metadata information for the algorithm template
	metadata: AlgorithmMetadata!
}

# Algorithm Metadata type that provides relevant information about the algorithm template
type AlgorithmMetadata {
	# User entered parameters required for the algorithm
	parameters: UserEnteredParameters

	# Formats and number of data inputs the algorithm accepts
	inData: [String!]

	# Formats and number of data the algorithm produces
	outData: [String!]

	# If this metadata element is used, it defines how the output Data produced by the algorithm \
	should be arranged. Data items can be given a parent as part of their metadata (which usually \
	means the Data was derived from the referenced Data). If parentage is set to “default” then each \
	of the algorithm’s output Data items will have their parent Data item set as the first input Data \
	item (if applicable) by the CIShell-conforming application. If parentage is set to something else or \
	is not set at all, then it is up to the algorithm to set up these relationships.
	parentage: String

	# Type of the algorithm. If no type is set, then it is assumed to be of 'Standard Algorithm' type
	type: AlgorithmType

	# Specifies if the algorithm can be run remotely. Valid values are true or false. \
	If this element is not set, then it is assumed that it cannot be run remotely.
	remotable: Boolean

	# A human-readable short name for the algorithm
	label: String

	# Provides more details on workings of the algorithm
	description: String

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
type UserEnteredParameters {
	# Identifier for the object
	id: ID

	# Title to be displayed if presented to the user
	name: String

	# Description
	description: String

	# List of attributes
	attributes: [AttributeDefinition!]
}
`

const inputTypes = `\
# Input type for filtering algorithms based on 
input AlgorithmFilter {
	# Identifier for the algorithm filter object
	id: ID

	# Current state of the algorithm
	state: AlgorithmState

	# Reference ids to the input data
	inputDataRefIds: [ID!]

	# list of formats of the input data
	inputFormat: [String!]

	# list of formats of the output data
	outputFormat: [String!]

	# Maximum number of items to fetch while filtering
	limit: Int

	# Number of items to skip while matching
	offset: Int
}
`

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
enum AlgorithmType{
	# Custom type of CIShell algorithm for converting data of one type to another
	CONVERTER

	# Custom type of CIShell algorithm for providing pre-generated data for use in the CIShell platform
	DATASET

	# Custom type of CIShell algorithm which checks either an incoming or outgoing file to be sure it is of the type specified
	VALIDATOR
}

# For the converter algorithms, it specifies if any data is lost in the conversion
enum ConversionType{
	# Specifies the type of data conversion where no data is lost
	LOSSLESS

	# Specifies the type of data conversion where some data can be lost
	LOSSY
}
`

module.exports = { types, inputTypes, enums };