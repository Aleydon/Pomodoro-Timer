import { PlayCircleIcon } from 'lucide-react';

import { useTaskContext } from '@/contexts/TaskContext';

import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';

export function Form() {
	const { setState } = useTaskContext();

	function handleClick() {
		setState(prevState => ({
			...prevState,
			formatedSecondsRemaining: '25:00'
		}));
	}

	return (
		<form className="form" action="">
			<button type="button" onClick={handleClick}>
				Click me
			</button>
			<div className="formRow">
				<Input label="Task" id="task" type="text" placeholder="Type anything" />
			</div>
			<div className="formRow">
				<p>Task type: </p>
			</div>
			<div className="formRow">
				<Cycles />
			</div>
			<div className="formRow">
				<Button type="submit" icon={<PlayCircleIcon />} />
			</div>
		</form>
	);
}
