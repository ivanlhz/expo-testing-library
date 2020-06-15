module.exports = {
  preset: 'react-native',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation|expo-font|@unimodules|@expo/vector-icons|expo-asset|expo-constants|expo-file-system)',
  ],
};