'use strict';

module.exports = {  
  exit: true,
  require:['chai', '@babel/register'],
  reporter: 'spec',
  package: './package.json',
  recursive: true,
  'watch-files': ['./tests/*.js', './tests/**/*.js'],
}
