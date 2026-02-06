import './styles/global.css';
import './styles/theme.css';

import { Container } from './components/Container';
import { Heading } from './components/Header';
import { Logo } from './components/Logo';

export function App() {
	return (
		<>
			<Container>
				<Logo />
			</Container>
			<Container>
				<Heading>Menu</Heading>
			</Container>
		</>
	);
}
