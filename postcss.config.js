// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

module.exports = {
  plugins: {
    'tailwindcss/nesting': {}, // Добавьте эту строку
    tailwindcss: {},
    autoprefixer: {},
  },
}
