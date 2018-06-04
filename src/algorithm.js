const types = `\
# Algorithm reference type
type AlgorithmRef {
	id: ID!
	inData: [DataRef!]
	options: [Property!]
	algorithm: Algorithm!

	state: AlgorithmState
	scheduledRunTime: Time
	progress: Int
	outData: [DataRef!]
}

type Algorithm {
	id: ID!
	metadata: AlgorithmMetadata!
}

# Algorithm Metadata type
type AlgorithmMetadata {
	parameters: UserEnteredParameters
	inData: [String!]
	outData: [String!]
	parentage: String
	type: AlgorithmType
	remotable: String
	label: String
	description: String
	menuPath: String
	conversion: ConversionType
	authors: String
	implementers: String
	integrators: String
	documentationUrl: String
	reference: String
	referenceUrl: String
	writtenIn: String
	otherProperties: [Property!]
}

type UserEnteredParameters {
	id: ID
	title: String
	description: String
	attributes: [AttributeDefinition!]
}
`

const inputTypes = `\
# input types
input AlgorithmFilter {
	id: ID
	state: AlgorithmState
	inputDataRefIds: [ID!]
	inputFormat: [String!]
	outputFormat: [String!]
	limit: Int
	offset: Int
}
`

const enums = `\
enum AlgorithmState {
	CANCELLED
	ERRORED
	IDLE
	PAUSED
	RUNNING
	SCHEDULED
	WAITING
}

enum AlgorithmType{
	CONVERTER
	DATASET
	VALIDATOR
}

enum ConversionType{
	LOSSLESS
	LOSSY
}
`

module.exports = { types, inputTypes, enums };