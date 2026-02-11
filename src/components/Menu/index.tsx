import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { useState } from 'react';

import styles from './styles.module.css';

type AvailableThemes = 'light' | 'dark';

export function Menu() {
	const [theme, setTheme] = useState<AvailableThemes>('dark');

	function handleTheme(e: React.MouseEvent<HTMLAnchorElement>) {
		e.preventDefault();
		setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
	}

	return (
		<nav className={styles.menu}>
			{theme}
			<a
				className={styles.menuLink}
				href="/"
				title="Go to Home"
				aria-label="Go to Home"
			>
				<HouseIcon size={24} />
			</a>
			<a
				className={styles.menuLink}
				href="/"
				title="History"
				aria-label="History"
			>
				<HistoryIcon size={24} />
			</a>
			<a
				className={styles.menuLink}
				href="/"
				title="Settings"
				aria-label="Settings"
			>
				<SettingsIcon size={24} />
			</a>
			<a
				className={styles.menuLink}
				href="/"
				title="Change Theme"
				aria-label="Change Theme"
				onClick={handleTheme}
			>
				<SunIcon size={24} />
			</a>
		</nav>
	);
}
