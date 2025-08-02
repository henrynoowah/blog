const content = {
  'en': () => import('./page.en.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'ko': () => import('./page.ko.json', { assert: { type: 'json' }}).then(mod => mod.default)
};
export default content;
