'use strict';

module.exports = {  
  exit: true,
  require: '@babel/register',
  reporter: 'spec',
  package: './package.json',
  recursive: true,
  'watch-files': ['./tests/*.js', './tests/**/*.js']
}
