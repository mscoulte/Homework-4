//Define Questions

let Q1 = "3 x 3 = __";
let Q2 = "12(6 / 6) = __";
let Q3 = "27 / 3 = __";
let Q4 = "12 x 2 x 6 = ____";

//Define Answers

let A1 = ["6", "9", "12", "15"];
let A2 = ["12", "24", "48", "144"];
let A3 = ["3", "6", "9", "12"];
let A4 = ["48", "96", "128", "144"];

//Define Correct Answers

let correctAnswers = ["9", "144", "9", "144"];

let seconds = 60;
let timer = document.getElementById("timer");
let content = document.getElementById("content");
let answers = document.getElementById("answers");
let answer1 = document.getElementById("button1");
let answer2 = document.getElementById("button2");
let answer3 = document.getElementById("button3");
let answer4 = document.getElementById("button4");
let status = document.getElementById("status");
let questions = document.getElementById("questions");
let score = document.getElementById("scoretext");

function begin() {
  content.style = "display: none";
  quizContent.style = "block";
  timer.textContent = "Time Remaining: " + seconds;
  score = 0;
  displayQA1();
}

function displayQA1() {
  questions.textContent = Q1;
  button1.innerHTML = A1[0];
  button2.innerHTML = A1[1];
  button3.innerHTML = A1[2];
  button4.innerHTML = A1[3];

  button1.addEventListener("click", function() {
    status.textContent = "Wrong X";
    seconds = seconds - 10;
  });
  button2.addEventListener("click", function() {
    status.textContent = "Correct!!";
    displayQA2();
    score++;
  });
  button3.addEventListener("click", function() {
    status.textContent = "Wrong X";
    seconds = seconds - 10;
  });
  button4.addEventListener("click", function() {
    status.textContent = "Wrong X";
    seconds = seconds - 10;
  });
}

function displayQA2() {
  questions.textContent = Q2;
  button1.innerHTML = A2[0];
  button2.innerHTML = A2[1];
  button3.innerHTML = A2[2];
  button4.innerHTML = A2[3];

  button1.addEventListener("click", function() {
    status.textContent = "Correct!!";
    displayQA3();
    score++;
  });
  button2.addEventListener("click", function() {
    status.textContent = "Wrong X";
  });
  button3.addEventListener("click", function() {
    status.textContent = "Wrong X";
  });
  button4.addEventListener("click", function() {
    status.textContent = "Wrong X";
  });
}

function displayQA3() {
  questions.textContent = Q3;
  button1.innerHTML = A3[0];
  button2.innerHTML = A3[1];
  button3.innerHTML = A3[2];
  button4.innerHTML = A3[3];

  button1.addEventListener("click", function() {
    status.textContent = "Wrong X";
  });
  button2.addEventListener("click", function() {
    status.textContent = "Wrong X";
  });
  button3.addEventListener("click", function() {
    status.textContent = "Correct!!";
    displayQA4();
    score++;
  });
  button4.addEventListener("click", function() {
    status.textContent = "Wrong X";
  });
}

function displayQA4() {
  questions.textContent = Q4;
  button1.innerHTML = A4[0];
  button2.innerHTML = A4[1];
  button3.innerHTML = A4[2];
  button4.innerHTML = A4[3];

  button1.addEventListener("click", function() {
    status.textContent = "Wrong X";
  });
  button2.addEventListener("click", function() {
    status.textContent = "Wrong X";
  });
  button3.addEventListener("click", function() {
    status.textContent = "Wrong X";
  });
  button4.addEventListener("click", function() {
    status.textContent = "Correct!!";
    score++;
  });
}

startQuiz.addEventListener("click", function() {
  begin();
});

button1.addEventListener("click", function() {});
button2.addEventListener("click", function() {});
button3.addEventListener("click", function() {});
button4.addEventListener("click", function() {});
