const types = `\
type Log {
	logLevel: LogLevel
	message: String
	stackTrace: [String!]
}
`

const inputTypes = `\
input LogFilter {
	logLevel: [LogLevel!]
	logsSince: Time
	limit: Int
	offset: Int
}
`

const enums = `\
enum LogLevel {
	DEBUG
	ERROR
	INFO
	WARNING
}
`

const queries = `
	getLogs(filter: LogFilter): [Log!]!
`

const subscriptions = `
	log(filter: LogFilter): Log
	errorLog(filter: LogFilter): Log
	warningLog(filter: LogFilter): Log
	infoLog(filter: LogFilter): Log
	debugLog(filter: LogFilter): Log
`
module.exports = { types, inputTypes, enums, queries, subscriptions };
