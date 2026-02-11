import { TaskStateProps } from './TaskStateModel';

export type TaskModelProps = {
	id: string;
	title: string;
	duration: number; // in minutes
	startDate: number;
	completedDate: number | null;
	interruptedDate: number | null;
	type: keyof TaskStateProps['config'];
};
