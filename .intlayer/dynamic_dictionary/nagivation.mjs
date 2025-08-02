const content = {
  'en': () => import('./nagivation.en.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'ko': () => import('./nagivation.ko.json', { assert: { type: 'json' }}).then(mod => mod.default)
};
export default content;
