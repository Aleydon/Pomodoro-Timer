import { useEffect, useState } from 'react';

import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

export function TaskContextProvider({
	children
}: {
	children: React.ReactNode;
}) {
	const [state, setState] = useState(initialTaskState);

	useEffect(() => {
		console.warn(state);
	}, [state]);

	return (
		<TaskContext.Provider value={{ state, setState }}>
			{children}
		</TaskContext.Provider>
	);
}
