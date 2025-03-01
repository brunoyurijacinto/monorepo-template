module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx|js|jsx)$",
  transformIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  testPathIgnorePatterns: ["<rootDir>/dist/"], // Add this line
};
