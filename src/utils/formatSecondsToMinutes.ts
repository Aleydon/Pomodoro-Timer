export function formatSecondsToMinutes(seconds: number) {
	const minutes = Math.floor(seconds / 60);
	const secondsRemaining = seconds % 60;
	return `${String(minutes).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;
}
