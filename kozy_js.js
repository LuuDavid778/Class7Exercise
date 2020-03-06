//if(???)

/**
  if what the user type is the same as the same as the answer I want, then tell them it's correct
 */

// var answer = "B"; //answer for the first quetion
// var qnum = 0; //question number: using 0 because the array starts from 0

var data = { //packing information "Suitcase"!!!
    qnum:0, //question number
    questions:[  //list out the questions and answers
        {
            title: "What comes after A?",
            answer: "B",
            bgcolor: "purple",
            img:"http://placekitten.com/100/100",
        },
        {
            title: "Is 5 bigger than 4?",
            answer: "Yes",
            bgcolor: "yellow",
            img:"http://placekitten.com/200/200",
        },
        {
            title: "What is the color of a banana?",
            answer: "Yellow",
            bgcolor: "red",
            img:"http://placekitten.com/300/300",
        }
    ]
};

console.log(data, window);

// var questions = [ //listing questions
//     "What domes after A?", //0 index
//     "Is bigger than 4?", //1 index
//     "What is the color of a banana?", //2 index
//     "what is the next season of spring?"

// ];

// var answers = [
//     "B",
//     "Yes",
//     "Yellow",
//     "Summer"
// ];

// var bgcolor = [
//     "purple",
//     "yellow",
//     "red",
//     "blue"
// ]

// var imgs = [
//     "http://placekitten.com/100/100",
//     "http://placekitten.com/200/200",
//     "http://placekitten.com/300/300",
// ]

function Start() { //repeat the CheckAnswer function
    document.querySelector("#h_q").innerText = data.questions[data.qnum].title; // change to the next question 
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor; // grab the backgoundcolor and give it with the background color in the suitcase
    document.querySelector("#h_r").innerHTML = "<img src = '"+data.questions[data.qnum].img+"' />"; //get the h_r and change it into the image that is in the suitcase
}

 function CheckAnswer() { 
     var myInp = document.querySelector("#answer").value;
     console.log(myInp);
     console.log(data.questions[data.qnum].answer)
     if(myInp === data.questions[data.qnum].answer) { //if the input is the same as the quesrtion number and the answer
        document.querySelector("#h_r").innerHTML ="<h1>Correct!</h1>";  //Get #h_r and changes into "Corrrect"

        data.qnum++; //increase number
        document.querySelector("#h_q").innerText = data.questions[data.qnum].title; // change to the next question that is in the suitcase
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor; // change to the background color that is in the suitcase
        document.querySelector("#h_r").innerHTML = "<img src = '"+data.questions[data.qnum].img+"' />"; //get the h_r and change it into the image that is in the suitcase

        
        // if(qnum === 1) {
        //     qnum++;
        //     document.querySelector("#h_q").innerText = "Is 5 bigger then 4?"; //display the second question
        //     answer = "Yes";
        // } else if (qnum === 2){
        //     qnum++;
        //     document.querySelector("#h_q").innerText = "What is the color of a banana?"; //display the third question
        //     answer = "Yellow";
        // }

     } else {
        // alert("WRONG!");
        document.querySelector("#h_r").innerText ="<h1>Wrong!</h1>";
        ChangeHealth();
       
     }
 }
 Start();