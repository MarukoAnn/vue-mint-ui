module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [ 
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
    ["@babel/plugin-transform-modules-commonjs", { "strictMode": false }]
  ],
}