import { createContext } from 'react';

import { TaskStateProps } from '@/models/TaskStateModel';

import { initialTaskState } from './initialTaskState';

type TaskContextProps = {
	state: TaskStateProps;
	setState: React.Dispatch<React.SetStateAction<TaskStateProps>>;
};

const initialContextValue = {
	state: initialTaskState,
	setState: () => {}
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
