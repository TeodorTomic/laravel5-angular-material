angular.module('app', [
    'app.run',
	'app.filters',
	'app.services',
	'app.components',
	'app.routes',
	'app.config',
	'partialsModule'
]);

angular.module('app.run', []);
angular.module('app.routes', []);
angular.module('app.filters', []);
angular.module('app.services', []);
angular.module('app.config', []);
angular.module('app.components', [
	'ui.router', 'ngMaterial', 'angular-loading-bar',
	'restangular', 'ngStorage', 'satellizer'
]);

