import { TaskModelProps } from '@/models/TaskModel';

export function getNextCycleType(currentCycle: number): TaskModelProps['type'] {
	if (currentCycle % 8 === 0) return 'longBreakTime';
	if (currentCycle % 2 === 0) return 'shortBreakTime';
	return 'workTime';
}
