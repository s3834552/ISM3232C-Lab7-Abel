module.exports = { 
    roots: [ 
        "<rootDir>/src" 
    ], 

    preset: 'ts-jest', 
    testEnvironment: 'node', 
    moduleNameMapper: {
        "^services/(.*)$": "<rootDir>/src/services/$1"
    },
    verbose: false, 
    collectCoverage: false, 
    globals: { 
        'ts-jest': { 
            // reference: https://kulshekhar.github.io/ts-jest/user/config
        } 
    } 
}; 