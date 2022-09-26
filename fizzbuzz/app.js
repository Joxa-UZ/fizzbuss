// var siteForm = document.querySelector(".site-form");
// var siteInput = document.querySelector(".site-input");

// var siteBox = document.querySelector(".site-result");
// var siteItem = document.querySelector(".site-meva");

// var siteMeva = ["Uzum", "Olma", "Limon", "Ananas", "Shaftoli"];
// siteItem.textContent = siteMeva;
// var secondArr = [];

// siteForm.addEventListener("submit", function(evt){
//     evt.preventDefault();
    
//     var fruitValue = Number(siteInput.value);

//     siteBox.textContent = siteMeva[fruitValue];

//     secondArr.push(siteMeva[fruitValue]);
//     siteBox.textContent = secondArr;


// })


// 2-masala

var siteForm = document.querySelector(".site-form");
var siteInput = document.querySelector(".site-input");
var siteInput2 = document.querySelector(".site-input2");

var siteResult = document.querySelector(".result");

var siteAddBtn = document.querySelector(".full");
var siteLeftBtn = document.querySelector(".oldinga");
var siteRightBtn = document.querySelector(".orqaga");

var result2 = [];

siteAddBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    
    var firstInputValue = (siteInput.value);
    var secondInputValue = (siteInput2.value);
    
    if (firstInputValue === '') {
        result2.push();
    }else{
        result2.push(firstInputValue);

    }
    if (secondInputValue === '') {
        result2.push();
    }else{

        result2.unshift(secondInputValue);
    }

    siteResult.textContent = result2;
    
})

siteLeftBtn.addEventListener("click", function() {
    
    result2.pop();
    siteResult.textContent = result2;

})
siteRightBtn.addEventListener("click", function() {
    
    result2.shift();
    siteResult.textContent = result2;

})


// 2-masala