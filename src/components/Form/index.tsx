import { PlayCircleIcon } from 'lucide-react';

import { HomeProps } from '@/pages/Home';

import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';

export function Form({ state }: HomeProps) {
	return (
		<form className="form" action="">
			<div className="formRow">
				<Input label="Task" id="task" type="text" placeholder="Type anything" />
			</div>
			<div className="formRow">
				<p>Task type: {state.tasks.type}</p>
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
