var left = document.getElementById("L");
var right = document.getElementById("R");
var content = document.getElementById("content");
var hidden = document.getElementById("var")
if (hidden.innerHTML == "-1"){
    var i = 0
}
hidden.innerHTML = String(i+1)

var script = ["Hey guy, <br> I am planning on making a website about my favorite video game, Super Smash Brothers Melee for the Nintendo Gamecube. <br> <img src = 'melee.jpg'><br> This game has turned 20 just last month and still has an incredibly strong competitive community. I plan on making a website as a tribute to the game, showcasing top players for every character. Clicking on a character will show a video showcasing their best moments, and the website will have another page explaining the website's purpose and potentially highlight top players (if I have time).", "The background will be a 3d sketch inspired by the game itself. <br><img src = 'menu.jpg'>", "SLIDE DECK:<br><img src = 'SLIDE1.png'><br>", "SLIDE DECK:<br><img src = 'SLIDE2.png'>", "thakn you,"]

content.innerHTML = script[i]

left.onclick = () =>{
    if (i > 0){
        i -= 1
    }else if (i == 0){
    }
    content.innerHTML = script[i]
    hidden.innerHTML = String(i+1)
};

right.onclick = () =>{
    console.log(i)
    if (i < script.length -1){
        i += 1
    }else if (i == script.length - 1){
    }
    content.innerHTML = script[i]
    hidden.innerHTML = String(i+1)
};