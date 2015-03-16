angular.module('InfoMap')
  .factory('DataService', function() {
    'use strict';

    // key   - weekId
    // value - array of bits
    var mock = [
          {
            "id": 1,
            "title": "ZBrush Sculpting Tutorial for Beginners: Organic & Hard Surface T-Rex",
            "thumbs": [
              "http://i.ytimg.com/vi/8Ididulfg9w/maxresdefault.jpg",
              "http://tutorialspy.com/wp-content/uploads/2015/02/Zbrush-Sculpting-Tutorial-for-Beginners-Series-%E2%80%93-Organic-Hard-Surface-T-Rex.jpg"
            ],
            "totalShares": 7,
            "posts": [
              {
                "host": "youtube",
                "url": "http://youtube.com",
                "users": [
                  "raulpercy",
                  "MikeGibbowr"
                ]
              },
              {
                "host": "youtube",
                "url": "http://youtube.com",
                "users": [
                  "PESERT",
                  "YutaruHD",
                  "santosh_n_naik",
                  "probio_US"
                ]            
              },
              {
                "host": "visualfxhub",
                "url": "http://visualfxhub.com",
                "users": [
                  "visualfxhub"
                ]
              }                                                                             
            ]
          },
          {
            "id": 2,
            "title": "Posterize Tutorial ZBrush4R5",
            "totalShares": 1,
            "thumbs": [
              "https://i.vimeocdn.com/video/389653048_640.jpg"
            ],
            "posts": [
              {
                "host": "vimeo",
                "url": "http://vimeo.com",
                "users": [
                  "warrenally"
                ]
              }
            ]
          },
          {
            "id": 3,
            "title": "How to sculpt detailed muscles in Zbrush",
            "totalShares": 7,
            "thumbs": [
              "http://i.ytimg.com/vi/DyoMb83kI2Y/maxresdefault.jpg",
              "http://www.avcgi360.com/wp-content/uploads/2014/11/Muscles-750x400.jpg"
            ],
            "posts": [
              {
                "host": "avcgi360",
                "url": "http://avcgi360.com",
                "users": [
                  "ActKamal"
                ]
              },
              {
                "host": "scoop",
                "url": "http://scoop.it",
                "users": [
                  "ActKamal"                   
                ]
              },
              {
                "host": "quora",
                "url": "http://quora.com",
                "users": [
                  "ActKamal"
                ]
              },
              {
                "host": "blogspot",
                "url": "http://blogspot.com",
                "users": [
                  "ActKamal"
                ]
              },
              {
                "host": "wordpress",
                "url": "http://wordpress.com",
                "users": [
                  "ActKamal"
                ]
              },
              {
                "host": "pandawhale",
                "url": "http://pandawhale.com",
                "users": [
                  "ActKamal"
                ]
              },
              {
                "host": "pinterest",
                "url": "http://pinterest.com",
                "users": [
                  "ActKamal"
                ]
              }
            ]
          },
          {
            "id": 4,
            "title": "How to Sculpt Hair in ZBrush Tutorial HD",
            "totalShares": 1,
            "thumbs": [
              "http://i.ytimg.com/vi/RTvbOzIE_dI/maxresdefault.jpg"
            ],
            "posts": [
              {
                "host": "cgvilla",
                "url": "http://cgvilla.com",
                "users": [
                  "bhupifxartist"
                ]
              }
            ]
          },
          {
            "id": 5,
            "title": "Create Edge Maps in ZBrush",
            "totalShares": 5,
            "thumbs": [
              "http://i.ytimg.com/vi/YGeAixOAsIY/maxresdefault.jpg",
              "http://www.itsartmag.com/features/itsart/wp-content/uploads/2014/11/Create-Edge-Maps-in-ZBrush-23.jpg"
            ],
            "posts": [
              {
                "host": "avcgi360",
                "url": "http://avcgi360.com",
                "users": [
                  "ActKamal"
                ]
              },
              {
                "host": "cgmeetup",
                "url": "http://cgmeetup.com",
                "users": [
                  "AiEnRobOtt",
                  "ZodiakMotion"
                ]
              },
              {
                "host": "youtube",
                "url": "http://youtube.com",
                "users": [
                  "kizakiaoi",
                  "KipMcSkipster"
                ]
              }
            ]
          },
          {
            "id": 6,
            "title": "Zbrush Tutorial: How To Model And Texture Realistic Skin",
            "totalShares": 1,
            "thumbs": [
              "http://www.avcgi360.com/wp-content/uploads/2014/09/Girlmain-670x400.jpg"
            ],
            "posts": [
              {
                "host": "avcgi360",
                "url": "http://avcgi360.com",
                "users": [
                  "ActKamal"
                ]
              }
            ]
          },
          {
            "id": 7,
            "title": "ZBrush Tutorial: Tips to present your characters",
            "totalShares": 3,
            "thumbs": [
              "http://www.avcgi360.com/wp-content/uploads/2014/09/Zbrush11-669x400.jpg"
            ],
            "posts": [
              {
                "host": "avcgi360",
                "url": "http://avcgi360.com",
                "users": [
                  "ActKamal"
                ]
              },
              {
                "host": "blogspot",
                "url": "http://blogspot.com",
                "users": [
                  "ActKamal"
                ]
              },
              {
                "host": "quora",
                "url": "http://quora.com",
                "users": [
                  "ActKamal"
                ]
              }
            ]
          },
          {
            "id": 8,
            "title": "ZBrush 4R6 FAQs and Tips and Tricks",
            "thumbs": [
              "http://i.ytimg.com/vi/ffsYyL17Rgg/maxresdefault.jpg"
            ],
            "totalShares": 1,
            "posts": [
              {
                "host": "youtube",
                "url": "http://youtube.com",
                "users": [
                  "Nick_OHLAS"
                ]
              }
            ]
          },
          {
            "id": 9,
            "title": "3D Printing Tutorial in ZBrush and 3ds Max: Making of The Catrina",
            "totalShares": 2,
            "thumbs": [
              "http://img-new.cgtrader.com/uploads/blog/posts/235/head_f74b555f-c4f4-429d-a0f5-d0fcfcd18043.jpg"
            ],
            "posts": [
              {
                "host": "cgtrader",
                "url": "http://cgtrader.com",
                "users": [
                  "CG_trader",
                  "vilius_I"
                ]
              }
            ]
          },
          {
            "id": 10,
            "title": "ZBrush Tutorial: Process to Create a Demon",
            "totalShares": 3,
            "thumbs": [
              "http://i1.wp.com/www.cgmeetup.net/home/wp-content/uploads/2014/03/Demon-Creation-Process-Zbrush-Tutorial-2.jpg?resize=960%2C599"
            ],
            "posts": [
              {
                "host": "avcgi360",
                "url": "http://avcgi360.com",
                "users": [
                  "ActKamal"
                ]
              },
              {
                "host": "pinterest",
                "url": "http://pinterest.com",
                "users": [
                  "ActKamal"
                ]
              },
              {
                "host": "quora",
                "url": "http://quora.com",
                "users": [
                  "ActKamal"
                ]
              }
            ]
          },
          {
            "id": 11,
            "title": "ZSphere Build Up",
            "totalShares": 1,
            "thumbs": [
              "http://fc01.deviantart.net/fs71/f/2014/293/3/b/buildup_by_mattthorup-d83jpdk.jpg"
            ],
            "posts": [
              {
                "host": "devianart",
                "url": "http://devianart.com",
                "users": [
                  "Linko_3D"
                ]
              }
            ]
          },
          {
            "id": 12,
            "title": "ZBrush tutorial: Panel Loops features complete explanation",
            "totalShares": 1,
            "thumbs": [
              "http://i.ytimg.com/vi/aCNFO5pQ9XA/hqdefault.jpg"
            ],
            "posts": [
              {
                "host": "youtube",
                "url": "http://youtube.com",
                "users": [
                  "Glary888"
                ]
              }
            ]
          },
          {
            "id": 13,
            "title": "Sculpting a Closed Hand in ZBrush",
            "totalShares": 13,
            "thumbs": [
              "http://i2.wp.com/www.cgmeetup.net/home/wp-content/uploads/2014/11/Sculpting-A-Fist-in-Zbrush-2.jpg?resize=960%2C523",
              "https://jeffersontran.files.wordpress.com/2013/11/righthand.jpg",
              "http://i0.wp.com/www.cgmeetup.net/home/wp-content/uploads/2014/11/Sculpting-A-Fist-in-Zbrush-1.jpg"
            ],
            "posts": [
              {
                "host": "lesterbanks",
                "url": "http://lesterbanks.com",
                "users": [
                  "lesterbanks",
                  "3Dsurvival",
                  "dafideff"
                ]
              },
              {
                "host": "blogspot",
                "url": "http://blogspot.com",
                "users": [
                  "ActKamal"
                ]
              },
              {
                "host": "pandawhale",
                "url": "http://pandawhale.com",
                "users": [
                  "ActKamal"
                ]
              },
              {
                "host": "itsart",
                "url": "http://itsart.com",
                "users": [
                  "itsartmag",
                  "NailTG"
                ]
              },
              {
                "host": "avcgi360",
                "url": "http://avcgi360.com",
                "users": [
                  "ActKamal"
                ]
              },
              {
                "host": "pinterest",
                "url": "http://pinterest.com",
                "users": [
                  "ActKamal"
                ]
              },
              {
                "host": "wordpress",
                "url": "http://wordpress.com",
                "users": [
                  "ActKamal"
                ]
              },
              {
                "host": "cgterminal",
                "url": "http://cgterminal.com",
                "users": [
                  "710Films"
                ]
              },
              {
                "host": "vimeo",
                "url": "http://vimeo.com",
                "users": [
                  "JoeCyriac",
                  "jisphording"
                ]
              }
            ]
          }
        ];

    return {
      get: function() {
        return mock;
      }
    };
  });