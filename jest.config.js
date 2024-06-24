module.exports = {
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    collectCoverage: true,
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
    testPathIgnorePatterns: ['/node_modules/'],
};
