document.addEventListener('DOMContentLoaded', function () {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        mapElement.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }
});

const cities = [
    { name: 'Malatya', latlng: { lat: 38.3554, lng: 38.3335 }, year: 1987, country: 'Turkey' },
    { name: 'Zonguldak', latlng: { lat: 41.4517, lng: 31.7913 }, year: 2001, country: 'Turkey' },
    { name: 'Cyprus', latlng: { lat: 35.168626, lng: 32.8633904 }, year: 2006, country: 'Cyprus' },
    { name: 'Eskisehir', latlng: { lat: 39.7767, lng: 30.5206 }, year: 2009, country: 'Turkey' },
    { name: 'Bilecik', latlng: { lat: 40.1426, lng: 29.9793 }, year: 2010, country: 'Turkey' },
    { name: 'Ankara', latlng: { lat: 39.9334, lng: 32.8597 }, year: 2011, country: 'Turkey' },
    { name: 'Samsun', latlng: { lat: 41.276, lng: 36.355 }, year: 2013, country: 'Turkey' },
    { name: 'Ordu', latlng: { lat: 40.989, lng: 37.875 }, year: 2013, country: 'Turkey' },
    { name: 'Trabzon', latlng: { lat: 40.754, lng: 39.623 }, year: 2013, country: 'Turkey' },
    { name: 'Rize', latlng: { lat: 40.989, lng: 40.532 }, year: 2013, country: 'Turkey' },
    { name: 'Batumi', latlng: { lat: 41.652, lng: 41.637 }, year: 2013, country: 'Georgia' },
    { name: 'Sinop', latlng: { lat: 42.025, lng: 35.144 }, year: 2013, country: 'Turkey' },
    { name: 'Madrid', latlng: { lat: 40.4381307, lng: -3.8199635 }, year: 2013, country: 'Spain' },
    { name: 'Barcelona', latlng: { lat: 41.380, lng: 2.175 }, year: 2013, country: 'Spain' },
    { name: 'Paris', latlng: { lat: 48.869, lng: 2.292 }, year: 2013, country: 'France' },
    { name: 'Brussels', latlng: { lat: 50.8505, lng: 4.3488 }, year: 2013, country: 'Belgium' },
    { name: 'Amsterdam', latlng: { lat: 52.3676, lng: 4.9041 }, year: 2013, country: 'Netherlands' },
    { name: 'Izmir', latlng: { lat: 38.4237, lng: 27.1428 }, year: 2014, country: 'Turkey' },
    { name: 'Bodrum', latlng: { lat: 37.033, lng: 27.436 }, year: 2014, country: 'Turkey' },
    { name: 'Tekirdag', latlng: { lat: 40.9778, lng: 27.5153 }, year: 2015, country: 'Turkey' },
    { name: 'Paris', latlng: { lat: 48.869, lng: 2.292 }, year: 2015, country: 'France' },
    { name: 'Mytilene', latlng: { lat: 39.1761664, lng: 26.0832805 }, year: 2015, country: 'Greece' },
    { name: 'Santorini', latlng: { lat: 36.4203422, lng: 25.414253 }, year: 2015, country: 'Greece' },
    { name: 'Rhodes', latlng: { lat: 36.435784, lng: 28.2041503 }, year: 2015, country: 'Greece' },
    { name: 'Venice', latlng: { lat: 45.4046983, lng: 12.2469066 }, year: 2015, country: 'Italy' },
    { name: 'Verona', latlng: { lat: 45.433334, lng: 10.983333 }, year: 2015, country: 'Italy' },
    { name: 'Nice', latlng: { lat: 43.7032979, lng: 7.1826006 }, year: 2015, country: 'France' },
    { name: 'Monaco', latlng: { lat: 43.7384, lng: 7.4246 }, year: 2015, country: 'Monaco' },
    { name: 'Dubai', latlng: { lat: 25.0763802, lng: 54.9466132 }, year: 2016, country: 'UAE' },
    { name: 'Maldives', latlng: { lat: 3.2028, lng: 73.2207 }, year: 2016, country: 'Maldives' },
    { name: 'Halkidiki', latlng: { lat: 40.2752752, lng: 23.4054475 }, year: 2016, country: 'Greece' },
    { name: 'Thessaloniki', latlng: { lat: 40.6293, lng: 22.9474 }, year: 2016, country: 'Greece' },
    { name: 'Mellieha', latlng: { lat: 35.9564, lng: 14.3622 }, year: 2016, country: 'Malta' },
    { name: 'Saint Julian\'s', latlng: { lat: 35.9181, lng: 14.4883 }, year: 2016, country: 'Malta' },
    { name: 'Valletta', latlng: { lat: 35.8989, lng: 14.5146 }, year: 2016, country: 'Malta' },
    { name: 'Girne', latlng: { lat: 35.3417, lng: 33.3167 }, year: 2016, country: 'Cyprus' },
    { name: 'Bursa', latlng: { lat: 40.2217879, lng: 28.962078 }, year: 2016, country: 'Turkey' },
    { name: 'Rome', latlng: { lat: 41.9102411, lng: 12.3955712 }, year: 2017, country: 'Italy' },
    { name: 'Vatican City', latlng: { lat: 41.9039, lng: 12.4521 }, year: 2017, country: 'Vatican City' },
    { name: 'Naples', latlng: { lat: 40.8563, lng: 14.2464 }, year: 2017, country: 'Italy' },
    { name: 'Lisbon', latlng: { lat: 38.7436883, lng: -9.1953085 }, year: 2017, country: 'Portugal' },
    { name: 'Athlone', latlng: { lat: 53.4239, lng: -7.9407 }, year: 2017, country: 'Ireland' },
    { name: 'Fethiye', latlng: { lat: 36.6518837, lng: 29.0867647 }, year: 2017, country: 'Turkey' },
    { name: 'Rhodes', latlng: { lat: 36.435784, lng: 28.2041503 }, year: 2017, country: 'Greece' },
    { name: 'Bursa', latlng: { lat: 40.2217879, lng: 28.962078 }, year: 2017, country: 'Turkey' },
    { name: 'Sarajevo', latlng: { lat: 43.8562586, lng: 18.4130763 }, year: 2017, country: 'Bosnia and Herzegovina' },
    { name: 'Dubrovnik', latlng: { lat: 42.6403, lng: 18.1083 }, year: 2017, country: 'Croatia' },
    { name: 'Split', latlng: { lat: 43.5081, lng: 16.4402 }, year: 2017, country: 'Croatia' },
    { name: 'Malaga', latlng: { lat: 36.718339, lng: -4.5194785 }, year: 2017, country: 'Spain' },
    { name: 'Seville', latlng: { lat: 37.3754864, lng: -6.0252698 }, year: 2017, country: 'Spain' },
    { name: 'Cordoba', latlng: { lat: 37.8882, lng: -4.7794 }, year: 2017, country: 'Spain' },
    { name: 'Granada', latlng: { lat: 37.1810095, lng: -3.626377 }, year: 2017, country: 'Spain' },
    { name: 'Girne', latlng: { lat: 35.3417, lng: 33.3167 }, year: 2017, country: 'Cyprus' },
    { name: 'Sofia', latlng: { lat: 42.6977082, lng: 23.3218675 }, year: 2018, country: 'Bulgaria' },
    { name: 'Berlin', latlng: { lat: 52.50697, lng: 13.2843064 }, year: 2018, country: 'Germany' },
    { name: 'Malatya', latlng: { lat: 38.3554, lng: 38.3335 }, year: 1994, country: 'Turkey' },
    { name: 'Gaziantep', latlng: { lat: 37.0667, lng: 37.3833 }, year: 2018, country: 'Turkey' },
    { name: 'Girne', latlng: { lat: 35.3417, lng: 33.3167 }, year: 2018, country: 'Cyprus' },
    { name: 'Bangkok', latlng: { lat: 13.7563, lng: 100.5018 }, year: 2018, country: 'Thailand' },
    { name: 'Koh Samui', latlng: { lat: 9.5357, lng: 99.9357 }, year: 2018, country: 'Thailand' },
    { name: 'Phuket', latlng: { lat: 7.8804, lng: 98.3923 }, year: 2018, country: 'Thailand' },
    { name: 'Ibiza', latlng: { lat: 38.9070, lng: 1.4214 }, year: 2018, country: 'Spain' },
    { name: 'Mallorca', latlng: { lat: 39.6167, lng: 2.9833 }, year: 2018, country: 'Spain' },
    { name: 'Menorca', latlng: { lat: 39.9667, lng: 4.0833 }, year: 2018, country: 'Spain' },
    { name: 'Bursa', latlng: { lat: 40.2217879, lng: 28.962078 }, year: 2018, country: 'Turkey' },
    { name: 'Tromso', latlng: { lat: 69.6492, lng: 18.9553 }, year: 2018, country: 'Norway' },
    { name: 'Kilpisjarvi', latlng: { lat: 69.0443, lng: 20.8033 }, year: 2018, country: 'Finland' },
    { name: 'Bergen', latlng: { lat: 60.3920, lng: 5.3280 }, year: 2018, country: 'Norway' },
    { name: 'Flam', latlng: { lat: 60.8624, lng: 7.1137 }, year: 2018, country: 'Norway' },
    { name: 'Oslo', latlng: { lat: 59.9139, lng: 10.7522 }, year: 2018, country: 'Norway' },
    { name: 'La Digue', latlng: { lat: -4.3600, lng: 55.8400 }, year: 2019, country: 'Seychelles' },
    { name: 'Mahe', latlng: { lat: -4.6700, lng: 55.4600 }, year: 2019, country: 'Seychelles' },
    { name: 'Praslin', latlng: { lat: -4.3200, lng: 55.7300 }, year: 2019, country: 'Seychelles' },
    { name: 'Marmaris', latlng: { lat: 36.8565, lng: 28.2610 }, year: 2019, country: 'Turkey' },
    { name: 'Girne', latlng: { lat: 35.3417, lng: 33.3167 }, year: 2019, country: 'Cyprus' },
    { name: 'Bursa', latlng: { lat: 40.2217879, lng: 28.962078 }, year: 2019, country: 'Turkey' },
    { name: 'Casablanca', latlng: { lat: 33.5731, lng: -7.5898 }, year: 2019, country: 'Morocco' },
    { name: 'Rabat', latlng: { lat: 34.0209, lng: -6.8417 }, year: 2019, country: 'Morocco' },
    { name: 'Fes', latlng: { lat: 34.0331, lng: -5.0003 }, year: 2019, country: 'Morocco' },
    { name: 'Erfoud', latlng: { lat: 31.4366, lng: -4.2344 }, year: 2019, country: 'Morocco' },
    { name: 'Ifrane', latlng: { lat: 33.5228, lng: -5.1110 }, year: 2019, country: 'Morocco' },
    { name: 'Ouarzazate', latlng: { lat: 30.9335, lng: -6.9370 }, year: 2019, country: 'Morocco' },
    { name: 'Marrakesh', latlng: { lat: 31.6287, lng: -7.9920 }, year: 2019, country: 'Morocco' },
    { name: 'Lefkosa', latlng: { lat: 35.1856, lng: 33.3823 }, year: 2020, country: 'Cyprus' },
    { name: 'Bodrum', latlng: { lat: 37.033, lng: 27.436 }, year: 2020, country: 'Turkey' },
    { name: 'Gocek', latlng: { lat: 36.7538614, lng: 28.9357848 }, year: 2020, country: 'Turkey' },
    { name: 'Izmir', latlng: { lat: 38.4237, lng: 27.1428 }, year: 2021, country: 'Turkey' },
    { name: 'Akbuk', latlng: { lat: 37.3878272, lng: 27.4242628 }, year: 2022, country: 'Turkey' },
    { name: 'Bodrum', latlng: { lat: 37.033, lng: 27.436 }, year: 2022, country: 'Turkey' },
    { name: 'Gocek', latlng: { lat: 36.7538614, lng: 28.9357848 }, year: 2022, country: 'Turkey' },
    { name: 'Magusa', latlng: { lat: 35.1176, lng: 33.9391 }, year: 2023, country: 'Cyprus' },
    { name: 'Bodrum', latlng: { lat: 37.033, lng: 27.436 }, year: 2023, country: 'Turkey' },
    { name: 'Amsterdam', latlng: { lat: 52.3676, lng: 4.9041 }, year: 2023, country: 'Netherlands' },
    { name: 'Rotterdam', latlng: { lat: 51.9265, lng: 4.4625 }, year: 2023, country: 'Netherlands' },
    { name: 'Bursa', latlng: { lat: 40.2217879, lng: 28.962078 }, year: 2023, country: 'Turkey' },
    { name: 'Zurich', latlng: { lat: 47.3769, lng: 8.5417 }, year: 2023, country: 'Switzerland' },
    { name: 'Luzern', latlng: { lat: 47.0505, lng: 8.3064 }, year: 2023, country: 'Switzerland' },
    { name: 'Colmar', latlng: { lat: 48.0817, lng: 7.3556 }, year: 2023, country: 'France' },
    { name: 'Milan', latlng: { lat: 45.4647, lng: 9.1885 }, year: 2024, country: 'Italy' },
    { name: 'Como', latlng: { lat: 45.8167, lng: 9.0833 }, year: 2024, country: 'Italy' },
    { name: 'Turin', latlng: { lat: 45.1162, lng: 7.7426 }, year: 2024, country: 'Italy' },
    { name: 'Chur', latlng: { lat: 46.8500, lng: 9.5320 }, year: 2024, country: 'Switzerland' },
    { name: 'Crete', latlng: { lat: 35.4174, lng: 24.5300 }, year: 2024, country: 'Greece' },
    { name: 'Halkidiki', latlng: { lat: 40.2752752, lng: 23.4054475 }, year: 2024, country: 'Greece' },
    { name: 'Bursa', latlng: { lat: 40.2217879, lng: 28.962078 }, year: 2024, country: 'Turkey' },
    { name: 'Magusa', latlng: { lat: 35.1176, lng: 33.9391 }, year: 2024, country: 'Cyprus' },
    { name: 'Prague', latlng: { lat: 50.0755, lng: 14.4378 }, year: 2024, country: 'Czech Republic' },
    { name: 'Vienna', latlng: { lat: 48.2082, lng: 16.3738 }, year: 2025, country: 'Austria' },
    { name: 'Budapest', latlng: { lat: 47.4979, lng: 19.0402 }, year: 2025, country: 'Hungary' },
    { name: 'Los Angeles', latlng: { lat: 34.0522, lng: -118.2437 }, year: 2025, country: 'United States' },
    { name: 'Las Vegas', latlng: { lat: 36.1699, lng: -115.1398 }, year: 2025, country: 'United States' },
    { name: 'San Francisco', latlng: { lat: 37.7749, lng: -122.4194 }, year: 2025, country: 'United States' },
    { name: 'Halkidiki', latlng: { lat: 40.2752752, lng: 23.4054475 }, year: 2025, country: 'Greece' },
    { name: 'Bursa', latlng: { lat: 40.2217879, lng: 28.962078 }, year: 2025, country: 'Turkey' },
    { name: 'Geneva', latlng: { lat: 46.2044, lng: 6.1432 }, year: 2025, country: 'Switzerland' },
    { name: 'Annecy', latlng: { lat: 45.8992, lng: 6.1294 }, year: 2025, country: 'France' },
    { name: 'Lausanne', latlng: { lat: 46.519962, lng: 6.633597 }, year: 2025, country: 'Switzerland' },
    { name: 'Gruyeres', latlng: { lat: 46.5852, lng: 7.0575 }, year: 2025, country: 'Switzerland' },
    { name: 'Frankfurt', latlng: { lat: 50.1109, lng: 8.6821 }, year: 2026, country: 'Germany' },
    { name: 'Munich', latlng: { lat: 48.1351, lng: 11.5820 }, year: 2026, country: 'Germany' },
    { name: 'Salzburg', latlng: { lat: 47.8095, lng: 13.0550 }, year: 2026, country: 'Austria' },
    { name: 'Innsbruck', latlng: { lat: 47.2596, lng: 11.4041 }, year: 2026, country: 'Austria' },
    { name: 'Magusa', latlng: { lat: 35.1176, lng: 33.9391 }, year: 2026, country: 'Cyprus' },
    { name: 'Halkidiki', latlng: { lat: 40.2752752, lng: 23.4054475 }, year: 2026, country: 'Greece' },
    { name: 'Magusa', latlng: { lat: 35.1176, lng: 33.9391 }, year: 2026, country: 'Cyprus' }
];

