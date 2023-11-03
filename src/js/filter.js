const hideOption1 = document.querySelector('.hide-option1');
const hideOption2 = document.querySelector('.hide-option2');

const searchSelect = document.querySelector(".searchSelect");

searchSelect.addEventListener('change', function(event) {
    const selectedValue = event.target.value;
    if (selectedValue === "all") {
        hideOption1.classList.remove('hidden');
        hideOption2.classList.remove('hidden');
    } else if (selectedValue === "option1") {
        hideOption1.classList.remove('hidden');
        hideOption2.classList.add('hidden');
    } else if (selectedValue === "option2") {
        hideOption1.classList.add('hidden');
        hideOption2.classList.remove('hidden');
    }
});