module.exports = {
  // roots: ["<rootDir>/src", "<rootDir>/packages", "<rootDir>/test"],
  // verbose: true,
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$": "jest-transform-stub"
  },
    
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"],
  coverageReporters: ["html"],
};