const COUNTRY_FLAGS = {
    'Austria': '🇦🇹',
    'Belgium': '🇧🇪',
    'Bosnia and Herzegovina': '🇧🇦',
    'Bulgaria': '🇧🇬',
    'Croatia': '🇭🇷',
    'Cyprus': '🇨🇾',
    'Czech Republic': '🇨🇿',
    'Finland': '🇫🇮',
    'France': '🇫🇷',
    'Georgia': '🇬🇪',
    'Germany': '🇩🇪',
    'Greece': '🇬🇷',
    'Hungary': '🇭🇺',
    'Ireland': '🇮🇪',
    'Italy': '🇮🇹',
    'Maldives': '🇲🇻',
    'Malta': '🇲🇹',
    'Monaco': '🇲🇨',
    'Morocco': '🇲🇦',
    'Netherlands': '🇳🇱',
    'Norway': '🇳🇴',
    'Portugal': '🇵🇹',
    'Seychelles': '🇸🇨',
    'Spain': '🇪🇸',
    'Switzerland': '🇨🇭',
    'Thailand': '🇹🇭',
    'Turkey': '🇹🇷',
    'UAE': '🇦🇪',
    'United States': '🇺🇸',
    'Vatican City': '🇻🇦'
};

function flagFor(country) {
    return COUNTRY_FLAGS[country] || '🌍';
}

