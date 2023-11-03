const tracksParent = document.querySelector(".tracks-parent");
const trackInfo = [
    ['Just Hits', 'track1'],
    ['Just Radio', 'track2'],
    ['Hit Rewind', 'track3'],
    ['Bad Habits', 'track4'],
    ['Maroon 5', 'track5'],
    ['ALA', 'track6'],
    ['ALA', 'track7'] // Changed the duplicate entry to 'track7'
];

for (let i = 0; i < trackInfo.length; i++) {
    tracksParent.insertAdjacentHTML('beforeend',
        `
        <div class="more trackName h-44 w-full hover:bg-black hover:text-white flex flex-col transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <div class="w-full h-[90%] bg-cover bg-top" style="background-image: url('img/tracks/${trackInfo[i][1]}.png');"></div>
            <p class="font-semibold text-center border-b border-solid border-white py-2">${trackInfo[i][0]}</p>
        </div>
        `
    );
}

// Filter logic for tracks:
const trackSearchBar = document.querySelector(".trackSearchBar");
const trackNames = document.querySelectorAll(".trackName");

trackSearchBar.addEventListener('input', function (event) {
    const searchText = trackSearchBar.value.toLowerCase();

    for (const track of trackNames) {
        const trackName = track.querySelector('p').textContent.toLowerCase();

        if (trackName.includes(searchText)) {
            track.style.display = 'block';
        } else {
            track.style.display = 'none';
        }
    }
});
