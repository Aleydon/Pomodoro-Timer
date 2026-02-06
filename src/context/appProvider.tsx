import { createContext, useState } from 'react';

interface AppProviderProps {
	children: React.ReactNode;
}

interface PhraseProps {
	phrase: string;
	setPhrase?: (phrase: string) => void;
}

export const context = createContext<PhraseProps>({
	phrase: '',
	setPhrase: () => {}
});

export function AppProvider({ children }: AppProviderProps) {
	const [phrase, setPhrase] = useState<string>('My Github');

	return (
		<context.Provider value={{ phrase, setPhrase }}>
			{children}
		</context.Provider>
	);
}
