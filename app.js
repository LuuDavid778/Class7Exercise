var data= {
    qnum:0,
    questions:[
        {
            title:"what comes after A?",
            answer:'B',
            bgcolor:"pink"
        },
        {
            title: "Is 5 bigger than 4?",
            answer:'yes', 
            bgcolor:"green"
        },
        {
            title:  "what's 9 + 10?",
            answer:'19' ,
            bgcolor:"pink"
        },
        {title: "What is PI?",
            answer:'3.14',
            bgcolor:"#dad"
        },
        {title:    "Who let the dog's out?",
        answer:'ME',
        bgcolor:"yellow"
    },
    {title:    "THE END",
    bgcolor:"white"
}
    ]
};

/*var questions = [
    "What comes after A?",
    "Is 5 bigger than 4?",
    "what's 9 + 10?",
    "What is PI?",
    "Who let the dog's out?",
    "THE END"
];

var answers = [
    "B",
    "yes",
    "19",
    "3.14",
    "ME"

];*/
console.log(data);

function Start(){
    document.querySelector(".text").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
}

function CheckAnswer(){
var myInp = document.querySelector("#answer").value;
console.log(myInp);
if (myInp === data.questions[data.qnum].answer){
    document.querySelector("#h_r").innerHTML = "<h1>Correct!</h1>";

    //if (qnum === 1){//
        data.qnum++;
   document.querySelector(".text").innerText =  data.questions[data.qnum].title;
   document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
/* answer = "yes";//

  } else if (qnum === 2){
        qnum++;
document.querySelector(".text").innerText = "what's 9 + 10?";
answer = "19";
    }*/


} else {
    document.querySelector("#h_r").innerText = "<h1>Wrong!</h1>";
}

}