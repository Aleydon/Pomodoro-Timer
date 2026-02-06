import { render, screen } from '@testing-library/react';

import App from './App';
import { AppProvider } from './context/appProvider';

describe('App Component', () => {
	it('should get the text hello world', () => {
		render(<App />);
		const hello = screen.getByText('Hello World');
		expect(hello).toBeDefined();
	});

	it('should get the text hello world in the component s heading', () => {
		render(<App />);
		const heading = screen.getByRole('heading', {
			name: 'Hello World'
		});
		expect(heading).toBeInTheDocument();
	});

	it('must get the link from the App component', () => {
		render(<App />);
		const link = screen.getByRole('link', { name: 'github.com/Aleydon' });
		expect(link).toBeDefined();
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('aria-label', 'github.com/Aleydon');
	});

	it('Should get Github Template text from context', () => {
		render(
			<AppProvider>
				<App />
			</AppProvider>
		);
		const phrase = screen.getByText('My Github');
		expect(phrase).toBeDefined();
	});
});
