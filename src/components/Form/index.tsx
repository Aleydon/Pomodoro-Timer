import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useRef } from 'react';

import { useTaskContext } from '@/contexts/TaskContext/useTaskContext';
import { TaskModelProps } from '@/models/TaskModel';
import { formatSecondsToMinutes } from '@/utils/formatSecondsToMinutes';
import { getNextCycle } from '@/utils/getNextCycle';
import { getNextCycleType } from '@/utils/getNextCycleType';

import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';

export function Form() {
	const taskNameInput = useRef<HTMLInputElement>(null);
	const { state, setState } = useTaskContext();

	const nextCycle = getNextCycle(state.currentCycle);
	const nextCycleType = getNextCycleType(nextCycle);

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
			duration: state.config[nextCycleType],
			completedDate: null,
			interruptedDate: null,
			type: nextCycleType
		};

		const secondsRemaining = newTask.duration * 60;

		setState(prev => {
			return {
				...prev,
				activeTask: newTask,
				currentCycle: nextCycle,
				secondsRemaining,
				formatedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
				tasks: [newTask],
				config: {
					...prev.config
				}
			};
		});
	}

	function handleInterruptTask() {
		setState(prev => {
			return {
				...prev,
				activeTask: null,
				secondsRemaining: 0,
				formatedSecondsRemaining: '00:00',
				tasks: prev.tasks.map(task => {
					if (prev.activeTask && task.id === prev.activeTask?.id) {
						return {
							...task,
							interruptedDate: Date.now()
						};
					}
					return task;
				}) as TaskModelProps[]
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
					disabled={!!state.activeTask}
				/>
			</div>
			<div className="formRow">
				<p>The next interval is: {state.secondsRemaining} minutes</p>
			</div>
			{state.currentCycle > 0 && (
				<div className="formRow">
					<Cycles />
				</div>
			)}

			<div className="formRow">
				{!state.activeTask ? (
					<Button
						arial-label="Initiate a new task"
						title="Initiate a new task"
						type="submit"
						key="startTask"
						icon={<PlayCircleIcon />}
					/>
				) : (
					<Button
						arial-label="Stop task"
						title="Stop current task"
						type="button"
						key="stopTask"
						color="red"
						icon={<StopCircleIcon />}
						onClick={handleInterruptTask}
					/>
				)}
			</div>
		</form>
	);
}
