type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	id: string;
	label: string;
};

export function Input({ id, label, type }: InputProps) {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id} />
		</>
	);
}
