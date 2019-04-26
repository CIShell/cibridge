const types = `\
# Generic Property type to store key:value mappings
type Property {
	# Key of the property
	key: String!

	# Value mapped to the key. The data type for the field is left for the user to decide
	value: Value!

	# Type of attribute the property stores eg. integer, boolean, etc.
	attributeType: AttributeType
}

# Definition of the attributes for the user entered parameters which includes name, type and options for dropdown boxes
type ParameterDefinition {
	# Identifier for the attribute
	id: String!

	# Name for the attribute
	name: String!

	# Description
	description: String!

	# Type of the attribute
	type: AttributeType!

	# cardinality of values (a single value, an array or a list) the attribute can have
	cardinality: Int!

	# The default values the attribute can take. A default values are an array of String objects
	defaultValues: String

	# Options for the dropdown boxes
	options: [Property!]
}
`;

const inputTypes = `\
# Generic Property input type to pass key:value mappings over queries and mutations
input PropertyInput {
	# Key of the property
	key: String!

	# Value mapped to the key. The data type for the field is left for the user to decide
	value: Value!

	# Type of attribute the property stores eg. integer, boolean, etc.
    attributeType: AttributeType
}
`;

const enums = `\
# Specifies several primitive data types for ParameterDefinition
enum AttributeType {
	# Boolean has only two possible values: true and false
	BOOLEAN

	# A single byte signed two's complement integer. It has a minimum value of -128 and a maximum value of 127
	BYTE

	# A 2-Byte unicode character. It has minimum value of 0 and maximum value of 65,535
	CHARACTER

	# A double-precision 8-Byte IEEE 754 floating point
	DOUBLE

	# A single-precision 4-Byte IEEE 754 floating point
	FLOAT

	# A 4-Byte signed two's complement integer
	INTEGER

	# A 8-byte signed two's complement integer
	LONG

	# A 2-Byte signed two's complement integer
	SHORT

	# A sequence of characters
	STRING
}
`;

module.exports = { types, inputTypes, enums };
