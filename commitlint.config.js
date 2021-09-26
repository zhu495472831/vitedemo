module.exports = {
  extends: ['@commitlint/config-conventional'],
  'subject-empty': [2, 'never'],
  'type-empty': [2, 'never'],
  'type-enum': [
    2,
    'always',
    ['feat', 'fix', 'perf', 'style', 'docs', 'test', 'refactor', 'build', 'revert'],
  ],
}
