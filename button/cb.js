var circle_state = {
    state: 1
} 



function ChangeColour() {
    if (circle_state.state === 1) {
        document.getElementById("circlebutton").style.backgroundColor = "lightcoral";
        circle_state.state = 2;
    } else if (circle_state.state === 2) {
        document.getElementById("circlebutton").style.backgroundColor = "lightgray"; 
        circle_state.state = 1 
    }

    }
