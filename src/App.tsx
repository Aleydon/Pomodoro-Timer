import './styles/global.css';
import './styles/theme.css';

import { useState } from 'react';

import { TaskContextProvider } from './contexts/TaskContext';
import { TaskStateProps } from './models/TaskStateModel';
import { Home } from './pages/Home';

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

export function App() {
	const [task, setTaskState] = useState(initialTasks);

	return (
		<TaskContextProvider>
			<Home state={task} setState={setTaskState} />;
		</TaskContextProvider>
	);
}
