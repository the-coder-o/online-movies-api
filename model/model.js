const { writeFileSync, readFileSync } = require("fs");
const { resolve } = require("path");
// read
function read(filename) {
  const data = readFileSync(resolve("database", filename + ".json"), "utf-8");
  return JSON.parse(data);
}
// write
function write(filename, data) {
  writeFileSync(resolve("database", filename + ".json"), JSON.stringify(data));
  return true;
}

module.exports = {
  read,
  write,
};
