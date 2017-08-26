#! /usr/bin/env node

const fs = require('fs');
const readline = require('readline');
const fileNames = [
  './package.json',
  './src/environments/environment.ts',
  './src/environments/environment.prod.ts'
];
const package = require('./package.json');

const BumpType = {
  MAJOR: 1,
  MINOR: 2,
  PATCH: 3,
  VERSION: 4
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

require('yargs')
  .usage('$0 <cmd>')
  .command('major', 'bump major, reset minor and patch', {}, () => {
    bump(BumpType.MAJOR);
  })
  .command('minor', 'bump minor rest patch', {}, () => {
    bump(BumpType.MINOR);
  })
  .command('patch', 'bump patch', {}, () => {
    bump(BumpType.PATCH);
  })
  .help()
  .argv;


function bump(type, argv = 0) {
  const parts = package.version.split('.').map((i) => {
    return +i;
  });

  switch (type) {
    case BumpType.MAJOR:
      parts[0] += 1;
      parts[1] = 0;
      parts[2] = 0;
      break;
    case BumpType.MINOR:
      parts[1] += 1;
      parts[2] = 0;
      break;
    case BumpType.PATCH:
      parts[2] += 1;
      break;
  }

  const newVer = parts.join('.');
  rl.question(`${package.version} -> ${newVer} is this ok? (Y/n) `, (answer) => {
    if (answer.toLocaleLowerCase() === 'y') {

      fileNames.forEach((fileName) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
          if (err) {
            return console.log(err);
          }

          let result = data.replace(`"version": "${package.version}"`, `"version": "${newVer}"`);
          result = result.replace(`version: '${package.version}`, `version: '${newVer}`);
          fs.writeFile(fileName, result, 'utf8', (err) => {
            if (err) {
              return console.log(err);
            }
          });
        });
      });
    }

    rl.close();
  });
}
/*


console.log(`Version change is ${package.version}`);

*/
