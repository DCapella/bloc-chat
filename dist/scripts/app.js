/*(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    
    $stateProvider
      .state('landing', {
      url: '/',
      controller: 'LandingCtrl as landing',
      templateUrl: '/templates/landing.html'
    });
    
  }
  
  angular
    .module('blocJams', ['ui.route', 'firebase'])
    .config(config);
})();*/

(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    
    $stateProvider
      .state('landing', {
      url: '/',
      controller: 'LandingCtrl as landing',
      templateUrl: '/templates/landing.html'
    })
    .state('album', {
      url: '/album',
      controller: 'AlbumCtrl as album',
      templateUrl: '/templates/album.html'
    })
    .state('collection', {
      url: '/collection',
      controller: 'CollectionCtrl as collection',
      templateUrl: '/templates/collection.html'
    });
    //edit
    

/*
    .state('player_bar', {
      url: '/player_bar',
      controller: 'PlayerBarCtrl as player_bar',
      templateUrl: '/templates/player_bar.html'
    });
*/

    
    //end of edit
  }
  
  angular
    .module('blocJams', ['ui.router'])
    .config(config);
})();

/*(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    
    $stateProvider
      .state('landing', {
      url: '/',
      controller: 'LandingCtrl as landing',
      templateUrl: '/templates/landing.html'
    })
    .state('album', {
      url: '/album',
      controller: 'AlbumCtrl as album',
      templateUrl: '/templates/album.html'
    })
    .state('collection', {
      url: '/collection',
      controller: 'CollectionCtrl as collection',
      templateUrl: '/templates/collection.html'
    });
    //edit
    

/*
    .state('player_bar', {
      url: '/player_bar',
      controller: 'PlayerBarCtrl as player_bar',
      templateUrl: '/templates/player_bar.html'
    });
*/

    
    //end of edit
  /*}
  
  angular
    .module('blocJams', ['ui.router'])
    .config(config);
})();*/