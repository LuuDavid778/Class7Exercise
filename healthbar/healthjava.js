var health_state = {

    width:100

}


function ChangeHealth() {
if(health_state.width > 0) {
    health_state.width = health_state.width - 10;
  document.getElementById("hpbar__bar").style.width = health_state.width + "%";
    console.log(health_state.width)
}

    
}


