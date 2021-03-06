module.exports = {
  shortcuts: [
    {
      name: 'pkg',
      expand (file, ...args) {
        return `../package.json|parse:${args.join()}`
      }
    }
  ],

  transforms: [
    {
      name: 'indent',
      transform (file, content, size = '2', indent = ' ') {
        const indentString = require('indent-string')
        return indentString(content, parseInt(size, 10), { indent: indent })
      }
    }
  ]
}
