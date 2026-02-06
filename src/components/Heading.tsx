import styles from './Heading.module.css';

export function Heading(props: { children: React.ReactNode }) {
	return (
		<>
			<h1 className={styles.heading}>Heading {props.children}</h1>
		</>
	);
}
