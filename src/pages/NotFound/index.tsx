import { Container } from '@/components/Container';
import { GenericHtml } from '@/components/GenericHtml';
import { Heading } from '@/components/Header';
import { MainTemplate } from '@/templates/MainTemplate';

export function NotFound() {
	return (
		<MainTemplate>
			<Container>
				<GenericHtml>
					<Heading>404 - Page not found 🚀</Heading>
					<p>
						Oops! It looks like the page you&apos;re trying to access
						doesn&apos;t exist. Maybe it&apos;s on vacation, decided to explore
						the universe, or got lost somewhere between two black holes.🌌
					</p>
					<p>
						But don&apos;t worry, you&apos;re not lost in space (yet). You can
						safely return to the <a href="/">Home page</a> or{' '}
						<a href="/history">go to the History</a> — Or you can stay here and
						pretend you found a secret page that only the coolest explorers can
						access. 🧭✨
					</p>
					<p>
						If you think this page should exist (or if you want to chat about
						time travel and wormholes), just get in touch. Otherwise, use the
						menu to return to the real world.
					</p>
					<p>
						Meanwhile, here&apos;s something to think about: &quot;If a page
						doesn&apos;t exist on the internet, did it ever really exist?&quot;
						🤔💭
					</p>
				</GenericHtml>
			</Container>
		</MainTemplate>
	);
}
