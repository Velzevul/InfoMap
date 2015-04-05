angular.module('InfoMap')
  .factory('UserService', function() {
    'use strict';

    var mockTrain = {
      'raulpercy': {
        avatar: 'https://pbs.twimg.com/profile_images/1768824664/raul_400x400.jpg'
      },
      'MikeGibbowr': {
        avatar: 'https://pbs.twimg.com/profile_images/378800000775286849/5c7255b9f4b5a33401549da271ce4a98_400x400.jpeg'
      },
      'PESERT': {
        avatar: 'https://pbs.twimg.com/profile_images/2704599212/b2aaaf21292dd5098c03b0b63c44494f_400x400.png'
      },
      'YutaruHD': {
        avatar: 'https://pbs.twimg.com/profile_images/542936061219860481/e3xg_jA1_bigger.jpeg'
      },
      'santosh_n_naik': {
        avatar: 'https://pbs.twimg.com/profile_images/470267983202230272/dv1JaPtC_400x400.jpeg'
      },
      'probio_US': {
        avatar: 'https://pbs.twimg.com/profile_images/470882641009315840/uLCg29VU_400x400.jpeg'
      },
      'visualfxhub': {
        avatar: 'https://pbs.twimg.com/profile_images/514905717757591552/zjJ47Wz4_400x400.jpeg'
      },
      'warrenally': {
        avatar: 'https://pbs.twimg.com/profile_images/1772739000/Mw_again_400x400.jpg'
      },
      'ActKamal': {
        avatar: 'https://pbs.twimg.com/profile_images/527685818702249984/SN7CN4dT_400x400.jpeg'
      },
      'bhupifxartist': {
        avatar: 'https://pbs.twimg.com/profile_images/1324290593/me_400x400.jpg'
      },
      'ZodiakMotion': {
        avatar: 'https://pbs.twimg.com/profile_images/3380865881/f73b3687ff39b795db05fcaf35972270_bigger.jpeg'
      },
      'KipMcSkipster': {
        avatar: 'https://pbs.twimg.com/profile_images/1148675368/chin_CU1_400x400.jpg'
      },
      'Nick_OHLAS': {
        avatar: 'https://pbs.twimg.com/profile_images/469077575893921792/AxLE6Co0_400x400.jpeg'
      },
      'CG_trader': {
        avatar: 'https://pbs.twimg.com/profile_images/466221699252244480/XgPHY-XQ_400x400.jpeg'
      },
      'vilius_I': {
        avatar: 'https://pbs.twimg.com/profile_images/1705285318/IMG_1101_normal.JPG'
      },
      'Linko_3D': {
        avatar: 'https://pbs.twimg.com/profile_images/552815444067749889/mqj86uMZ_400x400.jpeg'
      },
      'Glary888': {
        avatar: 'https://pbs.twimg.com/profile_images/430115884980387840/cF51DvQZ_400x400.jpeg'
      },
      'lesterbanks': {
        avatar: 'https://pbs.twimg.com/profile_images/2763516653/0755d8171938f00a06a533f2995119fb_400x400.jpeg'
      },
      '3Dsurvival': {
        avatar: 'https://pbs.twimg.com/profile_images/1896400689/avatar_400x400.jpg'
      },
      'dafideff': {
        avatar: 'https://pbs.twimg.com/profile_images/518447381562408960/k3Io8vt5_400x400.jpeg'
      },
      'itsartmag': {
        avatar: 'https://pbs.twimg.com/profile_images/959015172/Image_2_400x400.png'
      },
      'NailTG': {
        avatar: 'https://pbs.twimg.com/profile_images/485151427530985472/DV7q8GZN_bigger.png'
      },
      '710Films': {
        avatar: 'https://pbs.twimg.com/profile_images/462832891202772992/spDfRYba_400x400.jpeg'
      },
      'JoeCyriac': {
        avatar: 'https://pbs.twimg.com/profile_images/462721582217965568/efo68CkR_400x400.jpeg'
      },
      'jisphording': {
        avatar: 'https://pbs.twimg.com/profile_images/3061517074/c5b5da524a296d43f29c66fac1799eee_400x400.jpeg'
      },
      'AiEnRobOtt': {
        avatar: 'https://pbs.twimg.com/profile_images/478511428832210946/zEaztc6C_bigger.jpeg'
      },
      'kizakiaoi': {
        avatar: 'https://pbs.twimg.com/profile_images/545596935982182401/ptr44Zfy_400x400.jpeg'
      }
    };

    return {
      getTrain: function() {
        return mockTrain;
      }
    }
  });