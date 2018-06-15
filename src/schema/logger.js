const types = `\
# Object type for logging
type Log {
	# Level at which the logs will be logged
	logLevel: LogLevel

	# Log message
	message: String

	# An optional list of strings for logging errors
	stackTrace: [String!]

	# Time that the log was triggered
	timestamp: Time
}

# Paginated Log Query Results
type LogQueryResults implements QueryResults  {
	# A list of matching log references
	results: [Log!]!

	# Pagination information
	pageInfo: PageInfo!
}
`

const inputTypes = `\
# Filter input type to match logs with certain criteria
input LogFilter {
	# Matches all the logs specified in the log level list
	logLevel: [LogLevel!]

	# Matches all the logs logged since a certain timestamp
	logsSince: Time

	# Matches all the logs logged before a certain timestamp
	logsBefoe: Time

	# Maximum number of log objects to be fetched per query
	limit: Int

	# Number of items to skip while matching
	offset: Int
}
`

const enums = `\
# Severity level for the logs
enum LogLevel {
	# The most granular log level. Used for debugging and may be irrelevant to anyone but the algorithm developer.
	DEBUG

	# Indicates a problem occured while executing algorithm or services.
	ERROR

	# Used for providing information about and while hte algorithm is executing. Does not indiate a problem.
	INFO

	# Indicates the algorithm will still be executed, but that outputs may not be what was expected.
	WARNING
}
`

const queries = `
	# Returns all the logs that matches the given log filter
	getLogs(filter: LogFilter): LogQueryResults!
`

const subscriptions = `
	# Receives new logs matching the log levels specified (or all logs)
	logAdded(logLevels: [LogLevel!]): Log!
`

module.exports = { types, inputTypes, enums, queries, subscriptions };
