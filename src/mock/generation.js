export const generatePoint = () => ({
  'basePrice': 1100,
  'dateFrom': '2019-07-10T22:55:56.845Z',
  'dateTo': '2019-07-11T11:22:13.375Z',
  'destination': 1,
  'id': '0',
  'isFavorite': false,
  'offers': [1, 3, 4],
  'type': 'bus'
});

export const generateOffer = () => ({
  'id': 1,
  'title': 'Upgrade to a business class',
  'price': 120
});

export const generateDestination = () => ({
  'id': 1,
  'description': 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
  'name': 'Chamonix',
  'pictures': [
    {
      'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
      'description': 'Chamonix parliament building'
    }
  ]
});
