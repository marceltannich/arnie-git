/*
 |--------------------------------------------------------------------------
 | Command Definitions with Arnold's Iconic One-Liners
 |--------------------------------------------------------------------------
 */

const commando = {
  add: ['no-problemo'],
  blame: ['you-did-not-make-it-did-you'],
  branch: ['you-son-of-a-'],
  checkout: ['get-your-ass-to-mars'],
  clone: ['get-to-the-chopper'],
  commit: ['ill-be-back'],
  diff: ['whats-the-matter-changed-your-mind'],
  fetch: ['come-on-do-it-do-it-now'],
  help: ['commando'],
  init: ['who-is-your-daddy-and-what-does-he-do'],
  log: ['youre-funny-ill-kill-you-last'],
  merge: ['crush-your-enemies'],
  pull: ['come-with-me-if-you-want-to-live'],
  push: ['hasta-la-vista-baby'],
  status: ['its-not-a-tumor'],
  rebase: ['get-ready-for-a-surprise'],
  restore: ['im-back'],
  reset: ['youve-been-erased'],
  revert: ['erase-the-mistake'],
  stash: ['ill-keep-it-safe'],
  tag: ['youre-mine-now'],
  bisect: ['im-looking-for-sarah-connor'],
};

const aliases = {
  'branch -D': ['consider-that-a-divorce'],
  'push --force': ['trust-me']
}

export default Object.assign(commando, aliases);
