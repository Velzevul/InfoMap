angular.module('InfoMap')
  .factory('HostService', function() {
    'use strict';

    var mockTrain = [ 'youtube', 
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

    var colors = [
      'rgb(240,161,40)',
      'rgb(233,228,136)',
      'rgb(226,248,24)',
      'rgb(198,225,227)',
      'rgb(227,25,239)',
      'rgb(74,159,21)',
      'rgb(122,124,232)',
      'rgb(106,240,238)',
      'rgb(164,0,23)',
      'rgb(43,226,171)',
      'rgb(233,205,193)',
      'rgb(98,5,47)',
      'rgb(176,230,128)',
      'rgb(76,143,150)',
      'rgb(250,247,139)',
      'rgb(72,207,207)',
      'rgb(14,104,19)'
    ]; 


    return {
      getTrain: function() {
        var mock = {};

        mockTrain.forEach(function(host, i) {
          mock[host] = {
            color: colors[i]
          }
        });
        
        return mock;
      }
    }
  });