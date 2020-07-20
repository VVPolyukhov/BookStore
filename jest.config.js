module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.(ts|tsx|js)$": "ts-jest"
    },
    "setupFiles": [
        "<rootDir>/src/setupTests.ts"
    ],
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx|js)$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "moduleNameMapper": {
        "\\.(css|less|scss)$": "identity-obj-proxy"
    }
}