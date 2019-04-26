package org.cishell.cibridge.graphql.schema;

public class CIBridgeSchema {
    public static final String SCHEMA_STRING =
        "# scalar types\n" +
        "# Identifier for the given object\n" +
        "scalar ID\n" +
        "# data type to store values (of any data type specified by the user)\n" +
        "scalar Value\n" +
        "# data type to store datedate information\n" +
        "scalar Date\n" +
        "# data type to store file information\n" +
        "scalar File\n" +
        "# GraphQL root schema\n" +
        "schema {\n" +
        "	# root query type\n" +
        "	query: Query\n" +
        "	# root mutation type\n" +
        "	mutation: Mutation\n" +
        "	# root subscription type\n" +
        "	subscription: Subscription\n" +
        "}\n" +
        "# Root query type\n" +
        "type Query{	\n" +
        "	# Returns all the algorithm factory templates matching the given filter criteria\n" +
        "	getAlgorithmDefinitions(filter: AlgorithmFilter): AlgorithmDefinitionQueryResults!\n" +
        "	# Returns all the algorithm instances matching the given filter criteria\n" +
        "	getAlgorithmInstances(filter: AlgorithmFilter): AlgorithmInstanceQueryResults!\n" +
        "	# Validates the given data that is proposed to be given to the algorithm\n" +
        "	validateData(algorithmDefinitionId: ID!, dataIds: [ID]!): String\n" +
        "	# Determines the input format from the referenced data and 	finds the chain of converter algorithms to convert the data to the specified output format\n" +
        "	findConverters(dataId: ID!, outFormat: String!): [AlgorithmDefinition!]!\n" +
        "	# Find the chain of converter algorithms to convert data from given input format to given output format\n" +
        "	findConvertersByFormat(inFormat: String!, outFormat: String!): [AlgorithmDefinition!]!\n" +
        "	# Returns references for all the data objects that matches the given filter\n" +
        "	getData(filter: DataFilter): DataQueryResults!\n" +
        "	# Downloads the data associated with the given data reference as a file\n" +
        "	downloadData(dataId: ID!): File!\n" +
        "	# Returns the notifications matching the specified criteria given in the filter object\n" +
        "	getNotifications(filter: NotificationFilter!): NotificationQueryResults!\n" +
        "	# Returns if the specified notification is closed or not\n" +
        "	isClosed(notificationId: ID!): Boolean!\n" +
        "	# Returns if the scheduler is empty or not\n" +
        "	isSchedulerEmpty: Boolean\n" +
        "	# Returns whether the scheduler is running or paused\n" +
        "	isSchedulerRunning: Boolean\n" +
        "	# Returns the count of the algorithms waiting in the scheduler\n" +
        "	getSchedulerQueueWaiting: Int\n" +
        "	# Returns all the logs that matches the given log filter\n" +
        "	getLogs(filter: LogFilter): LogQueryResults!\n" +
        "	# TODO: Decide on preferences strategy\n" +
        "	# User Preferences\n" +
        "	# Currently in CIShell Spec, but not used.\n" +
        "	# getUserPreferences(algorithm: AlgorithmDefinition): Preferences\n" +
        "	# getSystemPreferences(algorithm: AlgorithmDefinition): Preferences\n" +
        "	# getSystemPreferences: Preferences\n" +
        "}\n" +
        "# Root mutation type\n" +
        "type Mutation{	\n" +
        "	# Create instance of the given algorithm template using the data references\n" +
        "	createAlgorithm(algorithmDefinitionId: ID!, dataIds: [ID!], parameters: [PropertyInput!]): AlgorithmInstance!\n" +
        "	# Uploads a data file and creates the data reference in the data manager\n" +
        "	uploadData(file: File!, properties: DataProperties): Data!\n" +
        "	# Removes the referenced data from the data manager\n" +
        "	removeData(dataId: ID): Boolean!\n" +
        "	# Sets label to the referenced data\n" +
        "	updateData(dataId: ID, properties: DataProperties): Boolean!\n" +
        "	# Sends the response from the user for the specified notification\n" +
        "	setNotificationResponse(notificationId: ID!, response: NotificationResponse!): Boolean!\n" +
        "	# Closes the referenced notification\n" +
        "	closeNotification(notificationId: ID): Boolean\n" +
        "	# Cancel or uncancel the referenced algorithm based on the passed boolean value. 	Returns the algorithm's new cancelled state.\n" +
        "	setAlgorithmCancelled(algorithmInstanceId: ID!, isCancelled: Boolean): Boolean!\n" +
        "	# Pause or unpause the referenced algorithm based on the passed boolean value. 	Returns the algorithm's new pause state.\n" +
        "	setAlgorithmPaused(algorithmInstanceId: ID!, isPaused: Boolean): Boolean!\n" +
        "	# Removes the given algorithm instance from the system. 	Returns if the algorithm was successfully removed.\n" +
        "	removeAlgorithm(algorithmInstanceId: ID!): Boolean!\n" +
        "	# Schedules an Algorithm to be run immediately. If there are simply not enough resources to run it, 	it will still have to wait until there are enough resources to fulfill the request. 	Returns if the algorithm was successfully started.\n" +
        "	runAlgorithmNow(algorithmInstanceId: ID!): Boolean!\n" +
        "	# Schedule the referenced algorithm at a given date in the scheduler. 	Returns if the algorithm was successfully scheduled.\n" +
        "	scheduleAlgorithm(algorithmInstanceId: ID!, date: Date!): Boolean!\n" +
        "	# Reschedules an already scheduled Algorithm to be run at a different date. 	If the Algorithm is not scheduled already, then this method will have no effect and will return false.\n" +
        "	rescheduleAlgorithm(algorithmInstanceId: ID!, date: Date!): Boolean!\n" +
        "	# Unschedules an already scheduled, but not yet running Algorithm from the scheduler. 	Tries to unschedule an Algorithm from the scheduler.  	Returns if the algorithm was successfully started.\n" +
        "	unscheduleAlgorithm(algorithmInstanceId: ID!): Boolean!\n" +
        "	# Clears all currently scheduled Algorithms to be run. 	If an Algorithm is already running, then it will continue to run until finished. 	Returns the number of algorithms running after clearing the scheduler.\n" +
        "	clearScheduler: Int!\n" +
        "	# Pauses or unpauses the running of new Algorithms in the scheduler\n" +
        "	# Parameters: running - true to pause, false to unpause. 	Returns the new schedule state.\n" +
        "	setSchedulerRunning(running: Boolean): Boolean!\n" +
        "}\n" +
        "# Root subscription type\n" +
        "type Subscription{	\n" +
        "	# Receives the algorithm template when it is added\n" +
        "	algorithmDefinitionAdded: AlgorithmDefinition!\n" +
        "	# Receives the algorithm template when it is removed\n" +
        "	algorithmDefinitionRemoved: AlgorithmDefinition!\n" +
        "	# Receives the algorithm instance when it is updated and is optionally matched by the filter\n" +
        "	algorithmInstanceUpdated(filter: AlgorithmFilter): AlgorithmInstance!\n" +
        "	# Receives a new notification when its created\n" +
        "	notificationAdded: Notification!\n" +
        "	# Received a notification when it has been updated\n" +
        "	notificationUpdated: Notification!\n" +
        "	# Receives the reference to a data object when it is added to the data manager\n" +
        "	dataAdded: Data!\n" +
        "	# Receives the reference to a data object when it is removed from the data manager\n" +
        "	dataRemoved: Data!\n" +
        "	# Receives the reference to a data object when it is updated\n" +
        "	dataUpdated: Data!\n" +
        "	# Receives update when scheduler is cleared. Return value is always false.\n" +
        "	schedulerCleared: Boolean!\n" +
        "	# Receives the current scheduler state when it changes\n" +
        "	schedulerRunningChanged: Boolean!\n" +
        "	# Receives new logs matching the log levels specified (or all logs)\n" +
        "	logAdded(logLevels: [LogLevel!]): Log!\n" +
        "}\n" +
        "# type to store info related to pagination. TODO: Finalize our pagination strategy\n" +
        "type PageInfo {\n" +
        "	# Whether there is more data to return in another page\n" +
        "	hasNextPage: Boolean!\n" +
        "	# If there is a previous page of data\n" +
        "	hasPreviousPage: Boolean!\n" +
        "}\n" +
        "# interface used for pageable query results\n" +
        "interface QueryResults {\n" +
        "	# Pagination information\n" +
        "	pageInfo: PageInfo!\n" +
        "}\n" +
        "# Reference to an algorithm instance\n" +
        "type AlgorithmInstance {\n" +
        "	# Reference ID for the algorithm instance\n" +
        "	id: ID!\n" +
        "	# The input data given to the algorithm\n" +
        "	inData: [Data!]\n" +
        "	# Additional parameters given to the algorithm by the user\n" +
        "	parameters: [Property!]\n" +
        "	# The algorithm definition used to create the instance\n" +
        "	algorithmDefinition: AlgorithmDefinition!\n" +
        "	# Current state of the algorithm instance\n" +
        "	state: AlgorithmState\n" +
        "	# Scheduled run time for the algorithm instance\n" +
        "	scheduledRunTime: Date\n" +
        "	# Current progress of the algorithm instance, from 1 to 100\n" +
        "	progress: Int\n" +
        "	# Data outputted after algorithm execution\n" +
        "	outData: [Data!]\n" +
        "}\n" +
        "# Algorithm definition for creating algorithm instances\n" +
        "type AlgorithmDefinition {\n" +
        "	# ID that uniquely identifies the algorithm definition\n" +
        "	id: ID!\n" +
        "	# Input parameters required by the algorithm\n" +
        "	parameters: InputParameters\n" +
        "	# Formats and number of data inputs the algorithm accepts\n" +
        "	inData: [String!]\n" +
        "	# Formats and number of data the algorithm produces\n" +
        "	outData: [String!]\n" +
        "	# A human-readable short name for the algorithm\n" +
        "	label: String\n" +
        "	# A description which provides more details on workings of the algorithm\n" +
        "	description: String\n" +
        "	# If the output Data produced by an instance of this algorithm should be a child 	of the first input Data item (if applicable). If this is set to false or is 	not set at all, then it is up to the algorithm to set up these relationships.\n" +
        "	parentOutputData: Boolean\n" +
        "	# Type of the algorithm. If no type is set, then it is assumed to be of type AlgorithmType.STANDARD\n" +
        "	type: AlgorithmType\n" +
        "	# Specifies if the algorithm can be run remotely. 	If this property is not set, then it is assumed that it cannot be run remotely.\n" +
        "	remoteable: Boolean\n" +
        "	# Specifies where on the menu an algorithm is to be placed if a menu bar is used. 	Otherwise, it can act as a primitive hierarchical classification of the algorithm.\n" +
        "	menuPath: String\n" +
        "	# For converter algorithms, specifies the types of conversion which can be lossy or loseless\n" +
        "	conversion: ConversionType\n" +
        "	# A comma separated list of the authors of the abstract algorithm\n" +
        "	authors: String\n" +
        "	# A comma separated list of the developers who implemented the algorithm in code\n" +
        "	implementers: String\n" +
        "	# A comma separated list of the developers who integrated the algorithm code as a compliant CIShell algorithm\n" +
        "	integrators: String\n" +
        "	# A URL to relevant documentation for the algorithm\n" +
        "	documentationUrl: String\n" +
        "	# A formal reference to a paper explaining the abstract algorithm\n" +
        "	reference: String\n" +
        "	# A URL to a paper explaining the abstract algorithm\n" +
        "	referenceUrl: String\n" +
        "	# A comma separated list of the programming languages used to implement and integrate the algorithm code\n" +
        "	writtenIn: String\n" +
        "	# Additional metadata information apart from standard metadata\n" +
        "	otherProperties: [Property!]\n" +
        "}\n" +
        "# Specifies parameter inputs required for the algorithm\n" +
        "type InputParameters {\n" +
        "	# Identifier for the input parameters object\n" +
        "	id: ID\n" +
        "	# Title to be displayed if presented to the user\n" +
        "	title: String\n" +
        "	# Description\n" +
        "	description: String\n" +
        "	# List of specific parameters\n" +
        "	parameters: [ParameterDefinition!]\n" +
        "}\n" +
        "# Paginated Algorithm Definition Query Results\n" +
        "type AlgorithmDefinitionQueryResults implements QueryResults  {\n" +
        "	# A list of matching algorithm definitions\n" +
        "	results: [AlgorithmDefinition!]!\n" +
        "	# Pagination information\n" +
        "	pageInfo: PageInfo!\n" +
        "}\n" +
        "# Paginated Algorithm Instance Query Results\n" +
        "type AlgorithmInstanceQueryResults implements QueryResults  {\n" +
        "	# A list of matching algorithm references\n" +
        "	results: [AlgorithmInstance!]!\n" +
        "	# Pagination information\n" +
        "	pageInfo: PageInfo!\n" +
        "}\n" +
        "# Input type for filtering algorithms based on\n" +
        "input AlgorithmFilter {\n" +
        "	# list of algorithm definition IDs to match on\n" +
        "	algorithmDefinitionIds: [ID!]\n" +
        "	# list of AlgorithmInstance IDs to match on\n" +
        "	algorithmInstanceIds: [ID!]\n" +
        "	# list of algorithm states to match on\n" +
        "	states: [AlgorithmState!]\n" +
        "	# List of reference ids to the input data to match on\n" +
        "	inputDataIds: [ID!]\n" +
        "	# list of formats of the input data to match on\n" +
        "	inputFormats: [String!]\n" +
        "	# list of formats of the output data to match on\n" +
        "	outputFormats: [String!]\n" +
        "	# A list of key/value pairs to match on in the algorithm metadata\n" +
        "	properties: [PropertyInput]\n" +
        "	# Maximum number of items to fetch while filtering\n" +
        "	limit: Int\n" +
        "	# Number of items to skip while matching\n" +
        "	offset: Int\n" +
        "}\n" +
        "# Specifies the current state of the algorithm instance\n" +
        "enum AlgorithmState {\n" +
        "	# The algorithm was cancelled by the user\n" +
        "	CANCELLED\n" +
        "	# The algorithm encountered error during the run\n" +
        "	ERRORED\n" +
        "	# The algorithm finished executing\n" +
        "	FINISHED\n" +
        "	# The algorithm is created and waiting to be scheduled\n" +
        "	IDLE\n" +
        "	# The algorithm is paused\n" +
        "	PAUSED\n" +
        "	# The algorithm is running currently\n" +
        "	RUNNING\n" +
        "	# The algorithm is scheduled and waiting to be executed\n" +
        "	SCHEDULED\n" +
        "	# The algorithm is waiting for user input\n" +
        "	WAITING\n" +
        "}\n" +
        "# The specific types of algorithm\n" +
        "enum AlgorithmType {\n" +
        "	# A type of algorithm for converting data of one type to another. 	TODO: make converters be a separate entity from Algorithms\n" +
        "	CONVERTER\n" +
        "	# A type of algorithm for providing pre-generated data for use in the CIShell platform\n" +
        "	DATASET\n" +
        "	# The default type of algorithm\n" +
        "	STANDARD\n" +
        "	# A type of algorithm which checks either an incoming or outgoing file to be sure it is of the type specified\n" +
        "	VALIDATOR\n" +
        "}\n" +
        "# For the converter algorithms, it specifies if any data is lost in the conversion\n" +
        "enum ConversionType {\n" +
        "	# Specifies the type of data conversion where no data is lost\n" +
        "	LOSSLESS\n" +
        "	# Specifies the type of data conversion where some data can be lost\n" +
        "	LOSSY\n" +
        "}\n" +
        "# Reference to data stored on the server\n" +
        "type Data {\n" +
        "	# Reference ID to the data\n" +
        "	id: ID!\n" +
        "	# format of the data\n" +
        "	format: String!\n" +
        "	# A short label to give the Data object for shorter displays. It is recommended to keep the string length below 20 characters\n" +
        "	name: String\n" +
        "	# The label to give the data object if displayed\n" +
        "	label: String\n" +
        "	# The parent data object of the data object. 	This is used when a data object is derived from another data object to show the hierarchical relationship between them. 	This property can be null, signifying that the data object was not derived from any other data object, 	such as when loading a new data object from a file.\n" +
        "	parentDataId: ID\n" +
        "	# Specifies the general type of the data\n" +
        "	type: DataType\n" +
        "	# Flag to determine if the Data object has been modified and not saved since the modification. 	This is used to do things like notify the user before they exit that a modified Data object exists and ask if they want to save it.\n" +
        "	isModified: Boolean\n" +
        "	# Other metadata information related to the data\n" +
        "	otherProperties: [Property!]\n" +
        "}\n" +
        "# Paginated Algorithm Definition Query Results\n" +
        "type DataQueryResults implements QueryResults {\n" +
        "	# A list of matching algorithm references\n" +
        "	results: [Data!]!\n" +
        "	# Pagination information\n" +
        "	pageInfo: PageInfo!\n" +
        "}\n" +
        "# Input type to filter data objects\n" +
        "input DataFilter {\n" +
        "	# list of data IDs to match on\n" +
        "	dataIds: [ID!]\n" +
        "	# Filter the data objects based on the given formats\n" +
        "	formats: [String!]\n" +
        "	# Filter the data by modified state\n" +
        "	isModified: Boolean\n" +
        "	# Filter the data by data types\n" +
        "	types: [DataType!]\n" +
        "	# A list of key/value pairs to match on in the algorithm metadata\n" +
        "	properties: [PropertyInput]\n" +
        "    # Maximum number of items to fetch while filtering\n" +
        "    limit: Int\n" +
        "    # Number of items to skip while matching\n" +
        "    offset: Int\n" +
        "}\n" +
        "# Input type for uploading new data or updating existing ones\n" +
        "input DataProperties {\n" +
        "	# format of the data\n" +
        "	format: String\n" +
        "	# A short label to give the Data object for shorter displays. It is recommended to keep the string length below 20 characters\n" +
        "	name: String\n" +
        "	# The label to give the data object if displayed\n" +
        "	label: String\n" +
        "	# The parent data object of the data object. 	This is used when a data object is derived from another data object to show the hierarchical relationship between them. 	This property can be null, signifying that the data object was not derived from any other data object, 	such as when loading a new data object from a file.\n" +
        "	parent: String\n" +
        "	# Specifies the generic type of the data\n" +
        "	type: DataType\n" +
        "	# Other metadata information related to the data\n" +
        "	otherProperties: [PropertyInput!]\n" +
        "}\n" +
        "# Enum type to specify the general type of data objects\n" +
        "enum DataType {\n" +
        "	# The data model is abstractly a database\n" +
        "	DATABASE\n" +
        "	# The data model is abstractly a matrix\n" +
        "	MATRIX\n" +
        "	# the data model is a 'model' object\n" +
        "	MODEL\n" +
        "	# The data model is abstractly a network\n" +
        "	NETWORK\n" +
        "	# The data model is abstractly a data plot\n" +
        "	PLOT\n" +
        "	# The data model is a JPEG object\n" +
        "	RASTERIMAGE\n" +
        "	# The data model is an 'R Instance' object\n" +
        "	RINSTANCE\n" +
        "	# The data model is abstractly a table\n" +
        "	TABLE\n" +
        "	# The data model is abstractly a plain text file\n" +
        "	TEXT\n" +
        "	# The data model is abstractly a tree\n" +
        "	TREE\n" +
        "	# The data model is abstractly an unknown type\n" +
        "	UNKNOWN\n" +
        "	# The data model is a PostScript file\n" +
        "	VECTORIMAGE\n" +
        "}\n" +
        "# Type to create client side notifications\n" +
        "type Notification {\n" +
        "	# Identifier for the object\n" +
        "	id: ID\n" +
        "	# Type of the notification\n" +
        "	type: NotificationType\n" +
        "	# Short title of the notification\n" +
        "	title: String\n" +
        "	# Message of the notification\n" +
        "	message: String\n" +
        "	# Detailed description for the notification\n" +
        "	detail: String\n" +
        "	# A stack trace of the error to be shown, where applicable\n" +
        "	stackTrace: [String!]\n" +
        "	# List of parameters which includes the type, name, description and options for dropdown boxes\n" +
        "	formParameters: [ParameterDefinition]\n" +
        "	# Says if the notification is closed\n" +
        "	isClosed: Boolean\n" +
        "	# If the notification type is FORM, response from the user as a list of key:value mappings\n" +
        "	formResponse: [Property!]\n" +
        "	# If the notification type is QUESTION, whether the user pressed Yes or No\n" +
        "	questionResponse: Boolean\n" +
        "	# If the notification type is CONFIRM, whether the user pressed Ok or Cancel\n" +
        "	confirmationResponse: Boolean\n" +
        "}\n" +
        "# Paginated Notification Query Results\n" +
        "type NotificationQueryResults implements QueryResults  {\n" +
        "	# A list of matching notification references\n" +
        "	results: [Notification!]!\n" +
        "	# Pagination information\n" +
        "	pageInfo: PageInfo!\n" +
        "}\n" +
        "# Input filter to match notifications\n" +
        "input NotificationFilter {\n" +
        "	# list of notification IDs to match on\n" +
        "	ids: [ID!]\n" +
        "	# Filter the data by isClosed state\n" +
        "	isClosed: Boolean\n" +
        "	# Maximum number of notifications that will be matched against the filter\n" +
        "	limit: Int\n" +
        "	# Number of items to skip while matching\n" +
        "	offset: Int\n" +
        "}\n" +
        "# Input to send the user response to a notification\n" +
        "input NotificationResponse {\n" +
        "	# If the notification type is FORM, response from the user as a list of key:value mappings\n" +
        "	formResponse: [PropertyInput!]\n" +
        "	# If the notification type is QUESTION, whether the user pressed Yes (true) or No (false)\n" +
        "	questionResponse: Boolean\n" +
        "	# If the notification type is CONFIRM, whether the user pressed Ok (true) or Cancel (false)\n" +
        "	confirmationResponse: Boolean\n" +
        "	# If the notification should be closed as part of the response\n" +
        "	closeNotification: Boolean\n" +
        "}\n" +
        "# Specifies the general type of notifications\n" +
        "enum NotificationType {\n" +
        "	# Type of alert notifications to inform the user of important fact and requires user confirmation before preceeding\n" +
        "	CONFIRM\n" +
        "	# Type of notifications to report an error or a problem that has occured\n" +
        "	ERROR\n" +
        "	# Type of notifications to ask form inputs from user\n" +
        "	FORM\n" +
        "	# Type of notifications to simply inform the user about a situation\n" +
        "	INFORMATION\n" +
        "	# Type of notifications that asks the user whether an action should proceed or not. It can be a simple YES or NO question.\n" +
        "	QUESTION\n" +
        "	# Type of notifications to warn user of a situation which requires user's attention\n" +
        "	WARNING\n" +
        "}\n" +
        "# Object type for logging\n" +
        "type Log {\n" +
        "	# Level at which the logs will be logged\n" +
        "	logLevel: LogLevel\n" +
        "	# Log message\n" +
        "	message: String\n" +
        "	# An optional list of strings for logging errors\n" +
        "	stackTrace: [String!]\n" +
        "	# Timestamp when the log was triggered\n" +
        "	timestamp: Date\n" +
        "}\n" +
        "# Paginated Log Query Results\n" +
        "type LogQueryResults implements QueryResults  {\n" +
        "	# A list of matching log references\n" +
        "	results: [Log!]!\n" +
        "	# Pagination information\n" +
        "	pageInfo: PageInfo!\n" +
        "}\n" +
        "# Filter input type to match logs with certain criteria\n" +
        "input LogFilter {\n" +
        "	# Matches all the logs specified in the log level list\n" +
        "	logLevel: [LogLevel!]\n" +
        "	# Matches all the logs logged since a certain timestamp\n" +
        "	logsSince: Date\n" +
        "	# Matches all the logs logged before a certain timestamp\n" +
        "	logsBefore: Date\n" +
        "	# Maximum number of log objects to be fetched per query\n" +
        "	limit: Int\n" +
        "	# Number of items to skip while matching\n" +
        "	offset: Int\n" +
        "}\n" +
        "# Severity level for the logs\n" +
        "enum LogLevel {\n" +
        "	# The most granular log level. Used for debugging and may be irrelevant to anyone but the algorithm developer.\n" +
        "	DEBUG\n" +
        "	# Indicates a problem occured while executing algorithm or services.\n" +
        "	ERROR\n" +
        "	# Used for providing information about and while hte algorithm is executing. Does not indiate a problem.\n" +
        "	INFO\n" +
        "	# Indicates the algorithm will still be executed, but that outputs may not be what was expected.\n" +
        "	WARNING\n" +
        "}\n" +
        "# Generic Property type to store key:value mappings\n" +
        "type Property {\n" +
        "	# Key of the property\n" +
        "	key: String!\n" +
        "	# Value mapped to the key. The data type for the field is left for the user to decide\n" +
        "	value: Value!\n" +
        "	# Type of attribute the property stores eg. integer, boolean, etc.\n" +
        "	attributeType: AttributeType\n" +
        "}\n" +
        "# Definition of the attributes for the user entered parameters which includes name, type and options for dropdown boxes\n" +
        "type ParameterDefinition {\n" +
        "	# Identifier for the attribute\n" +
        "	id: String!\n" +
        "	# Name for the attribute\n" +
        "	name: String!\n" +
        "	# Description\n" +
        "	description: String!\n" +
        "	# Type of the attribute\n" +
        "	type: AttributeType!\n" +
        "	# cardinality of values (a single value, an array or a list) the attribute can have\n" +
        "	cardinality: Int!\n" +
        "	# The default values the attribute can take. A default values are an array of String objects\n" +
        "	defaultValues: String\n" +
        "	# Options for the dropdown boxes\n" +
        "	options: [Property!]\n" +
        "}\n" +
        "# Generic Property input type to pass key:value mappings over queries and mutations\n" +
        "input PropertyInput {\n" +
        "	# Key of the property\n" +
        "	key: String!\n" +
        "	# Value mapped to the key. The data type for the field is left for the user to decide\n" +
        "	value: Value!\n" +
        "	# Type of attribute the property stores eg. integer, boolean, etc.\n" +
        "    attributeType: AttributeType\n" +
        "}\n" +
        "# Specifies several primitive data types for ParameterDefinition\n" +
        "enum AttributeType {\n" +
        "	# Boolean has only two possible values: true and false\n" +
        "	BOOLEAN\n" +
        "	# A single byte signed two's complement integer. It has a minimum value of -128 and a maximum value of 127\n" +
        "	BYTE\n" +
        "	# A 2-Byte unicode character. It has minimum value of 0 and maximum value of 65,535\n" +
        "	CHARACTER\n" +
        "	# A double-precision 8-Byte IEEE 754 floating point\n" +
        "	DOUBLE\n" +
        "	# A single-precision 4-Byte IEEE 754 floating point\n" +
        "	FLOAT\n" +
        "	# A 4-Byte signed two's complement integer\n" +
        "	INTEGER\n" +
        "	# A 8-byte signed two's complement integer\n" +
        "	LONG\n" +
        "	# A 2-Byte signed two's complement integer\n" +
        "	SHORT\n" +
        "	# A sequence of characters\n" +
        "	STRING\n" +
        "}\n";
}
