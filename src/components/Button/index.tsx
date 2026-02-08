import styles from './styles.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	icon: React.ReactNode;
	color?: 'green' | 'red';
};

export function Button({ icon, color = 'green', ...props }: ButtonProps) {
	return (
		<>
			<button
				className={`${styles.button} ${styles[color]}`}
				{...props}
				color={color}
			>
				{icon}
			</button>
		</>
	);
}
