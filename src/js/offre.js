
const month = document.querySelector("#month");
const year = document.querySelector("#year");
var offerown = document.querySelector("#offer1");
var offertwo = document.querySelector("#offer2");

month.addEventListener('click', () => {
    offerown.style.display = "none";
    offertwo.style.display = "flex";
    month.classList.add("botona")
    year.classList.remove("botona")
});
year.addEventListener('click', () => {
    offerown.style.display = "flex";
    offertwo.style.display = "none";
    year.classList.add("botona")
    month.classList.remove("botona")
});