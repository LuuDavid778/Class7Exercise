var data = {
    qnum:0,
    questions:[
        {
            title:"what comes after A?",
            answer:"B",
            bgcolor:"purple"
        },
        {
            title:"Is 5 bigger than 4?",
            answer:"yes",
            bgcolor:"#DAD"
        },
        {
            title:"Are rocks alive?",
            answer:"no",
            backgroundColor:"beige"
        }
    ]
};

// var answer = "B";
// var qnum = 0;

// var questions = [
//     "What comes after A?",
//     "Is 5 bigger than 4",
//     "Are rocks alive?",
//     "Is New York in Canada",
//     "Is a tomato a fruit or vegetable"
// ];

// var answers = [
//     "B",
//     "yes",
//     "no",
//     "no"

function Start(){
    document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    

}

function CheckAnswer(){
    var myInp = document.querySelector("#searchbar").value;
    console.log(myInp);
    console.log(data.questions[data.qnum].answer)
    if(myInp === data.questions[data.qnum].answer){
        document.querySelector("#h_r").innerHTML = "<h1>Correct</h1>";

        data.qnum++;
        document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].img+"' />";
    //     if(qnum === 1){
    //         qnum++;
    //     document.querySelector("#h_q").innerText = "Is 5 bigger than 4?";
    //     answer = "yes";
    //     }
    //     else if(qnum === 2){
    //         qnum++;
    //     document.querySelector("#h_q").innerText = "Are rocks alive";
    //     answer = "no";
    // }

    } else {
        // alert("wrong!");
        document.querySelector("#h_r").innerHTML = "<h1>Incorrect</h1>";
    }
}
Start();