<p align="center">
  <a href="https://github.com/thomas-Negrault/spotify-web-api-ts">
    <img src="assets/logo.svg" height="100">
  </a>

  <h3 align="center">spotify-web-api-ts</h3>

  <p align="center">
    An isomorphic TypeScript wrapper for Spotify's Web API
    <br />
    <a href="https://thomas-negrault.github.io/spotify-web-api-ts/"><strong>View the docs »</strong></a>
    <br />
    <p align="center">
          <img alt="npm" src="https://badgen.net/npm/v/@thomasngrlt/spotify-web-api-ts"/>
      <img alt="minzipped size" src="https://badgen.net/bundlephobia/minzip/@thomasngrlt/spotify-web-api-ts">
      <img alt="license" src="https://badgen.net/github/license/thomas-Negrault/spotify-web-api-ts">
    </p>
    <p align="center">
      <img alt="Main Workflow" src="https://github.com/Thomas-Negrault/spotify-web-api-ts/actions/workflows/main-workflow.yml/badge.svg?branch=main"/>
      <img alt="codecov" src="https://codecov.io/gh/thomas-Negrault/spotify-web-api-ts/branch/main/graph/badge.svg"/>
      <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
    </p>
  </p>
</p>

### Fork of [adamgrieger/spotify-web-api-ts](https://github.com/adamgrieger/spotify-web-api-ts)

# Additions

- feat(spotifyaxios.ts): add spotify error message to axios error: [Issue in the initial repo](https://github.com/thomas-Negrault/spotify-web-api-ts/pull/39)

## Installation

### yarn

```sh
yarn add @thomasngrlt/spotify-web-api-ts
```

### npm

```sh
npm install @thomasngrlt/spotify-web-api-ts
```

## Basic Example

```typescript
import { SpotifyWebApi } from 'spotify-web-api-ts';

const spotify = new SpotifyWebApi({ accessToken: '<YOUR_ACCESS_TOKEN_HERE>' });

const { artists } = await spotify.albums.getAlbum('1uzfGk9vxMXfaZ2avqwxod');

console.log(artists.map(artist => artist.name));
// Array [ "Against All Logic" ]
```
