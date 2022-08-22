const POINTS = [
  {
    'id': '0',
    'type': 'ship',
    'dateFrom': '2022-08-20T09:24:56.803Z',
    'dateTo': '2022-08-21T02:13:10.024Z',
    'destination': 1,
    'basePrice': 400,
    'isFavorite': true,
    'offers': [
      2,
      6
    ]
  },
  {
    'id': '1',
    'type': 'taxi',
    'dateFrom': '2022-08-21T02:13:10.024Z',
    'dateTo': '2022-08-22T01:51:57.058Z',
    'destination': 12,
    'basePrice': 500,
    'isFavorite': true,
    'offers': [
      2,
      4
    ]
  },
  {
    'id': '2',
    'type': 'restaurant',
    'dateFrom': '2022-08-22T01:51:57.058Z',
    'dateTo': '2022-08-22T06:43:01.317Z',
    'destination': 22,
    'basePrice': 500,
    'isFavorite': false,
    'offers': [
      1,
      2
    ]
  },
  {
    'id': '3',
    'type': 'drive',
    'dateFrom': '2022-08-22T06:43:01.317Z',
    'dateTo': '2022-08-23T02:41:07.373Z',
    'destination': 14,
    'basePrice': 1000,
    'isFavorite': true,
    'offers': [
      1,
      2
    ]
  },
  {
    'id': '4',
    'type': 'train',
    'dateFrom': '2022-08-23T02:41:07.373Z',
    'dateTo': '2022-08-23T14:28:52.261Z',
    'destination': 23,
    'basePrice': 900,
    'isFavorite': false,
    'offers': [
      1,
      2,
      3
    ]
  },
  {
    'id': '5',
    'type': 'ship',
    'dateFrom': '2022-08-23T14:28:52.261Z',
    'dateTo': '2022-08-23T22:11:09.512Z',
    'destination': 7,
    'basePrice': 500,
    'isFavorite': true,
    'offers': [
      2,
      4,
      5
    ]
  },
  {
    'id': '6',
    'type': 'drive',
    'dateFrom': '2022-08-23T22:11:09.512Z',
    'dateTo': '2022-08-24T11:27:13.779Z',
    'destination': 25,
    'basePrice': 1000,
    'isFavorite': false,
    'offers': [
      1,
      2
    ]
  },
  {
    'id': '7',
    'type': 'restaurant',
    'dateFrom': '2022-08-24T11:27:13.779Z',
    'dateTo': '2022-08-25T02:24:42.007Z',
    'destination': 17,
    'basePrice': 700,
    'isFavorite': true,
    'offers': [
      1,
      2
    ]
  },
  {
    'id': '8',
    'type': 'flight',
    'dateFrom': '2022-08-25T02:24:42.007Z',
    'dateTo': '2022-08-25T15:02:54.692Z',
    'destination': 13,
    'basePrice': 700,
    'isFavorite': true,
    'offers': [
      1,
      4,
      5
    ]
  },
  {
    'id': '9',
    'type': 'bus',
    'dateFrom': '2022-08-25T15:02:54.692Z',
    'dateTo': '2022-08-25T23:28:09.373Z',
    'destination': 2,
    'basePrice': 500,
    'isFavorite': false,
    'offers': [
      1,
      2,
      3
    ]
  },
  {
    'id': '10',
    'type': 'ship',
    'dateFrom': '2022-08-25T23:28:09.373Z',
    'dateTo': '2022-08-26T18:06:08.475Z',
    'destination': 4,
    'basePrice': 600,
    'isFavorite': false,
    'offers': [
      2,
      3,
      4,
      6
    ]
  },
  {
    'id': '11',
    'type': 'train',
    'dateFrom': '2022-08-26T18:06:08.475Z',
    'dateTo': '2022-08-27T12:52:55.540Z',
    'destination': 4,
    'basePrice': 600,
    'isFavorite': false,
    'offers': [
      1,
      2,
      3
    ]
  },
  {
    'id': '12',
    'type': 'check-in',
    'dateFrom': '2022-08-27T12:52:55.540Z',
    'dateTo': '2022-08-27T18:15:15.723Z',
    'destination': 2,
    'basePrice': 800,
    'isFavorite': false,
    'offers': [
      2,
      3
    ]
  },
  {
    'id': '13',
    'type': 'restaurant',
    'dateFrom': '2022-08-27T18:15:15.723Z',
    'dateTo': '2022-08-28T05:50:09.710Z',
    'destination': 13,
    'basePrice': 400,
    'isFavorite': true,
    'offers': [
      1,
      2
    ]
  },
  {
    'id': '14',
    'type': 'train',
    'dateFrom': '2022-08-28T05:50:09.710Z',
    'dateTo': '2022-08-28T15:26:30.312Z',
    'destination': 10,
    'basePrice': 400,
    'isFavorite': false,
    'offers': [
      1,
      2,
      3
    ]
  },
  {
    'id': '15',
    'type': 'taxi',
    'dateFrom': '2022-08-28T15:26:30.312Z',
    'dateTo': '2022-08-29T05:21:44.812Z',
    'destination': 25,
    'basePrice': 600,
    'isFavorite': false,
    'offers': [
      1,
      2,
      3,
      4
    ]
  },
  {
    'id': '16',
    'type': 'taxi',
    'dateFrom': '2022-08-29T05:21:44.812Z',
    'dateTo': '2022-08-29T10:47:25.891Z',
    'destination': 23,
    'basePrice': 700,
    'isFavorite': true,
    'offers': [
      1,
      3,
      4
    ]
  },
  {
    'id': '17',
    'type': 'taxi',
    'dateFrom': '2022-08-29T10:47:25.891Z',
    'dateTo': '2022-08-30T08:50:11.934Z',
    'destination': 19,
    'basePrice': 1000,
    'isFavorite': true,
    'offers': [
      2,
      5
    ]
  },
  {
    'id': '18',
    'type': 'taxi',
    'dateFrom': '2022-08-30T08:50:11.934Z',
    'dateTo': '2022-08-30T18:24:06.020Z',
    'destination': 25,
    'basePrice': 600,
    'isFavorite': true,
    'offers': [
      1,
      2,
      5
    ]
  },
  {
    'id': '19',
    'type': 'check-in',
    'dateFrom': '2022-08-30T18:24:06.020Z',
    'dateTo': '2022-08-31T15:25:08.269Z',
    'destination': 18,
    'basePrice': 800,
    'isFavorite': true,
    'offers': [
      2,
      3,
      4,
      5
    ]
  }
];

