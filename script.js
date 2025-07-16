document.addEventListener('DOMContentLoaded', function() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        mapElement.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});

const cities = [
    { name: 'Sarajevo', latlng: { lat: 43.8562586, lng: 18.4130763 }, year: 2017, country: 'Bosnia and Herzegovina' },
    { name: 'Sofia', latlng: { lat: 42.6977082, lng: 23.3218675 }, year: 2018, country: 'Bulgaria' },
    { name: 'Samsun', latlng: { lat: 41.276, lng: 36.355 }, year: 2013, country: 'Turkey' },
    { name: 'Ordu', latlng: { lat: 40.989, lng: 37.875 }, year: 2013, country: 'Turkey' },
    { name: 'Trabzon', latlng: { lat: 40.754, lng: 39.623 }, year: 2013, country: 'Turkey' },
    { name: 'Rize', latlng: { lat: 40.989, lng: 40.532 }, year: 2013, country: 'Turkey' },
    { name: 'Batumi', latlng: { lat: 41.652, lng: 41.637 }, year: 2013, country: 'Georgia' },
    { name: 'Sinop', latlng: { lat: 42.025, lng: 35.144 }, year: 2013, country: 'Turkey' },
    { name: 'Barcelona', latlng: { lat: 41.380, lng: 2.175 }, year: 2013, country: 'Spain' },
    { name: 'Paris', latlng: { lat: 48.869, lng: 2.292 }, year: 2013, country: 'France' },
    { name: 'Madrid', latlng: { lat: 40.4381307, lng: -3.8199635 }, year: 2013, country: 'Spain' },
    { name: 'Bodrum', latlng: { lat: 37.033, lng: 27.436 }, year: 2014, country: 'Turkey' },
    { name: 'Paris', latlng: { lat: 48.869, lng: 2.292 }, year: 2015, country: 'France' },
    { name: 'Mytilene', latlng: { lat: 39.1761664, lng: 26.0832805 }, year: 2015, country: 'Greece' },
    { name: 'Santorini', latlng: { lat: 36.4203422, lng: 25.414253 }, year: 2015, country: 'Greece' },
    { name: 'Rhodes', latlng: { lat: 36.435784, lng: 28.2041503 }, year: 2015, country: 'Greece' },
    { name: 'Venice', latlng: { lat: 45.4046983, lng: 12.2469066 }, year: 2015, country: 'Italy' },
    { name: 'Nice', latlng: { lat: 43.7032979, lng: 7.1826006 }, year: 2015, country: 'France' },
    { name: 'Dubai', latlng: { lat: 25.0763802, lng: 54.9466132 }, year: 2016, country: 'UAE' },
    { name: 'Maldives', latlng: { lat: 3.1151953, lng: 70.9906052 }, year: 2016, country: 'Maldives' },
    { name: 'Halkidiki', latlng: { lat: 40.2752752, lng: 23.4054475 }, year: 2016, country: 'Greece' },
    { name: 'Thessaloniki', latlng: { lat: 40.6293, lng: 22.9474 }, year: 2016, country: 'Greece' },
    { name: 'Mellieha', latlng: { lat: 35.9564, lng: 14.3622 }, year: 2016, country: 'Malta' },
    { name: 'Saint Julian\'s', latlng: { lat: 35.9181, lng: 14.4883 }, year: 2016, country: 'Malta' },
    { name: 'Valletta', latlng: { lat: 35.8989, lng: 14.5146 }, year: 2016, country: 'Malta' },
    { name: 'Cyprus', latlng: { lat: 35.168626, lng: 32.8633904 }, year: 2006, country: 'Cyprus' },
    { name: 'Lisbon', latlng: { lat: 38.7436883, lng: -9.1953085 }, year: 2017, country: 'Portugal' },
    { name: 'Rome', latlng: { lat: 41.9102411, lng: 12.3955712 }, year: 2017, country: 'Italy' },
    { name: 'Naples', latlng: { lat: 40.8563, lng: 14.2464 }, year: 2017, country: 'Italy' },
    { name: 'Ireland', latlng: { lat: 53.3655634, lng: -10.4655587 }, year: 2017, country: 'Ireland' },
    { name: 'Fethiye', latlng: { lat: 36.6518837, lng: 29.0867647 }, year: 2017, country: 'Turkey' },
    { name: 'Bursa', latlng: { lat: 40.2217879, lng: 28.962078 }, year: 2017, country: 'Turkey' },
    { name: 'Dubrovnik', latlng: { lat: 42.6403, lng: 18.1083 }, year: 2017, country: 'Croatia' },
    { name: 'Split', latlng: { lat: 43.5081, lng: 16.4402 }, year: 2017, country: 'Croatia' },
    { name: 'Lisbon', latlng: { lat: 38.7436883, lng: -9.1953085 }, year: 2017, country: 'Portugal' },
    { name: 'Malaga', latlng: { lat: 36.718339, lng: -4.5194785 }, year: 2017, country: 'Spain' },
    { name: 'Seville', latlng: { lat: 37.3754864, lng: -6.0252698 }, year: 2017, country: 'Spain' },
    { name: 'Granada', latlng: { lat: 37.1810095, lng: -3.626377 }, year: 2017, country: 'Spain' },
    { name: 'Cordoba', latlng: { lat: 37.8882, lng: -4.7794 }, year: 2017, country: 'Spain' },
    { name: 'Vatican City', latlng: { lat: 41.9039, lng: 12.4521 }, year: 2017, country: 'Vatican City' },
    { name: 'Berlin', latlng: { lat: 52.50697, lng: 13.2843064 }, year: 2018, country: 'Germany' },
    { name: 'Bergen', latlng: { lat: 60.3920, lng: 5.3280 }, year: 2018, country: 'Norway' },
    { name: 'Flam', latlng: { lat: 60.8624, lng: 7.1137 }, year: 2018, country: 'Norway' },
    { name: 'Oslo', latlng: { lat: 59.9139, lng: 10.7522 }, year: 2018, country: 'Norway' },
    { name: 'Tromso', latlng: { lat: 69.6492, lng: 18.9553 }, year: 2018, country: 'Norway' },
    { name: 'Ibiza', latlng: { lat: 38.9070, lng: 1.4214 }, year: 2018, country: 'Spain' },
    { name: 'Mallorca', latlng: { lat: 39.6167, lng: 2.9833 }, year: 2018, country: 'Spain' },
    { name: 'Menorca', latlng: { lat: 39.9667, lng: 4.0833 }, year: 2018, country: 'Spain' },
    { name: 'Bangkok', latlng: { lat: 13.7563, lng: 100.5018 }, year: 2018, country: 'Thailand' },
    { name: 'Koh Samui', latlng: { lat: 9.5357, lng: 99.9357 }, year: 2018, country: 'Thailand' },
    { name: 'Phuket', latlng: { lat: 7.8804, lng: 98.3923 }, year: 2018, country: 'Thailand' },
    { name: 'Gaziantep', latlng: { lat: 37.0667, lng: 37.3833 }, year: 2018, country: 'Turkey' },
    { name: 'Kilpisjarvi', latlng: { lat: 69.0443, lng: 20.8033 }, year: 2018, country: 'Finland' },
    { name: 'Casablanca', latlng: { lat: 33.5731, lng: -7.5898 }, year: 2019, country: 'Morocco' },
    { name: 'Erfoud', latlng: { lat: 31.4366, lng: -4.2344 }, year: 2019, country: 'Morocco' },
    { name: 'Fes', latlng: { lat: 34.0331, lng: -5.0003 }, year: 2019, country: 'Morocco' },
    { name: 'Ifrane', latlng: { lat: 33.5228, lng: -5.1110 }, year: 2019, country: 'Morocco' },
    { name: 'Marrakesh', latlng: { lat: 31.6287, lng: -7.9920 }, year: 2019, country: 'Morocco' },
    { name: 'Ouarzazate', latlng: { lat: 30.9335, lng: -6.9370 }, year: 2019, country: 'Morocco' },
    { name: 'Rabat', latlng: { lat: 34.0209, lng: -6.8417 }, year: 2019, country: 'Morocco' },
    { name: 'La Digue', latlng: { lat: -4.3600, lng: 55.8400 }, year: 2019, country: 'Seychelles' },
    { name: 'Mahe', latlng: { lat: -4.6700, lng: 55.4600 }, year: 2019, country: 'Seychelles' },
    { name: 'Praslin', latlng: { lat: -4.3200, lng: 55.7300 }, year: 2019, country: 'Seychelles' },
    { name: 'Gocek', latlng: { lat: 36.7538614, lng: 28.9357848 }, year: 2022, country: 'Turkey' },
    { name: 'Akbuk', latlng: { lat: 37.3878272, lng: 27.4242628 }, year: 2022, country: 'Turkey' },
    { name: 'Crete', latlng: { lat: 35.4174, lng: 24.5300 }, year: 2024, country: 'Greece' },
    { name: 'Como', latlng: { lat: 45.8167, lng: 9.0833 }, year: 2024, country: 'Italy' },
    { name: 'Milan', latlng: { lat: 45.4647, lng: 9.1885 }, year: 2024, country: 'Italy' },
    { name: 'Turin', latlng: { lat: 45.1162, lng: 7.7426 }, year: 2024, country: 'Italy' },
    { name: 'Chur', latlng: { lat: 46.8500, lng: 9.5320 }, year: 2024, country: 'Switzerland' },
    { name: 'Luzern', latlng: { lat: 47.0505, lng: 8.3064 }, year: 2024, country: 'Switzerland' },
    { name: 'Zurich', latlng: { lat: 47.3769, lng: 8.5417 }, year: 2024, country: 'Switzerland' },
    { name: 'Prague', latlng: { lat: 50.0755, lng: 14.4378 }, year: 2024, country: 'Czech Republic' },
    { name: 'Colmar', latlng: { lat: 48.0817, lng: 7.3556 }, year: 2024, country: 'France' },
    { name: 'Vienna', latlng: { lat: 48.2082, lng: 16.3738 }, year: 2025, country: 'Austria' },
    { name: 'Los Angeles', latlng: { lat: 34.0522, lng: -118.2437 }, year: 2025, country: 'United States' },
    { name: 'Las Vegas', latlng: { lat: 36.1699, lng: -115.1398 }, year: 2025, country: 'United States' },
    { name: 'San Francisco', latlng: { lat: 37.7749, lng: -122.4194 }, year: 2025, country: 'United States' },
    { name: 'Budapest', latlng: { lat: 47.4979, lng: 19.0402 }, year: 2025, country: 'Hungary' },
    { name: 'Ankara', latlng: { lat: 39.9334, lng: 32.8597 }, year: 2011, country: 'Turkey' },
    { name: 'Bilecik', latlng: { lat: 40.1426, lng: 29.9793 }, year: 2010, country: 'Turkey' },
    { name: 'Eskisehir', latlng: { lat: 39.7767, lng: 30.5206 }, year: 2009, country: 'Turkey' },
    { name: 'Izmir', latlng: { lat: 38.4237, lng: 27.1428 }, year: 2014, country: 'Turkey' },
    { name: 'Malatya', latlng: { lat: 38.3554, lng: 38.3335 }, year: 1994, country: 'Turkey' },
    { name: 'Tekirdag', latlng: { lat: 40.9778, lng: 27.5153 }, year: 2015, country: 'Turkey' },
    { name: 'Zonguldak', latlng: { lat: 41.4517, lng: 31.7913 }, year: 2001, country: 'Turkey' },
    { name: 'Brussels', latlng: { lat: 50.8505, lng: 4.3488 }, year: 2013, country: 'Belgium' },
    { name: 'Netherlands', latlng: { lat: 52.5000, lng: 5.7500 }, year: 2013, country: 'Netherlands' }
];

