var index = 0;

function clearOutput() {
  document.getElementById("output").innerHTML = "";
}

function buttonclicked() {
  var x = document.getElementById("textbox").value;
  clearOutput();

  var re = /^roll/g
  var re2 = /\s\d+/g

  if (x == "time") {
    time();
  } else if (x == "list") {
    list();
  } else if (x == "meme") {
    meme(index);
    index++;
  } else if (x == "reset") {
    reset();
  } else if (re.test(x)) {
    val = re2.exec(x)[0];
    diceroll(val);
  } else {
    document.getElementById("output").innerHTML = "Invalid Input";
  }
}

function reset() {

  index = 0;

  var output = document.getElementById("output");
  output.innerHTML = "Successfully reset"
}


function time() {
  var d = new Date();
  document.getElementById("output").innerHTML = "Date: " + d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate() + " Time: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

function list() {
  var output = document.getElementById("output");
  for (i = 0; i < 10; i++) {
    var para = document.createElement("p");
    var node = document.createTextNode(i);
    para.appendChild(node);
    output.appendChild(para);
  }
}

function getmeme() {
  meme(index);
  index++;
}


function meme(index) {
  var output = document.getElementById("output");
  var memes = ["https://i.redd.it/aydbg2742nq21.jpg",
    "https://i.redd.it/xzqf3nrpsjr21.jpg",
    "https://i.redd.it/0kndbirq8cr21.jpg",
    "https://i.redd.it/1gkn6xofgqr21.jpg",
    "https://i.redd.it/djiz419knrr21.jpg",
    "https://i.redd.it/mloigp1dfpr21.jpg",
    "https://i.redd.it/z8g9cuttdtr21.jpg",
    "https://i.redd.it/f26bi9089ur21.jpg"
  ];

  if (index < memes.length) {
    output.innerHTML = `<img src="${memes[index]}">`;
  } else {
    output.innerHTML = " :( Meme bank has been exhausted ): ";
  }
}


function diceroll(val) {
  roll = Math.random() * val + 1;
  roll = Math.floor(roll);
  var output = document.getElementById("output");
  output.innerHTML = `Rolled a ${val} sided dice, got ${roll}`;
  return
}

window.onload = function() {
  var input = document.getElementById("textbox");
  input.addEventListener("keyup", function(event) {
    // 13 is enter
    if (event.keyCode === 13) {
      event.preventDefault();
      // Tigger button
      document.getElementById("submit").click();
    }
  });
}