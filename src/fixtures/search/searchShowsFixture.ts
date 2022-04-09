import { SearchShowsResponse } from '../../types/SpotifyResponses';

export const searchShowsFixture: SearchShowsResponse = {
  shows: {
    href: 'https://api.spotify.com/v1/search?query=brother&type=show&offset=0&limit=1',
    items: [
      {
        available_markets: [
          'AD',
          'AE',
          'AR',
          'AT',
          'AU',
          'BE',
          'BG',
          'BH',
          'BO',
          'BR',
          'CA',
          'CH',
          'CL',
          'CO',
          'CR',
          'CY',
          'CZ',
          'DE',
          'DK',
          'DO',
          'DZ',
          'EC',
          'EE',
          'ES',
          'FI',
          'FR',
          'GB',
          'GR',
          'GT',
          'HK',
          'HN',
          'HU',
          'ID',
          'IE',
          'IL',
          'IN',
          'IS',
          'IT',
          'JO',
          'JP',
          'KW',
          'LB',
          'LI',
          'LT',
          'LU',
          'LV',
          'MA',
          'MC',
          'MT',
          'MX',
          'MY',
          'NI',
          'NL',
          'NO',
          'NZ',
          'OM',
          'PA',
          'PE',
          'PH',
          'PL',
          'PS',
          'PT',
          'PY',
          'QA',
          'RO',
          'SE',
          'SG',
          'SK',
          'SV',
          'TH',
          'TN',
          'TR',
          'TW',
          'US',
          'UY',
          'VN',
          'ZA',
        ],
        copyrights: [],
        description:
          "Free advice from three of the world's most qualified, most related experts: Justin, Travis and Griffin McElroy. For one-half to three-quarters of an hour every Monday, we tell people how to live their lives, because we're obviously doing such a great job of it so far.",
        explicit: true,
        external_urls: {
          spotify: 'https://open.spotify.com/show/308BQUUnIkoH2UAXJCAt0g',
        },
        href: 'https://api.spotify.com/v1/shows/308BQUUnIkoH2UAXJCAt0g',
        id: '308BQUUnIkoH2UAXJCAt0g',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/f98b2557f4c992405e70ebe70540c24592043540',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/8650ae0b7542c57d0b4f7e96016b65776515e3cd',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/f3376e395e743adc694fd0c79769fe13a78df29c',
            width: 64,
          },
        ],
        is_externally_hosted: false,
        languages: ['en'],
        media_type: 'audio',
        name: 'My Brother, My Brother And Me',
        publisher: 'The McElroys',
        type: 'show',
        uri: 'spotify:show:308BQUUnIkoH2UAXJCAt0g',
      },
    ],
    limit: 1,
    next: 'https://api.spotify.com/v1/search?query=brother&type=show&offset=1&limit=1',
    offset: 0,
    previous: null,
    total: 3505,
  },
};
