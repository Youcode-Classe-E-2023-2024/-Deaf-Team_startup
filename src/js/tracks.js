const tracksParent = document.querySelector(".tracks-parent");
const trackInfo = [
    ['Just Hits', 'track1'], 
    ['Just Radio', 'track2'], 
    ['Hit Rewind', 'track3'], 
    ['Bad Habits', 'track4'], 
    ['Maroon 5', 'track5'],   
    ['ALA', 'track6'], 
    ['ALA', 'track6']      
]; 

for (let i = 0; i < trackInfo.length - 1; i++) {
    tracksParent.insertAdjacentHTML('beforeend', 
        `
        <div class="h-44 w-full hover:bg-black hover:text-white flex flex-col transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <div class="w-full h-[90%] bg-cover bg-top" style="background-image: url('img/tracks/${trackInfo[i][1]}.png');"></div>
            <p class="font-semibold text-center border-b border-solid border-white py-2">${trackInfo[i][0]}</p>
        </div>
        `
    );
}

