/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  'firebase': 'vendor/firebase/firebase.js',
  'angularfire2': 'vendor/angularfire2',
  'highlight': 'vendor/highlightjs'
};

/** User packages configuration. */
const packages: any = {
  highlight: {
    format: 'amd',
    main: 'highlight.pack.js'
  },
  angularfire2: {
    defaultExtension: 'js',
    main: 'angularfire2.js'
  }
};

const materialPackages: string[] = [
  'button',
  'card',
  'core',
  'icon',
  'input',
  'list',
  'sidenav',
  'toolbar'
];

materialPackages.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
});


////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/navigation',
  'app/+fbtest',
  'app/auth',
  'app/+home',
  'app/+admin',
  'app/+admin/language-admin',
  'app/+highlight-test',
  'app/+snippets',
  'app/+snippets/+list',
  'app/+snippets/+detail',
  'app/+snippets/+edit',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
