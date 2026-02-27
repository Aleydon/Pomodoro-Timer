import { createContext, useContext, useState } from 'react';

import { TaskStateProps } from '@/models/TaskStateModel';

const initialTasks: TaskStateProps = {
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

type TaskContextProps = {
	state: TaskStateProps;
	setState: React.Dispatch<React.SetStateAction<TaskStateProps>>;
};

const initialContextValue = {
	state: initialTasks,
	setState: () => {}
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

export function TaskContextProvider({
	children
}: {
	children: React.ReactNode;
}) {
	const [state, setState] = useState(initialTasks);

	return (
		<TaskContext.Provider value={{ state, setState }}>
			{children}
		</TaskContext.Provider>
	);
}

export function useTaskContext() {
	return useContext(TaskContext);
}
