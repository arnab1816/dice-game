document.querySelector(".play-btn").addEventListener("click",function () {
    let firstContainer = document.querySelector(".first-container");
    if(!firstContainer.classList.contains("hide-container")){
        firstContainer.classList.add("hide-container");
    }
    let secondContainer = document.querySelector(".second-container");
    if(secondContainer.classList.contains("hide-container")){
        secondContainer.classList.remove("hide-container");
    }
    let firstRandomNumber = Math.floor(Math.random()*6)+1;
    document.querySelector(".first-dice-img").setAttribute("src",`Images/Dice-${firstRandomNumber}.png`);
    let secondRandomNumber = Math.floor(Math.random()*6)+1;
    document.querySelector(".second-dice-img").setAttribute("src",`Images/Dice-${secondRandomNumber}.png`);
    if(firstRandomNumber==secondRandomNumber){
        document.querySelector(".heading").innerText = "Draw";
    }
    else if(firstRandomNumber>secondRandomNumber){
        document.querySelector(".heading").innerText = "Congratulation! You won";
    }
    else{
        document.querySelector(".heading").innerText = "Sorry! Computer won";
    }
    document.querySelector(".play-btn").innerHTML = "Roll me again";
});