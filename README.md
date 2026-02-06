<h2 align="center">:earth_americas: Vite.js Template :earth_americas:</h2>

<p align="center">
  <a href="https://github.com/Aleydon/React-Vite/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT">
  </a>
  <img src="https://img.shields.io/badge/Status-Under%20Development-blue" alt="Build Status">
  <img src="https://img.shields.io/badge/Dependencies-Up%20to%20date-brightgreen" alt="Dependencies Status">
</p>

<p align="center">
  <br>
  <img width="900" src="./assets/React-Vite.png" alt="logo of React-Vite repository">
  <br>
  <br>
</p>

<p align="center">
  This repository provides a robust and opinionated React template powered by Vite.js, designed to kickstart your web development projects with a focus on modern tooling, testing, and code quality. It comes pre-configured with essential development tools to ensure a smooth and efficient workflow.
</p>

## :bookmark_tabs: Table of Contents

- [:pushpin: Requirements](#pushpin-requirements)
- [:arrow_forward: Get Started](#arrow_forward-get-started)
- [:gear: Features & Technologies](#gear-features--technologies)
- [:hammer_and_wrench: Development & Usage](#hammer_and_wrench-development--usage)
  - [Running Tests](#running-tests)
  - [Storybook Documentation](#storybook-documentation)
- [:handshake: Contributing](#handshake-contributing)
- [:page_facing_up: License](#page_facing_up-license)

---

## :pushpin: Requirements

To get started with this template, you need to have Node.js installed on your system.

- **Node.js**: [https://nodejs.org/en/](https://nodejs.org/en/)

---

## :arrow_forward: Get Started

Follow these steps to set up and run the project locally:

1.  **Clone this repository:**

    ```sh
    git clone https://github.com/Aleydon/React-Vite.git
    ```

2.  **Navigate into the project directory:**

    ```sh
    cd React-Vite
    ```

3.  **Install NPM packages:**

    ```sh
    npm install # or yarn install
    ```

4.  **Run the development server:**

    ```sh
    npm run dev # or yarn dev
    ```

    This will start the development server, and you can view the application in your browser, typically at `http://localhost:5173`.

---

## :gear: Features & Technologies

This template is configured with a comprehensive set of tools to enhance your development experience:

- **Jest + Testing Library**: For robust automated testing of your React components.
  - :link: [Jest](https://jestjs.io/)
  - :link: [Testing Library](https://testing-library.com/)
- **Storybook**: For isolated component development and documentation, making it easy to showcase and test UI components.
  - :link: [Storybook](https://storybook.js.org/)
- **ESLint + Prettier**: To maintain consistent code style and catch potential errors early.
  - :link: [ESLint](https://eslint.org/)
  - :link: [Prettier](https://prettier.io/)
- **TypeScript**: For static typing, improving code quality, readability, and maintainability.
  - :link: [TypeScript](https://www.typescriptlang.org/)
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
  - :link: [Tailwind CSS](https://tailwindcss.com/)
- **Husky**: For Git hooks, automating tasks like linting commit messages, formatting code, and running tests before commits or pushes.
  - :link: [Husky](https://typicode.github.io/husky/)

---

## :hammer_and_wrench: Development & Usage

### Running Tests

To execute the automated tests configured with Jest and Testing Library:

```sh
npm run test # or npm run test:watch
```

An example test file (`src/App.spec.tsx`) is included to demonstrate basic testing practices:

```ts
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App Component', () => {
	it('should get the text hello world', () => {
		render(<App />);
		const hello = screen.getByText('Hello World');
		expect(hello).toBeDefined();
	});

	it('should get the text hello world in the component s heading', () => {
		render(<App />);
		const heading = screen.getByRole('heading', {
			name: 'Hello World'
		});
		expect(heading).toBeInTheDocument();
	});

	it('must get the link from the App component', () => {
		render(<App />);
		const link = screen.getByRole('link', { name: 'github.com/Aleydon' });
		expect(link).toBeDefined();
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('aria-label', 'github.com/Aleydon');
	});
});
```

### Storybook Documentation

To run Storybook and explore the component documentation:

```sh
npm run storybook # or yarn storybook
```

<p align="center">
  <br>
  <img width="1100" src="./assets/storybok_screen_shot.png" alt="storybook running">
  <br>
  <br>
</p>

An example Storybook story (`src/components/Text/text.stories.tsx`) is provided to illustrate how to document your components:

```ts
import type { Meta, StoryObj } from '@storybook/react';

import Text, { type TextProps } from '.';

const text: Meta<typeof Text> = {
	component: Text,
	title: 'Components/Text'
};

export default text;

export const Small: StoryObj<TextProps> = {
	args: {
		size: 'small',
		children: 'Small Text'
	}
};

export const Medium: StoryObj<TextProps> = {
	args: {
		size: 'medium',
		children: 'Medium Text'
	}
};
export const Large: StoryObj<TextProps> = {
	args: {
		size: 'large',
		children: 'Large Text'
	}
};
```

---

## :handshake: Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please feel free to open an issue or submit a pull request.

---

## :page_facing_up: License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Aleydon/React-Vite/blob/main/LICENSE) file for details.
