const path = require("path")

const demo01 = {
  entry: `./demo01/main.js`,
  output: {
    path: path.resolve(__dirname, "demo01"),
    filename: "bundle.js",
  },
}

module.exports = [demo01]
