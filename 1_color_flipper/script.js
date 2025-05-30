function colorChange(){
    //USING RANDOM RGB COLORS

    let randomRed=Math.floor(Math.random()*256);
    let randomGreen=Math.floor(Math.random()*256);
    let randomBlue=Math.floor(Math.random()*256);


    document.querySelector("body").style.backgroundColor =`rgb(${randomRed},${randomGreen},${randomBlue})` ;
    document.querySelector("#color-change-btn").style.backgroundColor =`rgb(${randomRed},${randomGreen},${randomBlue})` ;

}