const DESTINATION = [
  {
    'id': 1,
    'name': 'Chamonix',
    'description': 'Chamonix, middle-eastern paradise, a perfect place to stay with a family.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.9441444546270308',
        'description': 'Chamonix zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4389007896333357',
        'description': 'Chamonix park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8584908481509879',
        'description': 'Chamonix biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.22424029046648086',
        'description': 'Chamonix kindergarten'
      }
    ]
  },
  {
    'id': 2,
    'name': 'Geneva',
    'description': 'Geneva, with an embankment of a mighty river as a centre of attraction.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.20174205406640633',
        'description': 'Geneva biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.22115987509436152',
        'description': 'Geneva biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6858800588832195',
        'description': 'Geneva city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7687666871630126',
        'description': 'Geneva parliament building'
      }
    ]
  },
  {
    'id': 3,
    'name': 'Amsterdam',
    'description': 'Amsterdam, is a beautiful city, middle-eastern paradise, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.1488761184680658',
        'description': 'Amsterdam street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8145743406211707',
        'description': 'Amsterdam kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9760492934862524',
        'description': 'Amsterdam zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.544595810455144',
        'description': 'Amsterdam parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9490122925567885',
        'description': 'Amsterdam biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.1987549979243326',
        'description': 'Amsterdam central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5777723551197311',
        'description': 'Amsterdam central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.2662939216285418',
        'description': 'Amsterdam street market'
      }
    ]
  },
  {
    'id': 4,
    'name': 'Helsinki',
    'description': 'Helsinki, a true asian pearl, with crowded streets, in a middle of Europe, with an embankment of a mighty river as a centre of attraction.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.9040806959900225',
        'description': 'Helsinki central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9873124376416329',
        'description': 'Helsinki embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.14848805951052535',
        'description': 'Helsinki central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8144004852148903',
        'description': 'Helsinki parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.1655714971430975',
        'description': 'Helsinki street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.43744962333006043',
        'description': 'Helsinki central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9432315345217588',
        'description': 'Helsinki kindergarten'
      }
    ]
  },
  {
    'id': 5,
    'name': 'Oslo',
    'description': 'Oslo, a true asian pearl.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.6158819125755486',
        'description': 'Oslo kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.26733741554303414',
        'description': 'Oslo kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.178567518077011',
        'description': 'Oslo kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8269862589525823',
        'description': 'Oslo zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.3602719798073908',
        'description': 'Oslo kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.08634655060936658',
        'description': 'Oslo parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.738769349164238',
        'description': 'Oslo parliament building'
      }
    ]
  },
  {
    'id': 6,
    'name': 'Kopenhagen',
    'description': 'Kopenhagen, a true asian pearl, in a middle of Europe, with an embankment of a mighty river as a centre of attraction.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.8862336012313623',
        'description': 'Kopenhagen embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6384309895705991',
        'description': 'Kopenhagen kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9633277754818763',
        'description': 'Kopenhagen city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.26750036082590345',
        'description': 'Kopenhagen street market'
      }
    ]
  },
  {
    'id': 7,
    'name': 'Den Haag',
    'description': 'Den Haag, with a beautiful old town.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.6722037456302623',
        'description': 'Den Haag parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5659063270818356',
        'description': 'Den Haag park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5559839686926868',
        'description': 'Den Haag parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5607137380274336',
        'description': 'Den Haag park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.3941381654809406',
        'description': 'Den Haag city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.987332500340518',
        'description': 'Den Haag parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5002577472238405',
        'description': 'Den Haag park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5673507917782581',
        'description': 'Den Haag biggest supermarket'
      }
    ]
  },
  {
    'id': 8,
    'name': 'Rotterdam',
    'description': 'Rotterdam, with a beautiful old town, for those who value comfort and coziness, full of of cozy canteens where you can try the best coffee in the Middle East.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.8661732807144369',
        'description': 'Rotterdam street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8042282740068654',
        'description': 'Rotterdam city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5850961699885175',
        'description': 'Rotterdam parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9646212521320943',
        'description': 'Rotterdam street market'
      }
    ]
  },
  {
    'id': 9,
    'name': 'Saint Petersburg',
    'description': 'Saint Petersburg, a true asian pearl, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction, a perfect place to stay with a family.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.30815769003440696',
        'description': 'Saint Petersburg parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.554044904990465',
        'description': 'Saint Petersburg embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7570347892331286',
        'description': 'Saint Petersburg embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6565559083233912',
        'description': 'Saint Petersburg street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.34274060600603695',
        'description': 'Saint Petersburg biggest supermarket'
      }
    ]
  },
  {
    'id': 10,
    'name': 'Moscow',
    'description': 'Moscow, with crowded streets, in a middle of Europe, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.5408780003917222',
        'description': 'Moscow zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9272416547593645',
        'description': 'Moscow biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7148916950866016',
        'description': 'Moscow embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5026464878679775',
        'description': 'Moscow kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.16137729657815947',
        'description': 'Moscow kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6044539381664651',
        'description': 'Moscow embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5673600282507192',
        'description': 'Moscow parliament building'
      }
    ]
  },
  {
    'id': 11,
    'name': 'Sochi',
    'description': 'Sochi, is a beautiful city, middle-eastern paradise.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.924844028061466',
        'description': 'Sochi embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.32919609536599004',
        'description': 'Sochi embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.876875163134808',
        'description': 'Sochi central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4240351341376636',
        'description': 'Sochi parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.1228870238345503',
        'description': 'Sochi city centre'
      }
    ]
  },
  {
    'id': 12,
    'name': 'Tokio',
    'description': 'Tokio, a true asian pearl, in a middle of Europe.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.4566710142275954',
        'description': 'Tokio park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.36438090984259874',
        'description': 'Tokio embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.30643393241260064',
        'description': 'Tokio zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8546427903301992',
        'description': 'Tokio zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9266989305520275',
        'description': 'Tokio park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6512945767223954',
        'description': 'Tokio biggest supermarket'
      }
    ]
  },
  {
    'id': 13,
    'name': 'Kioto',
    'description': 'Kioto, with crowded streets, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.6351637766974372',
        'description': 'Kioto zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9905094130202892',
        'description': 'Kioto park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.07591395785794597',
        'description': 'Kioto city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8336828125962592',
        'description': 'Kioto embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4059392120393195',
        'description': 'Kioto central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.10878581922272312',
        'description': 'Kioto kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.09268411198646231',
        'description': 'Kioto park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.03560833466536639',
        'description': 'Kioto park'
      }
    ]
  },
  {
    'id': 14,
    'name': 'Nagasaki',
    'description': 'Nagasaki, is a beautiful city, middle-eastern paradise, for those who value comfort and coziness, full of of cozy canteens where you can try the best coffee in the Middle East.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.6428868025845205',
        'description': 'Nagasaki parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.08315162342834581',
        'description': 'Nagasaki kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.037592231232658646',
        'description': 'Nagasaki kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.49556861669324737',
        'description': 'Nagasaki park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.46988862078148674',
        'description': 'Nagasaki zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6533005302419277',
        'description': 'Nagasaki park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.0017663578089446297',
        'description': 'Nagasaki park'
      }
    ]
  },
  {
    'id': 15,
    'name': 'Hiroshima',
    'description': 'Hiroshima, with a beautiful old town, for those who value comfort and coziness, full of of cozy canteens where you can try the best coffee in the Middle East.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.3232813533093206',
        'description': 'Hiroshima park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.40133806307672093',
        'description': 'Hiroshima embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5922440497274843',
        'description': 'Hiroshima embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.1188576676523414',
        'description': 'Hiroshima central station'
      }
    ]
  },
  {
    'id': 16,
    'name': 'Berlin',
    'description': 'Berlin, is a beautiful city, with crowded streets, for those who value comfort and coziness, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.941215803602151',
        'description': 'Berlin street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7115854619252442',
        'description': 'Berlin kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5260750483103371',
        'description': 'Berlin street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4525112759839869',
        'description': 'Berlin parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4123825453609318',
        'description': 'Berlin central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.3730042997363774',
        'description': 'Berlin zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6165911299725171',
        'description': 'Berlin central station'
      }
    ]
  },
  {
    'id': 17,
    'name': 'Munich',
    'description': 'Munich, with an embankment of a mighty river as a centre of attraction, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.270355127977298',
        'description': 'Munich parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8426092613295015',
        'description': 'Munich parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7298102752842981',
        'description': 'Munich kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.01494087285923218',
        'description': 'Munich city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.06980991157340122',
        'description': 'Munich biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.031134347632837622',
        'description': 'Munich zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4566319538283654',
        'description': 'Munich street market'
      }
    ]
  },
  {
    'id': 18,
    'name': 'Frankfurt',
    'description': 'Frankfurt, with crowded streets, middle-eastern paradise, with an embankment of a mighty river as a centre of attraction.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.24912371226517838',
        'description': 'Frankfurt zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.14669446066183722',
        'description': 'Frankfurt parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7936491456609844',
        'description': 'Frankfurt city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.1433010017708276',
        'description': 'Frankfurt park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8189303201631339',
        'description': 'Frankfurt central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.07987801427450036',
        'description': 'Frankfurt park'
      }
    ]
  },
  {
    'id': 19,
    'name': 'Vien',
    'description': 'Vien, in a middle of Europe, middle-eastern paradise, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.32143587855500155',
        'description': 'Vien parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.18234898382024745',
        'description': 'Vien street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.16961825394410845',
        'description': 'Vien embankment'
      }
    ]
  },
  {
    'id': 20,
    'name': 'Rome',
    'description': 'Rome, a true asian pearl, a perfect place to stay with a family.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.19828880417121564',
        'description': 'Rome zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.03708276967058621',
        'description': 'Rome central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4013062889824033',
        'description': 'Rome park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.05006051119544819',
        'description': 'Rome zoo'
      }
    ]
  },
  {
    'id': 21,
    'name': 'Naples',
    'description': 'Naples, a true asian pearl, in a middle of Europe, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.29675435916487625',
        'description': 'Naples biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6381766890122194',
        'description': 'Naples zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.894161199163106',
        'description': 'Naples biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9008860801831806',
        'description': 'Naples park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7828011166661735',
        'description': 'Naples parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6400518394641586',
        'description': 'Naples parliament building'
      }
    ]
  },
  {
    'id': 22,
    'name': 'Venice',
    'description': 'Venice, with crowded streets, in a middle of Europe, with a beautiful old town, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.3988077214469863',
        'description': 'Venice zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.2837072261544902',
        'description': 'Venice city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.10085782273116095',
        'description': 'Venice park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6691206494725048',
        'description': 'Venice city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.3662263674890194',
        'description': 'Venice parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5267019866019023',
        'description': 'Venice central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7389823745303892',
        'description': 'Venice park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8148640201645831',
        'description': 'Venice park'
      }
    ]
  },
  {
    'id': 23,
    'name': 'Milan',
    'description': 'Milan, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.5565595115796218',
        'description': 'Milan parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.02764305919352661',
        'description': 'Milan central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6077355673678477',
        'description': 'Milan central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.23613321649651597',
        'description': 'Milan street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.928700800047523',
        'description': 'Milan central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7913624506014836',
        'description': 'Milan city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.764206233920083',
        'description': 'Milan zoo'
      }
    ]
  },
  {
    'id': 24,
    'name': 'Monaco',
    'description': 'Monaco, is a beautiful city, a true asian pearl, in a middle of Europe, with a beautiful old town, middle-eastern paradise, with an embankment of a mighty river as a centre of attraction.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.7027862151366089',
        'description': 'Monaco street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6486290930542167',
        'description': 'Monaco embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.941701689144469',
        'description': 'Monaco park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.44129709019935426',
        'description': 'Monaco street market'
      }
    ]
  },
  {
    'id': 25,
    'name': 'Paris',
    'description': 'Paris, middle-eastern paradise.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.3658631175891647',
        'description': 'Paris kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5422793221616278',
        'description': 'Paris parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.07591924010590967',
        'description': 'Paris zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.09174923959483405',
        'description': 'Paris embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.02323039071958677',
        'description': 'Paris city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4297370368832585',
        'description': 'Paris kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.16611160117654578',
        'description': 'Paris city centre'
      }
    ]
  },
  {
    'id': 26,
    'name': 'Barcelona',
    'description': 'Barcelona, a true asian pearl, with crowded streets, with a beautiful old town, with an embankment of a mighty river as a centre of attraction, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.9122985369076597',
        'description': 'Barcelona embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.712520674424626',
        'description': 'Barcelona zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.08568297920519075',
        'description': 'Barcelona zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.12463790020289323',
        'description': 'Barcelona parliament building'
      }
    ]
  },
  {
    'id': 27,
    'name': 'Valencia',
    'description': 'Valencia, with crowded streets, for those who value comfort and coziness.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.794868337362374',
        'description': 'Valencia parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.106750779377067',
        'description': 'Valencia kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.38328050044718154',
        'description': 'Valencia city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.020339076093822017',
        'description': 'Valencia parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.13367440812784515',
        'description': 'Valencia biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.27835112578877697',
        'description': 'Valencia embankment'
      }
    ]
  },
  {
    'id': 28,
    'name': 'Madrid',
    'description': 'Madrid, is a beautiful city, middle-eastern paradise, with an embankment of a mighty river as a centre of attraction.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.5352425143742461',
        'description': 'Madrid central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7502183789993435',
        'description': 'Madrid kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8293616754962971',
        'description': 'Madrid park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4346086734597816',
        'description': 'Madrid biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.1363578336134843',
        'description': 'Madrid central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.0035510688182505135',
        'description': 'Madrid central station'
      }
    ]
  }
];

