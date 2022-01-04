//Access the webpage id class and span
let txtNumber = document.getElementById("txtNumber");
let baseDropDown = document.getElementById("base");
let convertBtn = document.getElementById("btnConvert");
let spanElement = document.getElementById("convertedValue");

//adding event listener
convertBtn.addEventListener("click", function () {
  //Number ,+,parseInt
  let num = +txtNumber.value;
  let base = +baseDropDown.value;
  if (isNaN(num)) {
    spanElement.textContent = "Please Enter a Valid Number.";
    spanElement.style.color = "#Ef5350";
  } else {
    convetedValue = num.toString(base);
    spanElement.textContent = convetedValue.toUpperCase();
    spanElement.style.color = "#81c784";
    spanElement.style.fontWeight = "bold";
  }
});
