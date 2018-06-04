const types = `\
# Generic Property {Key:Value} type
type Property {
	key: String!
	value: Value!
}

type AttributeDefinition {
	id: String!
	name: String!
	type: AttributeType!
	options: [Property!]
}
`
const inputTypes = `\
input PropertyInput {
	key: String!
	value: Value!
}
`
const enums = `\
enum AttributeType {
	BOOLEAN
	BYTE
	CHARACTER
	DOUBLE
	FLOAT
	INTEGER
	LONG
	SHORT
	STRING
}
`
module.exports = { types, inputTypes, enums };