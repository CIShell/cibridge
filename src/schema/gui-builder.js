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

	# List of parameters which includes the type, name, description and options for dropdown boxes
	parameters: [ParameterDefinition]

	# Says if the notification is closed
	isClosed: Boolean

	# Response from the user as a list of key:value mappings
	response: [Property!]
}
`
const inputTypes = `\
# Input filter to match notifications
input NotificationFilter {
	# Identifier for the notification filter object
	id: ID

	# Maximum number of notifications that will be matched against the filter
	limit: Int

	# Number of items to skip while matching
	offset: Int
}
`
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
`

const queries = `
	# Returns the notifications matching the specified criteria given in the filter object
	getNotifications(filter: NotificationFilter!): [Notification!]

	# Returns if the specified notification is closed or not
	isClosed(notificationId: ID!): Boolean
`

const mutations = `
	# Sends the response created by user for the specified notification as a list of key:value mappings
	setNotificationResponse(notificationId: ID, response: [PropertyInput!]): Void

	# Closes the referenced notification
	closeNotification(notificationId: ID): Boolean
`

const subscriptions = `
	# Receives a new notification when its created
	newNotification: Notification
`

module.exports = { types, inputTypes, enums, queries, mutations, subscriptions };
