import { PlayCircleIcon } from 'lucide-react';
import { useRef } from 'react';

import { useTaskContext } from '@/contexts/TaskContext/useTaskContext';
import { TaskModelProps } from '@/models/TaskModel';

import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';

export function Form() {
	const taskNameInput = useRef<HTMLInputElement>(null);
	const { state, setState } = useTaskContext();

	function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (taskNameInput.current === null) return;
		const taskName = taskNameInput.current.value;
		if (taskName.trim() === '') {
			alert('Please enter a task name.');
			return;
		}

		const newTask: TaskModelProps = {
			id: Date.now().toString(),
			title: taskName,
			startDate: Date.now(),
			duration: state.secondsRemaining,
			completedDate: null,
			interruptedDate: null,
			type: 'workTime'
		};

		const secondsRemaining = newTask.duration * 60;

		setState(prev => {
			return {
				...prev,
				activeTask: newTask,
				currentCycle: 1,
				secondsRemaining,
				formatedSecondsRemaining: '00:00',
				tasks: [newTask],
				config: {
					...prev.config
				}
			};
		});
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
