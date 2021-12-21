function disappear(element){
    element.remove();
}

function logIn(element){
    if(element.innerHTML == "Login"){
        element.innerHTML = "Logout";
    }
    else{
        element.innerHTML = "Login";
    }
}

function addLike(element){
    var count = element.firstElementChild.innerHTML;
    count++;
    element.firstElementChild.innerHTML = count;
}