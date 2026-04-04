import { useReducer, useState } from 'react';

import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

type ActionType = {
	type: string;
	payload?: number;
};

export function TaskContextProvider() {
	const [state, setState] = useState(initialTaskState);

	const [myState, dispatch] = useReducer(
		(state, action: ActionType) => {
			console.log(state, action);

			switch (action.type) {
				case 'INCREMENT':
					return {
						...state,
						secondsRemaining: state.secondsRemaining + (action.payload || 0)
					};
				case 'RESET':
					return {
						...state,
						secondsRemaining: 0
					};
			}

			return state;
		},
		{
			secondsRemaining: 0
		}
	);

	// useEffect(() => {
	// 	console.warn(state);
	// }, [state]);

	return (
		<TaskContext.Provider value={{ state, setState }}>
			{/* {children} */}
			<h1>The State is {JSON.stringify(myState)}</h1>
			<button
				type="button"
				onClick={() => {
					dispatch({ type: 'INCREMENT', payload: 1 });
				}}
			>
				Increment
			</button>
			<button
				type="button"
				onClick={() => {
					dispatch({ type: 'RESET' });
				}}
			>
				Reset
			</button>
		</TaskContext.Provider>
	);
}