document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map');

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    const cityList = document.getElementById('city-list');

    const groupedByCountry = cities.reduce((acc, city) => {
        if (!acc[city.country]) {
            acc[city.country] = [];
        }
        acc[city.country].push(city);
        return acc;
    }, {});

    const countryCount = Object.keys(groupedByCountry).length;
    const cityCount = cities.length;

    const stats = document.createElement('div');
    stats.id = 'stats';
    stats.innerHTML = `<p>Visited <strong>${countryCount}</strong> countries and <strong>${cityCount}</strong> cities.</p>`;
    const sidebar = document.getElementById('sidebar');
    sidebar.insertBefore(stats, cityList);

    const allMarkers = [];

    const sortedCountries = Object.keys(groupedByCountry).sort();

    sortedCountries.forEach(country => {
        const citiesInCountry = groupedByCountry[country];
        const countryLi = document.createElement('li');
        countryLi.className = 'list-group-item country-item';
        countryLi.innerHTML = `<span>${country} (${citiesInCountry.length})</span>`;

        const cityUl = document.createElement('ul');
        cityUl.className = 'list-group city-sublist mt-2';

        const countryMarkers = L.markerClusterGroup({ maxClusterRadius: 40 });

        citiesInCountry.forEach(city => {
            const cityLi = document.createElement('li');
            cityLi.className = 'list-group-item';
            cityLi.textContent = `${city.name} (${city.year})`;
            cityLi.addEventListener('click', (e) => {
                e.stopPropagation();
                map.setView(city.latlng, 13);
            });
            cityUl.appendChild(cityLi);

            const marker = L.marker([city.latlng.lat, city.latlng.lng]);
            marker.bindPopup(`<b>${city.name}</b><br>Visited in ${city.year}.`);
            countryMarkers.addLayer(marker);
            allMarkers.push(marker);
        });

        map.addLayer(countryMarkers);

        countryLi.appendChild(cityUl);
        cityList.appendChild(countryLi);

        countryLi.addEventListener('click', () => {
            countryLi.classList.toggle('open');
        });
    });

    const allMarkersGroup = L.featureGroup(allMarkers);
    map.fitBounds(allMarkersGroup.getBounds());
    map.invalidateSize();
});
