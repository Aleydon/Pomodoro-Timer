import { TaskModelProps } from './TaskModel';

export type TaskStateProps = {
	tasks: TaskModelProps[];
	secondsRemaining: number;
	formatedSecondsRemaining: string;
	activeTask: TaskModelProps | null;
	currentCycle: number; // 1 - 8
	config: {
		workTime: number;
		shortBreakTime: number;
		longBreakTime: number;
	};
};
