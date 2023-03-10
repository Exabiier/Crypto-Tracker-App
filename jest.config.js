module.exports = {
  preset: 'jest-expo',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '\\.ts$': 'ts-jest',
    '\\.tsx$': 'ts-jest',
  },
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};
  