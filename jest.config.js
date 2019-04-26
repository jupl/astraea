module.exports = { // tslint:disable-line:no-object-mutation
  preset: '@jupl/ts',
  setupTestFrameworkScriptFile: '<rootDir>/jest/setup.ts',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
}
