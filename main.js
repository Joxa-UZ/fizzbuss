var siteForm = document.querySelector(".site-form");
var siteInput = document.querySelector(".site-input");
var resultBox = document.querySelector(".box");
var thirdBox = document.querySelector(".third");
var fiveBox = document.querySelector(".five");
var bothBox = document.querySelector(".both");

var threeNumNull = document.querySelector(".third-span");
var fiveNumNull = document.querySelector(".five-span");
var bothNumNull = document.querySelector(".both-span");

var thirdDivision = [];
var fiveDivision = [];
var bothDivision = [];
var thirdNum = "";

var threeNull = 0;
var fiveNull = 0;
var bothNull = 0;



siteForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    var siteInputValue = Number(siteInput.value);
    
    
    if (siteInputValue % 3 == 0 && siteInputValue % 5 == 0){
        resultBox.textContent = "FIZZBUZZ"
        bothDivision.push(siteInputValue);
        bothBox.textContent = bothDivision;

        bothNull += 1;
        bothNumNull.textContent = bothNull;
    } else if (siteInputValue % 5 == 0) {
        resultBox.textContent = "BUZZ";
        fiveDivision.push(siteInputValue);
        fiveBox.textContent = fiveDivision;

        fiveNull += 1;
        fiveNumNull.textContent = fiveNull;
    }else if (siteInputValue % 3 == 0) {
        resultBox.textContent = "FIZZ";
        thirdDivision.push(siteInputValue);
        thirdBox.textContent = thirdDivision;
        
        threeNull += 1;
        threeNumNull.textContent = threeNull;
    }else{
        console.log("");
    }
    
})