angular.module('InfoMap')
  .factory('HostService', function() {
    'use strict';

    var hosts = [ 'youtube', 
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
                  'cgterminal' ];

    var colors = randomColor({count: 30, luminosity: 'light', format: 'rgb'}); 

    var mock = {};

    hosts.forEach(function(host, i) {
      mock[host] = {
        color: colors[i]
      }
    });

    return {
      get: function() {
        return mock;
      }
    }
  });