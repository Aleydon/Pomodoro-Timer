import { Container } from '@/components/Container';
import { CountDown } from '@/components/CountDown';
import { Form } from '@/components/Form';
import { TaskStateProps } from '@/models/TaskStateModel';
import { MainTemplate } from '@/templates/MainTemplate';

export type HomeProps = {
	state: TaskStateProps;
	setState: React.Dispatch<React.SetStateAction<TaskStateProps>>;
};

export function Home(props: HomeProps) {
	return (
		<MainTemplate>
			<Container>
				<CountDown />
			</Container>
			<Container>
				<Form {...props} />
			</Container>
		</MainTemplate>
	);
}
