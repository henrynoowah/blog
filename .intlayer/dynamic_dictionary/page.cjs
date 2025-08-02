const content = {
  'en': () => Promise.resolve(require('./page.en.json.cjs')),
  'ko': () => Promise.resolve(require('./page.ko.json.cjs'))
};
module.exports = content;
