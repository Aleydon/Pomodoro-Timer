import './styles/global.css';
import './styles/theme.css';

import { TaskContextProvider } from './contexts/TaskContext';
import { Home } from './pages/Home';

export function App() {
	return (
		<TaskContextProvider>
			<Home />;
		</TaskContextProvider>
	);
}
