import { useReducer, useState } from 'react';

import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

export function TaskContextProvider() {
	const [state, setState] = useState(initialTaskState);

	const [number, dispatch] = useReducer((state, action) => {
		console.log(state, action);

		switch (action) {
			case 'INCREMENT':
				return state + 1;
			case 'DECREMENT':
				return state - 1;
			case 'RESET':
				return 0;
			default:
				break;
		}

		return state;
	}, 0);

	// useEffect(() => {
	// 	console.warn(state);
	// }, [state]);

	return (
		<TaskContext.Provider value={{ state, setState }}>
			{/* {children} */}
			<h1>The Reducer number state is {number}</h1>
			<button
				type="button"
				onClick={() => {
					dispatch('INCREMENT');
				}}
			>
				Increment
			</button>
			<button
				type="button"
				onClick={() => {
					dispatch('DECREMENT');
				}}
			>
				Decrement
			</button>
			<button
				type="button"
				onClick={() => {
					dispatch('RESET');
				}}
			>
				Reset
			</button>
		</TaskContext.Provider>
	);
}
