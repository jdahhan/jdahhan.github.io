var request = new XMLHttpRequest();
request.open("GET","characters.json", false);
request.send(null);
console.log(request.responseText);
var jsonData = JSON.parse(request.responseText);

let counter = 1
var slide = document.getElementById('gridcont')
var container = document.getElementById("outercontainer")
var caption = document.getElementById("captioncontainer")
let clicked = false

var items = document.querySelectorAll(".item")

//caption contents
var text = document.getElementById("text")
var portrait = document.getElementById("portrait")
var portrait2 = document.getElementById("portrait2")
var video = document.getElementById("video")

for (let i = 0; i < 25 ; i++){
    let allclass = document.getElementsByClassName(String(i+1))
    console.log(jsonData[i])
    for (let j = 0 ; j < allclass.length ; j++){
        allclass[j].innerHTML = jsonData[i].portrait
        allclass[j].addEventListener("click", ()=>{
            if (!clicked){
                console.log("CLICKED")
                caption.style.left = "21vw"
                caption.opacity = 0
                text.innerHTML = jsonData[i].desc;
                portrait.innerHTML = jsonData[i].portrait;
                portrait2.innerHTML = jsonData[i].player;
                video.innerHTML = jsonData[i].vid
                clicked = true
                caption.style.opacity = "1"
            }
        })
    }
}


//buttons

var up = document.getElementById("up")
var down = document.getElementById("down")
var X = document.getElementById("X")


slide.style.transition = "none"
slide.style.transform = "translateY(" + ((counter * -33) - 1) + "vh)"

up.addEventListener('click', ()=>{
    if (counter > 0){
        counter--
        slide.style.transition = "transform 0.4s ease-in-out"
        slide.style.transform = "translateY(" + ((counter *  -33) - 1) + "vh)"
    }
    console.log(counter)
});

down.addEventListener('click', ()=>{
    if (counter < 6){
        counter++
        slide.style.transition = "transform 0.4s ease-in-out"
        slide.style.transform = "translateY(" + ((counter * -33) - 1) + "vh)"
    }
    console.log(counter)
});

slide.addEventListener("transitionend", ()=>{
    if (counter == 0){
        counter = 5
        slide.style.transition = "none"
        slide.style.transform = "translateY(" + (1 +(counter * -33) - 1) + "vh)"
    }
    if (counter == 6){
        counter = 1
        slide.style.transition = "none"
        slide.style.transform = "translateY(" + ((counter * -33) - 1) + "vh)"
    }
})

X.addEventListener("click", ()=>{
    if (clicked){
        console.log("EXITED")
        caption.style.opacity = 0    
    }
})

caption.addEventListener("transitionend", ()=>{
    if (caption.style.opacity == 0){
        caption.style.left = "-210vw"
        clicked = false
        console.log("END1")
    }
    else{
        caption.style.left = "21vw"
        console.log("END2")
    }
})
