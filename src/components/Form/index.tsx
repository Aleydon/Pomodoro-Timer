import { PlayCircleIcon } from 'lucide-react';

import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';

export function Form() {
	return (
		<form className="form" action="">
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
