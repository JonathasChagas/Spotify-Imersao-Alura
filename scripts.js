const searchInput = document.getElementById ('search-input');
const resultArtists = document.getElementById ('result-artist');
const resultPlaylist = document.getElementById ('result-playlists')

function requestApi(searchTerm) {
    fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
        .then((response) => response.json())
        .then((results) => displayResults(results))
}

function displayResults(results) {
    resultPlaylist.classList.add ('hidden');
    const artistName= document.getElementById('artist-name');
    const artistImage = document.getElementById ('artist-img');

    results.forEach((element) => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtists.classList.remove('hidden');
}

document.addEventListener ('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
        resultPlaylist.classList.remove ('hidden');
        resultArtists.classList.add('hidden');
        return;
    }
    requestApi (searchTerm);
});