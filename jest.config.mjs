// jest.config.mjs
export default {
    verbose: true, 
    setupFilesAfterEnv: ['@testing-library/jest-dom'], 
    testEnvironment: 'jsdom', 
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/styleMock.js',
      '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/fileMock.js',
    },
  };