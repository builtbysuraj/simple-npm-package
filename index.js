function greeting(s) {
  let regex = /[a-zA-Z0-9]/g;
  return `Hi! ${s}, You Entered ${s.match(regex).length} length string.`
}

module.exports = greeting