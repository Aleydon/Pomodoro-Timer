import './styles/global.css';
import './styles/theme.css';

import { Container } from './components/Container';
import { Heading } from './components/Header';

export function App() {
	return (
		<>
			<Container>
				<Heading>Example</Heading>
				<section>Logo</section>
			</Container>
			<Container>
				<section>Menu</section>
			</Container>
			<Container>
				<section>Form</section>
			</Container>
			<Container>
				<section>Footer</section>
			</Container>
		</>
	);
}
