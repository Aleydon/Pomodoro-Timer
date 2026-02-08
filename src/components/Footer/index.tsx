import styles from './styles.module.css';

export function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<a href="/">How does the Pomodoro Technique work?</a>
				<a href="/">Pomodoro &copy; {new Date().getFullYear()}</a>
			</footer>
		</>
	);
}