const TOP10 = [
    { name: 'Maldives', latlng: { lat: 3.1151953, lng: 70.9906052 } },
    { name: 'Seychelles', latlng: { lat: -4.6700, lng: 55.4600 } },
    { name: 'Magusa', latlng: { lat: 35.1176, lng: 33.9391 } },
    { name: 'Minorca', latlng: { lat: 39.9667, lng: 4.0833 } },
    { name: 'Santorini', latlng: { lat: 36.4203422, lng: 25.414253 } },
    { name: 'Tromso', latlng: { lat: 69.6492, lng: 18.9553 } },
    { name: 'Flam', latlng: { lat: 60.8624, lng: 7.1137 } },
    { name: 'Zurich', latlng: { lat: 47.3769, lng: 8.5417 } },
    { name: 'Prague', latlng: { lat: 50.0755, lng: 14.4378 } },
    { name: 'Colmar', latlng: { lat: 48.0817, lng: 7.3556 } }
];

function setupTop10(map) {
    const control = L.control({ position: 'bottomright' });
    control.onAdd = function () {
        const div = L.DomUtil.create('div', 'top10-control');
        const items = TOP10.map((place, i) =>
            `<li data-idx="${i}">${i + 1}. ${place.name}</li>`
        ).join('');
        div.innerHTML =
            '<button id="top10-toggle" class="top10-toggle">🏆 Top 10</button>' +
            `<ol id="top10-list" class="top10-list">${items}</ol>`;
        L.DomEvent.disableClickPropagation(div);
        L.DomEvent.disableScrollPropagation(div);
        return div;
    };
    control.addTo(map);

    document.getElementById('top10-toggle').addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelector('.top10-control').classList.toggle('open');
    });

    document.getElementById('top10-list').querySelectorAll('li').forEach((li) => {
        li.addEventListener('click', (e) => {
            e.stopPropagation();
            const place = TOP10[Number(li.dataset.idx)];
            map.setView(place.latlng, 10);
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map', {
        tap: false, // Bu satırı ekleyin
        closePopupOnClick: false // Bu satırı ekleyin
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abc',
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
    const uniqueCityKeys = new Set(cities.map(c => `${c.name}|${c.country}`));
    const cityCount = uniqueCityKeys.size;

    const stats = document.createElement('div');
    stats.id = 'stats';
    stats.innerHTML = `<p>Visited <strong>${countryCount}</strong> countries and <strong>${cityCount}</strong> cities.</p>`;
    const sidebar = document.getElementById('sidebar');
    sidebar.insertBefore(stats, cityList);

    const allMarkers = [];
    const allClusterGroups = [];

    const sortedCountries = Object.keys(groupedByCountry).sort();

    sortedCountries.forEach(country => {
        const citiesInCountry = groupedByCountry[country];
        const countryLi = document.createElement('li');
        countryLi.className = 'list-group-item country-item';
        countryLi.innerHTML = `<span>${flagFor(country)} ${country} <span class="count-badge">${citiesInCountry.length}</span></span>`;

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
            marker.bindPopup(`<b>${flagFor(city.country)} ${city.name}</b><br>Visited in ${city.year}.`);
            countryMarkers.addLayer(marker);
            allMarkers.push(marker);
        });

        map.addLayer(countryMarkers);
        allClusterGroups.push(countryMarkers);

        countryLi.appendChild(cityUl);
        cityList.appendChild(countryLi);

        countryLi.addEventListener('click', () => {
            countryLi.classList.toggle('open');
        });
    });

    const allMarkersGroup = L.featureGroup(allMarkers);
    const initialBounds = allMarkersGroup.getBounds();
    map.fitBounds(initialBounds);
    map.invalidateSize();
    // fitBounds can push the view past the Mercator projection's valid
    // latitude range (~85.05°) when the container is much wider than the
    // marker bounds are tall — tiles simply don't exist beyond that, which
    // shows up as a permanent gray band. Clamp panning to the valid range
    // so Leaflet re-centers the view back onto real tiles.
    map.setMaxBounds([[-85, -180], [85, 180]]);

    setupTimeline(map, cities, allClusterGroups, initialBounds);
    setupTop10(map);
});

