let billAmount = document.getElementById('amount');
let noOfPerson = document.getElementById('people');
let serviceQual = document.getElementById('serviceQual');
let tipAmount = document.getElementById('tipAmount');
let calculate = document.getElementById('button');
let clear = document.getElementById('clearButton');

function calculateTip() {
  let amount = billAmount.value;
  let people = noOfPerson.value;
  let tipPercent = serviceQual.value;

  if (amount === "" || tipPercent == 0) {
    alert("Please enter a valid Bill Amount or Tip Percent")
    return;
  }

  if (people === "" || people == 0) {
    alert("Please enter a valid number of Person")
    return;
  }



  let tip = (amount * tipPercent) / people;

  tip = tip.toFixed(2);


  if (tip == 0) {
    tipAmount.innerHTML = `₹ ${tip}`;
  } else {
    tipAmount.innerHTML = `₹ ${tip} Each`
  }
}

function clearAll() {
  billAmount.value = "",
  noOfPerson.value = "",
  serviceQual.value = 0,
  tipAmount.innerHTML = "";
}

calculate.addEventListener("click", calculateTip);
clear.addEventListener("click", clearAll);