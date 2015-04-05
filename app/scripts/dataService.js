angular.module('InfoMap')
  .factory('DataService', function() {
    'use strict';

    var mockTrain = [
      {
        id: 1,
        title: "ZBrush Sculpting Tutorial for Beginners: Organic & Hard Surface T-Rex",
        thumb: "http://i.ytimg.com/vi/8Ididulfg9w/maxresdefault.jpg",
        totalShares: 7,
        posts: [
          {
            host: "youtube",
            url: "http://youtube.com",
            users: [
              { name: "raulpercy" },
              { name: "MikeGibbowr" }
            ]
          },
          {
            host: "youtube",
            url: "http://youtube.com",
            users: [
              { name: "PESERT" },
              { name: "YutaruHD" },
              { name: "santosh_n_naik" },
              { name: "probio_US" }
            ]
          },
          {
            host: "visualfxhub",
            url: "http://visualfxhub.com",
            users: [
              { name: "visualfxhub" }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Posterize Tutorial ZBrush4R5",
        totalShares: 1,
        thumb: "https://i.vimeocdn.com/video/389653048_640.jpg",
        posts: [
          {
            host: "vimeo",
            url: "http://vimeo.com",
            users: [
              { name: "warrenally" }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "How to sculpt detailed muscles in Zbrush",
        totalShares: 7,
        thumb: "http://i.ytimg.com/vi/DyoMb83kI2Y/maxresdefault.jpg",
        posts: [
          {
            host: "avcgi360",
            url: "http://avcgi360.com",
            users: [
              { name: "ActKamal" }
            ]
          },
          {
            host: "scoop",
            url: "http://scoop.it",
            users: [
              { name: "ActKamal" }
            ]
          },
          {
            host: "quora",
            url: "http://quora.com",
            users: [
              { name: "ActKamal" }
            ]
          },
          {
            host: "blogspot",
            url: "http://blogspot.com",
            users: [
              { name: "ActKamal" }
            ]
          },
          {
            host: "wordpress",
            url: "http://wordpress.com",
            users: [
              { name: "ActKamal" }
            ]
          },
          {
            host: "pandawhale",
            url: "http://pandawhale.com",
            users: [
              { name: "ActKamal" }
            ]
          },
          {
            host: "pinterest",
            url: "http://pinterest.com",
            users: [
              { name: "ActKamal" }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "How to Sculpt Hair in ZBrush Tutorial HD",
        totalShares: 1,
        thumb: "http://i.ytimg.com/vi/RTvbOzIE_dI/maxresdefault.jpg",
        posts: [
          {
            host: "cgvilla",
            url: "http://cgvilla.com",
            users: [
              { name: "bhupifxartist" }
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Create Edge Maps in ZBrush",
        totalShares: 5,
        thumb: "http://www.itsartmag.com/features/itsart/wp-content/uploads/2014/11/Create-Edge-Maps-in-ZBrush-23.jpg",
        posts: [
          {
            host: "avcgi360",
            url: "http://avcgi360.com",
            users: [
              { name: "ActKamal" }
            ]
          },
          {
            host: "cgmeetup",
            url: "http://cgmeetup.com",
            users: [
              { name: "AiEnRobOtt" },
              { name: "ZodiakMotion" }
            ]
          },
          {
            host: "youtube",
            url: "http://youtube.com",
            users: [
              { name: "kizakiaoi" },
              { name: "KipMcSkipster" }
            ]
          }
        ]
      },
      {
        id: 6,
        title: "Zbrush Tutorial: How To Model And Texture Realistic Skin",
        totalShares: 1,
        thumb: "http://www.avcgi360.com/wp-content/uploads/2014/09/Girlmain-670x400.jpg",
        posts: [
          {
            host: "avcgi360",
            url: "http://avcgi360.com",
            users: [
              { name: "ActKamal" }
            ]
          }
        ]
      },
      {
        id: 7,
        title: "ZBrush Tutorial: Tips to present your characters",
        totalShares: 3,
        thumb: "http://www.avcgi360.com/wp-content/uploads/2014/09/Zbrush11-669x400.jpg",
        posts: [
          {
            host: "avcgi360",
            url: "http://avcgi360.com",
            users: [
              { name: "ActKamal" }
            ]
          },
          {
            host: "blogspot",
            url: "http://blogspot.com",
            users: [
              { name: "ActKamal" }
            ]
          },
          {
            host: "quora",
            url: "http://quora.com",
            users: [
              { name: "ActKamal" }
            ]
          }
        ]
      },
      {
        id: 8,
        title: "ZBrush 4R6 FAQs and Tips and Tricks",
        thumb: "http://i.ytimg.com/vi/ffsYyL17Rgg/maxresdefault.jpg",
        totalShares: 1,
        posts: [
          {
            host: "youtube",
            url: "http://youtube.com",
            users: [
              { name: "Nick_OHLAS" }
            ]
          }
        ]
      },
      {
        id: 9,
        title: "3D Printing Tutorial in ZBrush and 3ds Max: Making of The Catrina",
        totalShares: 2,
        thumb: "http://img-new.cgtrader.com/uploads/blog/posts/235/head_f74b555f-c4f4-429d-a0f5-d0fcfcd18043.jpg",
        posts: [
          {
            host: "cgtrader",
            url: "http://cgtrader.com",
            users: [
              { name: "CG_trader" },
              { name: "vilius_I" }
            ]
          }
        ]
      },
      {
        id: 10,
        title: "ZBrush Tutorial: Process to Create a Demon",
        totalShares: 3,
        thumb: "http://i1.wp.com/www.cgmeetup.net/home/wp-content/uploads/2014/03/Demon-Creation-Process-Zbrush-Tutorial-2.jpg?resize=960%2C599",
        posts: [
          {
            host: "avcgi360",
            url: "http://avcgi360.com",
            users: [
              { name: "ActKamal" }
            ]
          },
          {
            host: "pinterest",
            url: "http://pinterest.com",
            users: [
              { name: "ActKamal" }
            ]
          },
          {
            host: "quora",
            url: "http://quora.com",
            users: [
              { name: "ActKamal" }
            ]
          }
        ]
      },
      {
        id: 11,
        title: "ZSphere Build Up",
        totalShares: 1,
        thumb: "http://fc01.deviantart.net/fs71/f/2014/293/3/b/buildup_by_mattthorup-d83jpdk.jpg",
        posts: [
          {
            host: "devianart",
            url: "http://devianart.com",
            users: [
              { name: "Linko_3D" }
            ]
          }
        ]
      },
      {
        id: 12,
        title: "ZBrush tutorial: Panel Loops features complete explanation",
        totalShares: 1,
        thumb: "http://i.ytimg.com/vi/aCNFO5pQ9XA/hqdefault.jpg",
        posts: [
          {
            host: "youtube",
            url: "http://youtube.com",
            users: [
              { name: "Glary888" }
            ]
          }
        ]
      },
      {
        id: 13,
        title: "Sculpting a Closed Hand in ZBrush",
        totalShares: 13,
        thumb: "http://i2.wp.com/www.cgmeetup.net/home/wp-content/uploads/2014/11/Sculpting-A-Fist-in-Zbrush-2.jpg?resize=960%2C523",
        posts: [
          {
            host: "lesterbanks",
            url: "http://lesterbanks.com",
            users: [
              { name: "lesterbanks" },
              { name: "3Dsurvival" },
              { name: "dafideff" }
            ]
          },
          {
            host: "blogspot",
            url: "http://blogspot.com",
            users: [
              { name: "ActKamal" }
            ]
          },
          {
            host: "pandawhale",
            url: "http://pandawhale.com",
            users: [
              { name: "ActKamal" }
            ]
          },
          {
            host: "itsart",
            url: "http://itsart.com",
            users: [
              { name: "itsartmag" },
              { name: "NailTG" }
            ]
          },
          {
            host: "avcgi360",
            url: "http://avcgi360.com",
            users: [
              { name: "ActKamal" }
            ]
          },
          {
            host: "pinterest",
            url: "http://pinterest.com",
            users: [
              { name: "ActKamal" }
            ]
          },
          {
            host: "wordpress",
            url: "http://wordpress.com",
            users: [
              { name: "ActKamal" }
            ]
          },
          {
            host: "cgterminal",
            url: "http://cgterminal.com",
            users: [
              { name: "710Films" }
            ]
          },
          {
            host: "vimeo",
            url: "http://vimeo.com",
            users: [
              { name: "JoeCyriac" },
              { name: "jisphording" }
            ]
          }
        ]
      }
    ];

    return {
      getGraphicalTrain: function() {
        var data = {
          children: []
        };

        mockTrain.forEach(function(item) {
          var dataItem = {
            id: item.id,
            title: item.title,
            thumb: item.thumb
          };

          var hostUsers = [];

          item.posts.forEach(function(post) {
            post.users.forEach(function(user) {
              hostUsers.push({
                host: post.host,
                user: user.name
              });
            });
          });

          var nest = d3.nest()
            .key(function(d) { return d.host; })
            .entries(hostUsers);

          dataItem.children = nest;

          data.children.push(dataItem);
        });

        return data;
      },
      getListTrain: function() {
        var data = [];

        mockTrain.forEach(function(item) {
          item.posts.forEach(function(post) {
            post.users.forEach(function(user) {
              var dataItem = {
                title: item.title,
                thumb: item.thumb,
                user: user.name,
                host: post.host,
                search: [item.title, user.name, post.host].join(' ')
              };

              data.push(dataItem);
            });
          });
        });

        return data;
      }
    };
  });
