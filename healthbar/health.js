var health_state = {
    width: 300,
    health: 500

}

function ChangeHealth() {
    //modify the state- decrease the health
    health_state.width-=30;
    //same as health_state.width = health_state.width-20;
    // document.querySelector(".health_bar").style.width = "200px";
    console.log(health_state.width);

    //modify the UI's ASSOCIATED ATTRIBUTE
    document.querySelector(".health_bar").style.width = health_state.width + "px";


}