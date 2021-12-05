let counter = 1
var slide = document.getElementById('gridcont')
var container = document.getElementById("outercontainer")

//buttons

var up = document.getElementById("up")
var down = document.getElementById("down")

slide.style.transition = "none"
slide.style.transform = "translateY(" + (counter * -33) + "vh)"

up.addEventListener('click', ()=>{
    if (counter > 0){
        counter--
        slide.style.transition = "transform 0.4s ease-in-out"
        slide.style.transform = "translateY(" + (counter *  -33) + "vh)"
    }
    console.log(counter)
});

down.addEventListener('click', ()=>{
    if (counter < 6){
        counter++
        slide.style.transition = "transform 0.4s ease-in-out"
        slide.style.transform = "translateY(" + (counter * -33) + "vh)"
    }
    console.log(counter)
});

slide.addEventListener("transitionend", ()=>{
    if (counter == 0){
        counter = 5
        slide.style.transition = "none"
        slide.style.transform = "translateY(" + (counter * -33) + "vh)"
    }
    if (counter == 6){
        counter = 1
        slide.style.transition = "none"
        slide.style.transform = "translateY(" + (counter * -33) + "vh)"
    }
})