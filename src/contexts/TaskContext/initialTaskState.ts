import { TaskStateProps } from '@/models/TaskStateModel';

export const initialTaskState: TaskStateProps = {
	tasks: {
		id: '1',
		title: 'Example Task',
		duration: 25,
		startDate: Date.now(),
		completedDate: null,
		interruptedDate: null,
		type: 'workTime'
	},
	secondsRemaining: 0,
	formatedSecondsRemaining: '00:00',
	activeTask: null,
	currentCycle: 0,
	config: {
		workTime: 25,
		shortBreakTime: 5,
		longBreakTime: 15
	}
};
