import './styles/global.css';
import './styles/theme.css';

import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Cycles } from './components/Cycles';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

export function App() {
	return (
		<>
			<Container>
				<Logo />
			</Container>
			<Container>
				<Menu />
			</Container>
			<Container>
				<CountDown />
			</Container>
			<Container>
				<form className="form" action="">
					<div className="formRow">
						<Input
							label="Task"
							id="task"
							type="text"
							placeholder="Type anything"
						/>
					</div>
					<div className="formRow">
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
					<div className="formRow">
						<Cycles />
					</div>
					<div className="formRow">
						<button type="submit">Send</button>
					</div>
				</form>
			</Container>
		</>
	);
}
