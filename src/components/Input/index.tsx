import styles from './styles.module.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	id: string;
	label: string;
	ref?: React.Ref<HTMLInputElement>;
};

export function Input({ id, label, ref, ...props }: InputProps) {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input className={styles.input} id={id} ref={ref} {...props} />
		</>
	);
}
