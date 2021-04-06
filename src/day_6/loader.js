const fs = require('fs')

class Loader {
  constructor() {
  }

  load(path) {
    try {
      return fs.readFileSync(path).toString('utf-8').split("\n\n").map(item => item.replace(/(\r\n|\n|\r)/gm, " "))
    } catch (error) {
      console.error(error.message || error)
    }
  }
}

module.exports = Loader