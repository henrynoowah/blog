const content = {
  'en': () => Promise.resolve(require('./nagivation.en.json.cjs')),
  'ko': () => Promise.resolve(require('./nagivation.ko.json.cjs'))
};
module.exports = content;
