import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import App from './App';
import { NotFound } from './components/NotFound';
import { AppProvider } from './context/appProvider';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '*',
		element: <NotFound />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppProvider>
			<RouterProvider router={router} />
		</AppProvider>
	</React.StrictMode>
);
