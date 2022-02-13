// document.getElementById("no-match").style.display = "none";
// document.getElementById("match").style.display = "none";

// function getPin() {
//   var pin = Math.round(Math.random() * 10000);
//   var pinString = pin + "";
//   if (pinString.length == 4) {
//     return pin;
//   } else {
//     return getPin();
//   }
// }

// function generatePin(params) {
//   document.getElementById("display-pin").value = getPin();
// }

// document.getElementById("key-pad").addEventListener("click", function (event) {
//   var number = event.target.innerText;
//   if (isNaN(number)) {
//     if (number == "C") {
//       document.getElementById("typed-numbers").value = "";
//     }
//   } else {
//     var typedNumbers = document.getElementById("typed-numbers");
//     typedNumbers.value += number;
//   }
// });

// function verifyPin(params) {
//   //   console.log();
//   var pin = document.getElementById("display-pin").value;
//   var typed = document.getElementById("typed-numbers").value;

//   if (pin == typed) {
//     document.getElementById("match").style.display = "block";
//     document.getElementById("no-match").style.display = "none";
//   } else {
//     document.getElementById("no-match").style.display = "block";
//     document.getElementById("match").style.display = "none";
//   }
// }

// PIN MATHCER PRACTICE

function generatePin() {
  var pin = Math.round(Math.random() * 10000);
  var pinString = pin + "";
  if (pinString.length == 4) {
    document.getElementById("display-pin").value = pin;
  } else {
    console.log("got one");
    return generatePin();
  }
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  //   console.log(event.target);
  var number = event.target.innerText;
  if (isNaN(number)) {
    if (number == "C") {
      document.getElementById("typed-numbers").value = "";
    }
  } else {
    document.getElementById("typed-numbers").value += number;
  }
});

function verifyPin() {
  var displayPin = document.getElementById("display-pin").value;
  var typedNumbers = document.getElementById("typed-numbers").value;
  var suck = document.getElementById("match");
  var unSuck = document.getElementById("no-match");
  if (displayPin == typedNumbers) {
    suck.style.display = "block";
    unSuck.style.display = "none";
  } else {
    suck.style.display = "none";
    unSuck.style.display = "block";
  }
}
