'use strict';

const ccv = document.querySelector("[ccv]");
const backCard = document.querySelector(".back");
const frontCard = document.querySelector(".front");
const ccvInput = document.querySelector(".white-stick");

const ccvHovered = function () {
    frontCard.style.transform = 'perspective(1000px) rotateY(180deg)';
    frontCard.style.transition = "transform .4s ease-out"
    backCard.style.display = "block";
}

const ccvNotHovered = function() {
    frontCard.style.transform = 'perspective(1000px) rotateY(0deg)';
    backCard.style.display = "none";
}

ccv.addEventListener("mouseover", ccvHovered);
ccv.addEventListener("input", ccvHovered);
ccv.addEventListener("mouseout", ccvNotHovered);

const cardNumber = document.querySelector(".card-number-input");
const frontNumber = document.querySelector(".card-number-box");

const EcritcardNumber = function() {
    if (cardNumber.value.trim() === "") {
        frontNumber.innerText = "################";
    } else {
        frontNumber.innerText = cardNumber.value;
    }
}

cardNumber.addEventListener("input", EcritcardNumber);

const cardName = document.querySelector(".card-name-input");
const frontName = document.querySelector(".card-holder-name");

const EcritcardName = function() {
    if (cardName.value.trim() === "") {
        frontName.innerText = "FULL NAME";
    } else {
        frontName.innerText = cardName.value;
    }
}

cardName.addEventListener("input", EcritcardName);

const cardExpMonth = document.querySelector(".exp-month-input");
const frontExpMonth = document.querySelector(".front-exp-month");

const EcritcardExpMonth = function() {
    if(cardExpMonth.value.trim() === ""){
        frontExpMonth.innerText = "MM";
    } else {
        frontExpMonth.innerText = cardExpMonth.value;
    }
}

cardExpMonth.addEventListener("input", EcritcardExpMonth);

const cardExpYear = document.querySelector(".exp-year-input");
const frontExpYear = document.querySelector(".front-exp-year");

const EcritcardExpYear = function() {
    if(cardExpYear.value.trim() === ""){
        frontExpYear.innerText = "YY";
    } else {
        frontExpYear.innerText = cardExpYear.value;
    }
}

cardExpYear.addEventListener("input", EcritcardExpYear);

const limiteCardNumber = function() {
    if (cardNumber.value.length === 16) {
        cardNumber.setAttribute("disabled", "true");
        
    }
} 


cardNumber.addEventListener("input", limiteCardNumber);

const EcritcardCCV = function() {
    if(ccv.value.trim() === ""){
        ccv.value = "";
    } else {
        ccvInput.value = ccv.value;
    }
}

ccv.addEventListener("input", EcritcardCCV);

const editCardNumber = function() {
    cardNumber.setAttribute("disabled");

}


const form = document.querySelector("form");
const isValidCreditCardNumber = function(cardNumber) {
    // Remove any non-digit characters from the card number
    cardNumber = cardNumber.replace(/\D/g, '');
  
    // Check if the card number has a valid length (typically 13 to 19 digits for credit cards)
    if (cardNumber.length < 13 || cardNumber.length > 19) {
      return false;
    }
  
    // Reverse the card number and convert it to an array of digits
    const cardDigits = cardNumber.split('').reverse().map(Number);
  
    // Double every second digit, starting from the right
    for (let i = 1; i < cardDigits.length; i += 2) {
      cardDigits[i] *= 2;
      if (cardDigits[i] > 9) {
        cardDigits[i] -= 9;
      }
    }
  
    // Sum all the digits
    const sum = cardDigits.reduce((acc, digit) => acc + digit, 0);
  
    // Check if the sum is a multiple of 10
    result = sum % 10 === 0;
    if (!result) {
        cardNumber.placeholder.innerText = "this card Number isn't valid";
        e.preventDefault();
    }
  }



form.addEventListener('submit', isValidCreditCardNumber);

// Function to save form data to local storage
function saveFormData() {
    localStorage.setItem('cardName', cardName.value);
    localStorage.setItem('cardNumber', cardNumber.value);
    localStorage.setItem('cardExpMonth', cardExpMonth.value);
    localStorage.setItem('cardExpYear', cardExpYear.value);
  }
  
  // Function to retrieve form data from local storage and populate the fields
  function retrieveFormData() {
    cardName.value = localStorage.getItem('cardName') || '';
    cardNumber.value = localStorage.getItem('cardNumber') || '';
    cardExpMonth.value = localStorage.getItem('cardExpMonth') || '';
    cardExpYear.value = localStorage.getItem('cardExpYear') || '';
    // Trigger the input events to update the card appearance
    EcritcardName();
    EcritcardNumber();
    EcritcardExpMonth();
    EcritcardExpYear();
  }
  
  // Event listeners for input fields
  cardName.addEventListener('input', function () {
    EcritcardName();
    saveFormData();
  });
  
  cardNumber.addEventListener('input', function () {
    EcritcardNumber();
    saveFormData();
    limiteCardNumber();
  });
  
  cardExpMonth.addEventListener('input', function () {
    EcritcardExpMonth();
    saveFormData();
  });
  
  cardExpYear.addEventListener('input', function () {
    EcritcardExpYear();
    saveFormData();
  });
  
  // Call the retrieveFormData function to populate the fields when the page loads
  retrieveFormData();

  

  