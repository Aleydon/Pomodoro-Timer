import {
	HistoryIcon,
	HouseIcon,
	MoonIcon,
	SettingsIcon,
	SunIcon
} from 'lucide-react';
import { useEffect, useState } from 'react';

import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
	const [theme, setTheme] = useState<AvailableThemes>(() => {
		const storedTheme = localStorage.getItem('theme') as AvailableThemes;
		return storedTheme || 'dark';
	});

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	function handleTheme(e: React.MouseEvent<HTMLAnchorElement>) {
		e.preventDefault();
		setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
	}

	const nextThemeIcon = {
		dark: <SunIcon />,
		light: <MoonIcon />
	};

	return (
		<nav className={styles.menu}>
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
				{nextThemeIcon[theme]}
			</a>
		</nav>
	);
}
