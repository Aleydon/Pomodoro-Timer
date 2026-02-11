import { Heading } from '@/components/Header';

import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { MainTemplate } from '../../templates/MainTemplate';

export function AboutPomodoro() {
	return (
		<MainTemplate>
			<Container>
				<GenericHtml>
					<Heading>The Pomodoro Technique 🍅</Heading>

					<p>
						The Pomodoro Technique is a productivity methodology created by{' '}
						<strong>Francesco Cirillo</strong>, which consists of dividing work
						into time blocks (the famous &quot;Pomodoros&quot;) interspersed
						with breaks. The goal is to maintain total focus for a short period
						and ensure rest to avoid mental fatigue.
					</p>

					<img src="https://placehold.co/1920x1080" alt="" />

					<h2>How does the traditional Pomodoro work?</h2>
					<ul>
						<li>
							<strong>1. Define a task</strong> that you want to accomplish.
						</li>
						<li>
							<strong>2. Work on it for 25 minutes</strong> without
							interruptions.
						</li>
						<li>
							<strong>3. Take a short 5-minute break</strong>.
						</li>
						<li>
							<strong>4. Every 4 cycles, take a long break</strong> (usually 15
							to 30 minutes).
						</li>
					</ul>

					<h2>
						But <strong>Chronos Pomodoro</strong> has a difference 🚀
					</h2>

					<p>
						Our app follows the original concept, but with some improvements and
						customizations to make the process even more efficient:
					</p>

					<h3>⚙️ Time Customization</h3>
					<p>
						You can set the focus time, short break, and long break however you
						want! Just visit the <a href="/settings">settings page</a> and
						adjust the minutes as you prefer.
					</p>

					<h3>🔁 Cycles Organized in Sequence</h3>
					<p>
						Each time a cycle is completed, a new task is automatically added to
						your history, and the app already suggests the next cycle (focus or
						break).
					</p>
					<p>
						<strong>Our standard:</strong>
					</p>
					<ul>
						<li>
							<strong>Odd</strong> cycles: Work (focus).
						</li>
						<li>
							<strong>Even</strong> cycles: Short break.
						</li>
						<li>
							Cycle <strong>8</strong>: Special long break to reset the complete
							cycle.
						</li>
					</ul>

					<h3>🍅 Cycle Visualization</h3>
					<p>
						Right below the timer, you&apos;ll see colored dots representing the
						cycles:
					</p>
					<ul>
						<li>🟡 Yellow: Work cycle (focus).</li>
						<li>🟢 Green: Short break.</li>
						<li>🔵 Blue: Long break (appears every 8 cycles).</li>
					</ul>

					<p>
						This way, you always know which part of the process you&apos;re in
						and what comes next. No need to write it down on paper or calculate
						in your head!
					</p>

					<h3>📊 Automatic History</h3>
					<p>
						All your completed tasks and cycles are saved in the{' '}
						<a href="/history">history</a>, with a status of completed or
						interrupted. This way, you can track your progress over time.
					</p>

					<h2>Why use Chronos Pomodoro?</h2>
					<ul>
						<li>✅ Organize your focus with clarity.</li>
						<li>✅ Work and rest in the right measure.</li>
						<li>✅ Customize your own cycles and times.</li>
						<li>✅ Track your history automatically.</li>
					</ul>

					<p>
						<strong>Ready to focus?</strong> Let&apos;s{' '}
						<a href="/">go back to the home page</a> and start your Pomodoros!
						🍅🚀
					</p>

					<p>
						<em>&quot;Total focus, no rush, no breaks, just go!&quot;</em> 💪🧘‍♂️
					</p>
				</GenericHtml>
			</Container>
		</MainTemplate>
	);
}
