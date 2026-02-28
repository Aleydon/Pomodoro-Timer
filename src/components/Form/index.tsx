import { PlayCircleIcon } from 'lucide-react';
import { useRef } from 'react';

import { useTaskContext } from '@/contexts/TaskContext/useTaskContext';

import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';

export function Form() {
	const taskNameInput = useRef<HTMLInputElement>(null);
	const { state } = useTaskContext();

	function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
	}

	return (
		<form className="form" action="" onSubmit={handleCreateNewTask}>
			<div className="formRow">
				<Input
					label="Task"
					id="task"
					type="text"
					placeholder="Type your task here"
					ref={taskNameInput}
				/>
			</div>
			<div className="formRow">
				<p>The next interval is: {state.secondsRemaining} minutes</p>
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
