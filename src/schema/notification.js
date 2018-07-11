const types = `\
# Type to create client side notifications
type Notification {

	# Identifier for the object
	id: ID

	# Type of the notification
	type: NotificationType

	# Short title of the notification
	title: String

	# Message of the notification
	message: String

	# Detailed description for the notification
	detail: String

	# A stack trace of the error to be shown, where applicable
	stackTrace: [String!]

	# List of parameters which includes the type, name, description and options for dropdown boxes
	formParameters: [ParameterDefinition]

	# Says if the notification is closed
	isClosed: Boolean

	# If the notification type is FORM, response from the user as a list of key:value mappings
	formResponse: [Property!]

	# If the notification type is QUESTION, whether the user pressed Yes or No
	questionResponse: Boolean

	# If the notification type is CONFIRM, whether the user pressed Ok or Cancel
	confirmationResponse: Boolean
}

# Paginated Notification Query Results
type NotificationQueryResults implements QueryResults  {
	# A list of matching notification references
	results: [Notification!]!

	# Pagination information
	pageInfo: PageInfo!
}
`;

const inputTypes = `\
# Input filter to match notifications
input NotificationFilter {
	# list of notification IDs to match on
	ids: [ID!]

	# Filter the data by isClosed state
	isClosed: Boolean

	# Maximum number of notifications that will be matched against the filter
	limit: Int

	# Number of items to skip while matching
	offset: Int
}

# Input to send the user response to a notification
input NotificationResponse {

	# If the notification type is FORM, response from the user as a list of key:value mappings
	formResponse: [PropertyInput!]

	# If the notification type is QUESTION, whether the user pressed Yes (true) or No (false)
	questionResponse: Boolean

	# If the notification type is CONFIRM, whether the user pressed Ok (true) or Cancel (false)
	confirmationResponse: Boolean

	# If the notification should be closed as part of the response
	closeNotification: Boolean
}
`;

const enums = `\
# Specifies the general type of notifications
enum NotificationType {
	# Type of alert notifications to inform the user of important fact and requires user confirmation before preceeding
	CONFIRM

	# Type of notifications to report an error or a problem that has occured
	ERROR

	# Type of notifications to ask form inputs from user
	FORM

	# Type of notifications to simply inform the user about a situation
	INFORMATION

	# Type of notifications that asks the user whether an action should proceed or not. It can be a simple YES or NO question.
	QUESTION

	# Type of notifications to warn user of a situation which requires user's attention
	WARNING
}
`;

const queries = `
	# Returns the notifications matching the specified criteria given in the filter object
	getNotifications(filter: NotificationFilter!): NotificationQueryResults!

	# Returns if the specified notification is closed or not
	isClosed(notificationId: ID!): Boolean!
`;

const mutations = `
	# Sends the response from the user for the specified notification
	setNotificationResponse(notificationId: ID!, response: NotificationResponse!): Boolean!

	# Closes the referenced notification
	closeNotification(notificationId: ID): Boolean
`;

const subscriptions = `
	# Receives a new notification when its created
	notificationAdded: Notification!

	# Received a notification when it has been updated
	notificationUpdated: Notification!
`;

module.exports = { types, inputTypes, enums, queries, mutations, subscriptions };
