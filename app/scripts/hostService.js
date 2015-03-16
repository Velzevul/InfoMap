angular.module('InfoMap')
  .factory('HostService', function() {
    'use strict';

    var mock = ['youtube', 
                 'visualfxhub', 
                 'vimeo', 
                 'avcgi360', 
                 'scoop', 
                 'quora', 
                 'blogspot', 
                 'wordpress', 
                 'pandawhale', 
                 'pinterest', 
                 'cgvilla', 
                 'cgmeetup', 
                 'cgtrader', 
                 'devianart',
                 'lesterbanks',
                 'itsart',
                 'cgterminal'
                 ];

    return {
      get: function() {
        var colors = randomColor({count: mock.length});

        return {
          hosts: mock,
          colors: colors
        };
      }
    }
  });