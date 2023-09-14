module.exports = {
    // A list of paths to directories that Jest should use to search for files in.
    roots: ['<rootDir>/src', '<rootDir>/tests'],

    // The tests environment that will be used for testing (e.g., 'jsdom' for browser-like environment).
    testEnvironment: 'node',

    // A list of file extensions your modules use.
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],

    // A map from regular expressions to module names that allow to stub out resources with a single module.
    moduleNameMapper: {
        // You can define aliases for imports, useful for mocking or resolving module paths.
        '^@/(.*)$': '<rootDir>/src/$1',
    },

    // The tests match pattern tells Jest to look for tests files in specific directories.
    // You can adjust this pattern to match your naming conventions.
    testMatch: ['**/tests/**/*.js', '**/?(*.)+(spec|tests).js'],

    // Transform files with the specified extensions using a preprocessor.
    transform: {
        '^.+\\.js$': 'babel-jest', // Use Babel to transform JavaScript files.
    },

    // An array of directory names to be searched recursively up from the requiring module's location.
    moduleDirectories: ['node_modules', 'src'],

    // An array of file names that will be transformed by this Jest config.
    transformIgnorePatterns: ['<rootDir>/node_modules/'],

    // Add the setup.js file to the testPathIgnorePatterns array
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/build/',
        '<rootDir>/dist/',
        '<rootDir>/tests/unit-tests/setup.js', // Add the path to your setup.js file
    ],

    // Collect coverage information from specified files.
    collectCoverageFrom: ['src/**/*.js'],

    // A list of reporters to use.
    reporters: ['default'],

    // Additional options for Jest.
    // For example, you can set a timeout for each tests.
    // testTimeout: 10000, // 10 seconds

    // Setup files before running the tests.
    setupFiles: ['<rootDir>/tests/unit-tests/setup.js'],

    // Ignore specific paths or files during testing.
    // testPathIgnorePatterns: ['<rootDir>/ignoreDir/'],

    // ...other Jest configuration options...
};