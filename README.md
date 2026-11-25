# Akay's Travel Map

An interactive map of every city I've visited with my family: **101 cities in 30 countries, from 1987 to today.**

**▶ Live: https://akayibrahim.github.io/akayvisitedcities/**

![Akay's Travel Map](docs/screenshot.png)

## Features

- **World map** with clustered markers, built on Leaflet and OpenStreetMap
- **Country list** with flags and city counts; expand a country to list its cities, then click a city to zoom to it
- **Timeline playback** replays the trips year by year and draws the route between cities
- **Top 10** shortlist of favourite places
- Mobile-friendly layout with a slide-in sidebar

## Tech

Plain HTML, CSS and JavaScript, with no build step. Uses [Leaflet](https://leafletjs.com),
[Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) and Bootstrap 5.
Deployed to GitHub Pages by a GitHub Actions workflow on every push to `main`.

## Add a city

Append an entry to the `cities` array in [`script.js`](script.js):

```js
{ name: 'Lisbon', latlng: { lat: 38.7223, lng: -9.1393 }, year: 2026, country: 'Portugal' },
```

New countries also need a flag in `COUNTRY_FLAGS`.