function setupTimeline(map, cities, clusterGroups, initialBounds) {
    const sorted = cities
        .map((city, order) => ({ ...city, _order: order }))
        .sort((a, b) => a.year - b.year || a._order - b._order);

    const STEP_MS = 1900;
    const FLY_MS = 700;
    const DRAW_MS = 700;

    let index = -1;
    let playing = false;
    let timerId = null;
    let curveLayer = null;
    let arrowMarker = null;
    const revealedLayer = L.layerGroup();

    function removeCurve() {
        if (curveLayer) {
            map.removeLayer(curveLayer);
            curveLayer = null;
        }
        if (arrowMarker) {
            map.removeLayer(arrowMarker);
            arrowMarker = null;
        }
    }

    const control = L.control({ position: 'topright' });
    control.onAdd = function () {
        const div = L.DomUtil.create('div', 'timeline-control');
        div.innerHTML =
            '<button id="tl-prev" title="Onceki sehir"><i class="fas fa-step-backward"></i></button>' +
            '<button id="tl-play" title="Oynat / Duraklat"><i class="fas fa-play"></i></button>' +
            '<button id="tl-next" title="Sonraki sehir"><i class="fas fa-step-forward"></i></button>' +
            '<button id="tl-reset" title="Zaman cizelgesinden cik"><i class="fas fa-xmark"></i></button>' +
            '<span id="tl-label">Zaman Cizelgesi</span>';
        L.DomEvent.disableClickPropagation(div);
        L.DomEvent.disableScrollPropagation(div);
        return div;
    };
    control.addTo(map);

    const playBtn = document.getElementById('tl-play');
    const label = document.getElementById('tl-label');

    function updateLabel() {
        if (index < 0) {
            label.textContent = 'Zaman Cizelgesi';
        } else {
            const city = sorted[index];
            label.textContent = `${city.year} — ${city.name} (${index + 1}/${sorted.length})`;
        }
    }

    function getCurvePoints(from, to, segments) {
        const dLat = to.lat - from.lat;
        const dLng = to.lng - from.lng;
        const dist = Math.sqrt(dLat * dLat + dLng * dLng) || 0.0001;
        const offset = dist * 0.15;
        const perpLat = -dLng / dist;
        const perpLng = dLat / dist;
        const ctrlLat = (from.lat + to.lat) / 2 + perpLat * offset;
        const ctrlLng = (from.lng + to.lng) / 2 + perpLng * offset;

        const points = [];
        for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            const lat = (1 - t) * (1 - t) * from.lat + 2 * (1 - t) * t * ctrlLat + t * t * to.lat;
            const lng = (1 - t) * (1 - t) * from.lng + 2 * (1 - t) * t * ctrlLng + t * t * to.lng;
            points.push([lat, lng]);
        }
        return points;
    }

    function bearingDeg(p1, p2) {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        return (Math.atan2(dx, -dy) * 180) / Math.PI;
    }

    function drawCurve(from, to, onDone) {
        const points = getCurvePoints(from, to, 60);
        curveLayer = L.polyline([points[0]], { color: '#e8590c', weight: 3, opacity: 0.9, lineCap: 'round' }).addTo(map);

        arrowMarker = L.marker(points[0], {
            icon: L.divIcon({
                className: 'flight-arrow-icon',
                html: '<div class="arrow-triangle"></div>',
                iconSize: [18, 16],
                iconAnchor: [9, 2]
            }),
            interactive: false,
            keyboard: false
        }).addTo(map);
        const arrowTip = arrowMarker.getElement() ? arrowMarker.getElement().querySelector('.arrow-triangle') : null;

        const start = performance.now();

        function step(now) {
            const t = Math.min(1, (now - start) / DRAW_MS);
            const count = Math.max(2, Math.floor(t * points.length));
            curveLayer.setLatLngs(points.slice(0, count));

            const tipLatLng = points[count - 1];
            const tailLatLng = points[Math.max(0, count - 2)];
            arrowMarker.setLatLng(tipLatLng);
            if (arrowTip) {
                const p1 = map.latLngToContainerPoint(tailLatLng);
                const p2 = map.latLngToContainerPoint(tipLatLng);
                arrowTip.style.transform = `rotate(${bearingDeg(p1, p2)}deg)`;
            }

            if (t < 1) {
                requestAnimationFrame(step);
            } else if (onDone) {
                onDone();
            }
        }
        requestAnimationFrame(step);
    }

    let lastOpenMarker = null;

    function addMarkerFor(city, openDetail) {
        const marker = L.marker([city.latlng.lat, city.latlng.lng]);
        marker.bindPopup(`<b>${flagFor(city.country)} ${city.name}</b><br>${city.country} — ${city.year}`);
        marker.addTo(revealedLayer);
        if (openDetail) {
            if (lastOpenMarker) {
                lastOpenMarker.closePopup();
            }
            marker.openPopup();
            lastOpenMarker = marker;
        }
        return marker;
    }

    function enterTimelineMode() {
        clusterGroups.forEach(g => map.removeLayer(g));
        revealedLayer.addTo(map);
    }

    function showCity(i, animate) {
        const city = sorted[i];
        const finish = () => {
            addMarkerFor(city, true);
            updateLabel();
        };
        if (animate && i > 0) {
            const prev = sorted[i - 1];
            // Fly the camera to a stable framing of both points FIRST, and only
            // start drawing the curve once the pan/zoom has settled — drawing
            // while the view is still easing makes the line look like it swings
            // the wrong way before "correcting" itself.
            const bounds = L.latLngBounds([
                [prev.latlng.lat, prev.latlng.lng],
                [city.latlng.lat, city.latlng.lng]
            ]);
            map.once('moveend', () => drawCurve(prev.latlng, city.latlng, finish));
            map.flyToBounds(bounds, { paddingTopLeft: [40, 40], paddingBottomRight: [40, 40], maxZoom: 8, duration: FLY_MS / 1000 });
        } else {
            map.flyTo([city.latlng.lat, city.latlng.lng], 6, { duration: 0.5 });
            finish();
        }
    }

    function pause() {
        playing = false;
        if (timerId) {
            clearTimeout(timerId);
            timerId = null;
        }
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }

    function goNext(animate) {
        if (index >= sorted.length - 1) {
            pause();
            return;
        }
        if (index === -1) {
            enterTimelineMode();
        }
        removeCurve();
        index++;
        showCity(index, animate);
    }

    function goPrev() {
        if (index <= 0) return;
        pause();
        removeCurve();
        revealedLayer.clearLayers();
        lastOpenMarker = null;
        index--;
        for (let i = 0; i <= index; i++) {
            addMarkerFor(sorted[i], i === index);
        }
        map.flyTo([sorted[index].latlng.lat, sorted[index].latlng.lng], Math.max(map.getZoom(), 5), { duration: 0.5 });
        updateLabel();
    }

    function tick() {
        if (!playing) return;
        goNext(true);
        if (index >= sorted.length - 1) {
            pause();
            return;
        }
        timerId = setTimeout(tick, STEP_MS);
    }

    function play() {
        if (playing) return;
        playing = true;
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        tick();
    }

    function exitTimelineMode() {
        pause();
        removeCurve();
        revealedLayer.clearLayers();
        map.removeLayer(revealedLayer);
        clusterGroups.forEach(g => g.addTo(map));
        lastOpenMarker = null;
        index = -1;
        updateLabel();
        map.flyToBounds(initialBounds, { duration: 0.8 });
    }

    document.getElementById('tl-play').addEventListener('click', (e) => {
        e.stopPropagation();
        if (playing) {
            pause();
        } else {
            play();
        }
    });
    document.getElementById('tl-next').addEventListener('click', (e) => {
        e.stopPropagation();
        pause();
        goNext(true);
    });
    document.getElementById('tl-prev').addEventListener('click', (e) => {
        e.stopPropagation();
        goPrev();
    });
    document.getElementById('tl-reset').addEventListener('click', (e) => {
        e.stopPropagation();
        exitTimelineMode();
    });
}
