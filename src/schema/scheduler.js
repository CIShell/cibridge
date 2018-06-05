const queries = `
	getScheduledAlgorithms: [AlgorithmRef!]
	isSchedulerEmpty: Boolean
	isSchedulerRunning: Boolean
	getSchedulerQueueWaiting: Int
`

const mutations = `
	clearScheduler: Void
	scheduleAlgorithm(algorithmRefId: ID!, time: Time!): Void
	rescheduleAlgorithm(algorithmRefId: ID!, time: Time!): Void
	runAlgorithmNow(algorithmRefId: ID!): Void
	setSchedulerRunning(running: Boolean): Void
	unscheduleAlgorithm(algorithmRefId: ID!): Void
`

const subscriptions = `
	algorithmError(filter: AlgorithmFilter): AlgorithmRef
	algorithmStarted(filter: AlgorithmFilter): AlgorithmRef
	algorithmFinished(filter: AlgorithmFilter): AlgorithmRef
	algorithmScheduled(filter: AlgorithmFilter): AlgorithmRef
	algorithmRescheduled(filter: AlgorithmFilter): AlgorithmRef
	algorithmUnscheduled(filter: AlgorithmFilter): AlgorithmRef
	schedulerCleared: Void
	schedulerRunStateChanged: Boolean
`

module.exports = { queries, mutations, subscriptions };
