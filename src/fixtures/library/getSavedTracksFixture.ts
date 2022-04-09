import { GetSavedTracksResponse } from '../../types/SpotifyResponses';

export const getSavedTracksFixture: GetSavedTracksResponse = {
  href: 'https://api.spotify.com/v1/me/tracks?offset=0&limit=2',
  items: [
    {
      added_at: '2020-04-19T02:37:01Z',
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3dz0NnIZhtKKeXZxLOxCam',
              },
              href: 'https://api.spotify.com/v1/artists/3dz0NnIZhtKKeXZxLOxCam',
              id: '3dz0NnIZhtKKeXZxLOxCam',
              name: 'Porter Robinson',
              type: 'artist',
              uri: 'spotify:artist:3dz0NnIZhtKKeXZxLOxCam',
            },
          ],
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
            'EG',
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
            'SA',
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
          external_urls: {
            spotify: 'https://open.spotify.com/album/1PUPPk8ahNbNLSDuLzA1jB',
          },
          href: 'https://api.spotify.com/v1/albums/1PUPPk8ahNbNLSDuLzA1jB',
          id: '1PUPPk8ahNbNLSDuLzA1jB',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273956d578ebac807dfe89f03f7',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02956d578ebac807dfe89f03f7',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851956d578ebac807dfe89f03f7',
              width: 64,
            },
          ],
          name: 'Spitfire EP',
          release_date: '2011',
          release_date_precision: 'year',
          total_tracks: 11,
          type: 'album',
          uri: 'spotify:album:1PUPPk8ahNbNLSDuLzA1jB',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3dz0NnIZhtKKeXZxLOxCam',
            },
            href: 'https://api.spotify.com/v1/artists/3dz0NnIZhtKKeXZxLOxCam',
            id: '3dz0NnIZhtKKeXZxLOxCam',
            name: 'Porter Robinson',
            type: 'artist',
            uri: 'spotify:artist:3dz0NnIZhtKKeXZxLOxCam',
          },
        ],
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
          'EG',
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
          'SA',
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
        disc_number: 1,
        duration_ms: 349797,
        explicit: false,
        external_ids: {
          isrc: 'USQY51142734',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/75T1xBaarYAqYdNtFZxUaZ',
        },
        href: 'https://api.spotify.com/v1/tracks/75T1xBaarYAqYdNtFZxUaZ',
        id: '75T1xBaarYAqYdNtFZxUaZ',
        is_local: false,
        name: 'Unison',
        popularity: 40,
        preview_url:
          'https://p.scdn.co/mp3-preview/a6094934afd3dff11011273c7f3fa4fa73c4a2d5?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 2,
        type: 'track',
        uri: 'spotify:track:75T1xBaarYAqYdNtFZxUaZ',
      },
    },
    {
      added_at: '2020-04-18T22:17:47Z',
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5c3GLXai8YOMid29ZEuR9y',
              },
              href: 'https://api.spotify.com/v1/artists/5c3GLXai8YOMid29ZEuR9y',
              id: '5c3GLXai8YOMid29ZEuR9y',
              name: 'Nick Drake',
              type: 'artist',
              uri: 'spotify:artist:5c3GLXai8YOMid29ZEuR9y',
            },
          ],
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
            'EG',
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
            'SA',
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
          external_urls: {
            spotify: 'https://open.spotify.com/album/7KyvfoQhqlNLPNb98yY0pf',
          },
          href: 'https://api.spotify.com/v1/albums/7KyvfoQhqlNLPNb98yY0pf',
          id: '7KyvfoQhqlNLPNb98yY0pf',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2730f2a198651d9c2e4efad9d18',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e020f2a198651d9c2e4efad9d18',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d000048510f2a198651d9c2e4efad9d18',
              width: 64,
            },
          ],
          name: 'Pink Moon',
          release_date: '1972-01-01',
          release_date_precision: 'day',
          total_tracks: 11,
          type: 'album',
          uri: 'spotify:album:7KyvfoQhqlNLPNb98yY0pf',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5c3GLXai8YOMid29ZEuR9y',
            },
            href: 'https://api.spotify.com/v1/artists/5c3GLXai8YOMid29ZEuR9y',
            id: '5c3GLXai8YOMid29ZEuR9y',
            name: 'Nick Drake',
            type: 'artist',
            uri: 'spotify:artist:5c3GLXai8YOMid29ZEuR9y',
          },
        ],
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
          'EG',
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
          'SA',
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
        disc_number: 1,
        duration_ms: 119826,
        explicit: false,
        external_ids: {
          isrc: 'GBAAN7200034',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/7a9CcfKkg5E9JlU0nflL8K',
        },
        href: 'https://api.spotify.com/v1/tracks/7a9CcfKkg5E9JlU0nflL8K',
        id: '7a9CcfKkg5E9JlU0nflL8K',
        is_local: false,
        name: 'Road',
        popularity: 49,
        preview_url:
          'https://p.scdn.co/mp3-preview/4a7801c11aba5b07607ebdb3cb8e91a3725fb3f1?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 3,
        type: 'track',
        uri: 'spotify:track:7a9CcfKkg5E9JlU0nflL8K',
      },
    },
  ],
  limit: 2,
  next: 'https://api.spotify.com/v1/me/tracks?offset=2&limit=2',
  offset: 0,
  previous: null,
  total: 1459,
};
