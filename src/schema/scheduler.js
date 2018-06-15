const queries = `
	# Returns if the scheduler is empty or not
	isSchedulerEmpty: Boolean

	# Returns whether the scheduler is running or paused
	isSchedulerRunning: Boolean

	# Returns the count of the algorithms waiting in the scheduler
	getSchedulerQueueWaiting: Int
`

const mutations = `
	# Cancel or uncancel the referenced algorithm based on the passed boolean value. \
	Returns the algorithm's new cancelled state.
	setAlgorithmCancelled(algorithmInstanceId: ID!, isCancelled: Boolean): Boolean!

	# Pause or unpause the referenced algorithm based on the passed boolean value. \
	Returns the algorithm's new pause state.
	setAlgorithmPaused(algorithmInstanceId: ID!, isPaused: Boolean): Boolean!

	# Removes the given algorithm instance from the system. \
	Returns if the algorithm was successfully removed.
	removeAlgorithm(algorithmInstanceId: ID!): Boolean!

	# Schedules an Algorithm to be run immediately. If there are simply not enough resources to run it, \
	it will still have to wait until there are enough resources to fulfill the request. \
	Returns if the algorithm was successfully started.
	runAlgorithmNow(algorithmInstanceId: ID!): Boolean!

	# Schedule the referenced algorithm at a given time in the scheduler. \
	Returns if the algorithm was successfully scheduled.
	scheduleAlgorithm(algorithmInstanceId: ID!, time: Time!): Boolean!

	# Reschedules an already scheduled Algorithm to be run at a different time. \
	If the Algorithm is not scheduled already, then this method will have no effect and will return false.
	rescheduleAlgorithm(algorithmInstanceId: ID!, time: Time!): Boolean!

	# Unschedules an already scheduled, but not yet running Algorithm from the scheduler. \
	Tries to unschedule an Algorithm from the scheduler.  \
	Returns if the algorithm was successfully started.
	unscheduleAlgorithm(algorithmInstanceId: ID!): Boolean!

	# Clears all currently scheduled Algorithms to be run. \
	If an Algorithm is already running, then it will continue to run until finished. \
	Returns the number of algorithms running after clearing the scheduler.
	clearScheduler: Int!

	# Pauses or unpauses the running of new Algorithms in the scheduler
	# Parameters: running - true to pause, false to unpause. \
	Returns the new schedule state.
	setSchedulerRunning(running: Boolean): Boolean!
`

const subscriptions = `
	# Receives update when scheduler is cleared. Return value is always false.
	schedulerCleared: Boolean!

	# Receives the current scheduler state when it changes
	schedulerRunningChanged: Boolean!
`

module.exports = { queries, mutations, subscriptions };
