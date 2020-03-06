var data = {
  qnum: 0,
  questions: [
    {
      title: "What is a dog?",
      answer: "mammal",
      bgcolor: "yellow"
    },
    {
      title: "What is an ant?",
      answer: "insect",
      bgcolor: "brown"
    },
    {
      title: "What is a shark?",
      answer: "fish",
      bgcolor: "blue"
    },
    {
      title: "Are apples considered fruits?",
      answer: "yes",
      bgcolor: "coral"
    },
    {
      title: "Are potatos considered fruits?",
      answer: "no",
      bgcolor: "brown"
    },
    {
      title: "What country has the biggest population?",
      answer: "China",
      bgcolor: "red"
    }
  ]
};
 var qnum = 0;

function start() {
  document.querySelector("#app__question__h1").innerText =
    data.questions[data.qnum].title;
  document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
}

function CheckAnswer() {
  var myinp = document.querySelector("#useranswer").value;

  if (myinp === data.questions[data.qnum].answer) {
    document.querySelector("#app__results").innerHTML = "<h1>Correct!</h1>";
    data.qnum++;
    document.querySelector("#app__question__h1").innerText =
      data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
  } else {                                     
    document.querySelector("#app__results").innerHTML = "<h1>Incorrect!</h1>";
    ChangeHealth()
    if (health_state.width === 0) {
      alert("You ded!");
    }
    // alert("Wrong!")
  } 
}

start();
