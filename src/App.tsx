import './styles/global.css';
import './styles/theme.css';

import { Timer } from 'lucide-react';

import { Heading } from './components/Heading';

export function App() {
	return (
		<>
			<Heading>
				React{' '}
				<button>
					<Timer />
				</button>
			</Heading>
		</>
	);
}
