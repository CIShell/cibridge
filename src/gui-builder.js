const types = `\
type Notification {
	type: NotificationType
	title: String
	message: String
	detail: String
	parameters: [AttributeDefinition]
	isClosed: Boolean
	response: [Property!]
}
`
const inputTypes = `\
input NotificationFilter {
	id: ID
	limit: Int
	offset: Int
}
`
const enums = `\
enum NotificationType {
	CONFIRM
	ERROR
	INFORMATION
	QUESTION
	WARNING
}
`

const queries = `
	getNotifications(filter: NotificationFilter!): [Notification!]
	isClosed(notificationId: ID!): Boolean
`

const mutations = `
	setNotificationResponse(notificationId: ID, response: [PropertyInput!]): Void
	closeNotification(notificationId: ID): Boolean
`

const subscriptions = `
	newNotification: Notification
`

module.exports = { types, inputTypes, enums, queries, mutations, subscriptions };