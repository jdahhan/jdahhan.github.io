const button = document.getElementById("button");
const background = document.querySelector("body");
const script = ["change color", "ok stop", "stop it", "stop clicking", "eh"];
let i = 0;

let r = Math.round(Math.random() * 255)
let g = Math.round(Math.random() * 255)
let b = Math.round(Math.random() * 255)
background.style.backgroundColor = "rgb(" + String(r) + "," + String(g) + ',' + String(b) + ")";

button.addEventListener('mousedown', mdown);
button.addEventListener('mouseleave', mleave)
button.addEventListener('mouseenter', menter)

function mleave(){
    if (i != 0){
        button.innerHTML = "come back"
    }
}

function menter(){
    button.innerHTML = script[i]
}

function mdown(){
    let r = Math.round(Math.random() * 255)
    let g = Math.round(Math.random() * 255)
    let b = Math.round(Math.random() * 255)
    background.style.backgroundColor = "rgb(" + String(r) + "," + String(g) + ',' + String(b) + ")";
    i = (i + 1) % script.length;
    button.innerHTML = script[i];
    let x = Math.round(200 * Math.random()) * Math.pow(-1,Math.round(Math.random()))
    let y = Math.round(200 * Math.random()) * Math.pow(-1,Math.round(Math.random()))
    console.log(x)
    console.log(y)
    if (i != 0){
        button.style.top = y.toString() + "px";
        button.style.left = x.toString() +"px";
    }
    else{
        button.style.top = "0px";
        button.style.left = "0px";
    }
}
