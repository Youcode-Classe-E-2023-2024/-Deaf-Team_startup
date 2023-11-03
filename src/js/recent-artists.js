const recentArtistParent = document.querySelector(".recent-artist-parent");
const recentInfo = [
    ['Alan Walker', 'singer1'],
    ['Lewis Fonsi', 'singer2'],
    ['Justin Bieber', 'singer3'],
    ['Ed Shareen', 'singer4'],
    ['G la', 'singer5'],
    ['Lady Gaga', 'singer6'],
]

for (let i = 0; i < recentInfo.length; ++i) {
    recentArtistParent.insertAdjacentHTML('beforeend', `
        <div class="h-44 w-full hover:bg-black hover:text-white flex flex-col transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <div class="w-full h-[90%] bg-cover bg-top" style="background-image: url('img/recents/${recentInfo[i][1]}.png');"></div>
            <p class="font-semibold text-center border-b border-solid border-white py-2">${recentInfo[i][0]}</p>
        </div>
    `)
}