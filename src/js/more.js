const more = document.querySelectorAll('.more'); 
const back = document.querySelector('.back');
const part1 = document.querySelector('.part1');
const part2 = document.querySelector('.part2');

for (const el of more) {
    el.addEventListener('click', () => {
        part1.classList.toggle("hidden");
        part2.classList.toggle("hidden");
    })
}

back.addEventListener('click', () => {
    part1.classList.toggle("hidden");
    part2.classList.toggle("hidden");
})