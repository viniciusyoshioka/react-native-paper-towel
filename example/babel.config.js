const path = require("path")
const pak = require("../package.json")


module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    ["module-resolver", {
      alias: {
        [pak.name]: path.join(__dirname, "..", pak.source),
      },
    }],
    "react-native-reanimated/plugin",
  ],
  env: {
    production: {
      plugins: ["react-native-paper/babel"],
    },
  },
}
