module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-flow', {allowDeclareFields: true}],
  ],
  plugins: ['react-native-reanimated/plugin'],
};
