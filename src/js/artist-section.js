const artistSection = document.querySelector(".artist-section");

for (let i = 0; i < 10; ++i) {
    artistSection.insertAdjacentHTML('beforeend', `
    <div class="text-xl px-10 py-5 text-white flex items-center justify-between">
        <div class="items-center flex gap-8">
            <div>${i + 1}</div>
            <div class="h-10 w-10" style="background-image: url('img/singers/singer6.png');background-size: cover;"></div>
            <div>Alone - Remix</div>
        </div>
        <div>2,862,874</div>
        <div>2:49</div>
    </div>
    `)
}