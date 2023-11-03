// 
const favoritConInfo = [
    ['Blinding Lights', 'The Weekend', 'singer1'],
    ['Dance Monkey', 'Tones And I', 'singer2'],
    ['The Box', 'Raddy Rich', 'singer3'],
    ['Dont Start Now', 'Dua Lipa', 'singer4'],
    ['Watermelon Sugar', 'Harry Styles', 'singer5'],
    ['Someone You Loved', 'Lewis Capaldi', 'singer6'],
    ['Circles', 'Post Malone', 'singer7'],
    ['The Box', 'Raddy Rich', 'singer3'],
    ['Dont Start Now', 'Dua Lipa', 'singer4'],
    ['Watermelon Sugar', 'Harry Styles', 'singer5'],
];

const favoritContainer = document.querySelector('.favorit-container'); 
for (let i = 0; i < favoritConInfo.length; ++i) {
    favoritContainer.insertAdjacentHTML('beforeend', `
        <ul class="favorit-song h-16 bg-red-600 flex items-center cursor-pointer hover:bg-slate-950 text-white hover:scale-110 duration-300 hover:border-r-4 hover:border-solid hover:border-red-600">
            <div class="singer-img bg-cover w-16 h-16" style="background-image: url('img/singers/${favoritConInfo[i][2]}.png');"></div>
            <div class="grow pl-4">
                <p class="text-lg text-white">${favoritConInfo[i][0]}</p>
                <p class="text-sm">${favoritConInfo[i][1]}</p>
            </div>
            <div class="h-16 w-16 flex items-center justify-center px-4 border-l border-solid border-zinc-700 self-stretch pt-2">
                <ion-icon name="ellipsis-horizontal" class="favorit-info hidden text-white text-2xl"></ion-icon>
                <ion-icon name="heart" class="favorit-heart text-white text-4xl"></ion-icon>
            </div>
        </ul>
    `)
}

// Removing Heart Displaying Infos
const favoritSongs = document.querySelectorAll(".favorit-song");

favoritSongs.forEach((favoritSong) => {
  const favoritInfo = favoritSong.querySelector('.favorit-info');
  const favoritHeart = favoritSong.querySelector(".favorit-heart");

  favoritSong.addEventListener('mouseover', function() {
    favoritInfo.classList.remove('hidden');
    favoritHeart.classList.add('hidden');
  });

  favoritSong.addEventListener('mouseout', function() {
    favoritInfo.classList.add('hidden');
    favoritHeart.classList.remove('hidden');
  });
});