var circle_state = {
    backgroundColor: "aquamarine"

}


function ChangeColor() {
    
    console.log(circle_state.backgroundColor);

    if(circle_state.backgroundColor === "aquamarine") {
        circle_state.backgroundColor = "blue";
 

    }else if (circle_state.backgroundColor === "blue"){
        circle_state.backgroundColor = "aquamarine";
  
    }

    document.querySelector("#circle").style.backgroundColor = circle_state.backgroundColor;
    console.log(circle_state.backgroundColor)

}