const OFFERS = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': 1,
        'title': 'Upgrade to a business class',
        'price': 190
      },
      {
        'id': 2,
        'title': 'Choose the radio station',
        'price': 30
      },
      {
        'id': 3,
        'title': 'Choose temperature',
        'price': 170
      },
      {
        'id': 4,
        'title': 'Drive quickly, I\'m in a hurry',
        'price': 100
      },
      {
        'id': 5,
        'title': 'Drive slowly',
        'price': 110
      }
    ]
  },
  {
    'type': 'bus',
    'offers': [
      {
        'id': 1,
        'title': 'Infotainment system',
        'price': 50
      },
      {
        'id': 2,
        'title': 'Order meal',
        'price': 100
      },
      {
        'id': 3,
        'title': 'Choose seats',
        'price': 190
      }
    ]
  },
  {
    'type': 'train',
    'offers': [
      {
        'id': 1,
        'title': 'Book a taxi at the arrival point',
        'price': 110
      },
      {
        'id': 2,
        'title': 'Order a breakfast',
        'price': 80
      },
      {
        'id': 3,
        'title': 'Wake up at a certain time',
        'price': 140
      }
    ]
  },
  {
    'type': 'flight',
    'offers': [
      {
        'id': 1,
        'title': 'Choose meal',
        'price': 120
      },
      {
        'id': 2,
        'title': 'Choose seats',
        'price': 90
      },
      {
        'id': 3,
        'title': 'Upgrade to comfort class',
        'price': 120
      },
      {
        'id': 4,
        'title': 'Upgrade to business class',
        'price': 120
      },
      {
        'id': 5,
        'title': 'Add luggage',
        'price': 170
      },
      {
        'id': 6,
        'title': 'Business lounge',
        'price': 160
      }
    ]
  },
  {
    'type': 'check-in',
    'offers': [
      {
        'id': 1,
        'title': 'Choose the time of check-in',
        'price': 70
      },
      {
        'id': 2,
        'title': 'Choose the time of check-out',
        'price': 190
      },
      {
        'id': 3,
        'title': 'Add breakfast',
        'price': 110
      },
      {
        'id': 4,
        'title': 'Laundry',
        'price': 140
      },
      {
        'id': 5,
        'title': 'Order a meal from the restaurant',
        'price': 30
      }
    ]
  },
  {
    'type': 'sightseeing',
    'offers': []
  },
  {
    'type': 'ship',
    'offers': [
      {
        'id': 1,
        'title': 'Choose meal',
        'price': 130
      },
      {
        'id': 2,
        'title': 'Choose seats',
        'price': 160
      },
      {
        'id': 3,
        'title': 'Upgrade to comfort class',
        'price': 170
      },
      {
        'id': 4,
        'title': 'Upgrade to business class',
        'price': 150
      },
      {
        'id': 5,
        'title': 'Add luggage',
        'price': 100
      },
      {
        'id': 6,
        'title': 'Business lounge',
        'price': 40
      }
    ]
  },
  {
    'type': 'drive',
    'offers': [
      {
        'id': 1,
        'title': 'With automatic transmission',
        'price': 110
      },
      {
        'id': 2,
        'title': 'With air conditioning',
        'price': 180
      }
    ]
  },
  {
    'type': 'restaurant',
    'offers': [
      {
        'id': 1,
        'title': 'Choose live music',
        'price': 150
      },
      {
        'id': 2,
        'title': 'Choose VIP area',
        'price': 70
      }
    ]
  }
];

const POINT_TYPE = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];


export { POINTS, DESTINATION, OFFERS, POINT_TYPE };
