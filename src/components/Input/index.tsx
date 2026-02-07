import styles from './styles.module.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	id: string;
	label: string;
};

export function Input({ id, label, type, ...props }: InputProps) {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input className={styles.input} {...props} type={type} id={id} />
		</>
	);
}
