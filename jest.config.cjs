// jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	roots: ['<rootDir>/src'],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
	moduleNameMapper: {
		'^@/src/(.*)$': '<rootDir>/$1'
	}
};
