const fs = require("fs");

class readFile {
  constructor(name) {
    this.name = name;
  }

  read() {
    return fs.readFileSync(this.name, "utf8");
  }

  content() {
    return this.read();
  }
}

module.exports = readFile;