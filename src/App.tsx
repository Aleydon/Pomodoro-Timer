import { useContext } from 'react';

import { Text } from './components/Text';
import { context } from './context/appProvider';

export default function App() {
	const { phrase } = useContext(context);

	return (
		<div className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-300">
			<h1 className="text-bold text-4xl">Hello World</h1>

			<Text>&darr;</Text>

			<a
				className="cursor-pointer underline"
				href="https://github.com/Aleydon"
				target="_blank"
				aria-label="github.com/Aleydon"
				rel="noreferrer"
			>
				{phrase}
			</a>
		</div>
	);
}
