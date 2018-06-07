const queries = `
	# Returns the list of algorithms instances that the scheduler has scheduled. \
	This includes the algorithms that are currently running and the ones queued to be run.
	getScheduledAlgorithms: [AlgorithmRef!]

	# Returns if the scheduler is empty or not
	isSchedulerEmpty: Boolean

	# Returns whether the scheduler is running or paused
	isSchedulerRunning: Boolean

	# Returns the count of the algorithms waiting in the scheduler
	getSchedulerQueueWaiting: Int
`

const mutations = `
	# Clears all currently scheduled Algorithms to be run. \
	If an Algorithm is already running, then it will continue to run until finished
	clearScheduler: Void

	# Schedule the referenced algorithm at given time in the scheduler
	scheduleAlgorithm(algorithmRefId: ID!, time: Time!): Void

	# Reschedules an already scheduled Algorithm to be run at a different time. \
	If the Algorithm is not scheduled already, then this method will have no effect and will return false.
	rescheduleAlgorithm(algorithmRefId: ID!, time: Time!): Boolean

	# Schedules an Algorithm to be run immediately. If there are simply not enough resources to run it, \
	it will still have to wait until there are enough resources to fulfill the request.
	runAlgorithmNow(algorithmRefId: ID!): Void

	# Pauses or unpauses the running of new Algorithms in the scheduler
	# Parameters: running - true to pause, false to unpause
	setSchedulerRunning(running: Boolean): Void

	# Unschedules an already scheduled, but not running Algorithm from the scheduler. \
	Tries to unschedule an Algorithm from the scheduler.
	unscheduleAlgorithm(algorithmRefId: ID!): Void
`

const subscriptions = `
	# Receives the reference to an algorithm instance matching the filter criteria when it encounters an error
	algorithmError(filter: AlgorithmFilter): AlgorithmRef

	# Receives the reference to an algorithm instance matching the filter criteria when it starts executing
	algorithmStarted(filter: AlgorithmFilter): AlgorithmRef
	
	# Receives the reference to an algorithm instance matching the filter criteria when it finishes executing
	algorithmFinished(filter: AlgorithmFilter): AlgorithmRef
	
	# Receives the reference to an algorithm instance matching the filter criteria when it is scheduled
	algorithmScheduled(filter: AlgorithmFilter): AlgorithmRef
	
	# Receives the reference to an algorithm instance matching the filter criteria when it is rescheduled
	algorithmRescheduled(filter: AlgorithmFilter): AlgorithmRef
	
	# Receives the reference to an algorithm instance matching the filter criteria when it is unscheduled
	algorithmUnscheduled(filter: AlgorithmFilter): AlgorithmRef
	
	# Receives update when scheduler is cleared
	schedulerCleared: Void
	
	# Receives the current scheduler state when it changes
	schedulerRunStateChanged: Boolean
`

module.exports = { queries, mutations, subscriptions };
