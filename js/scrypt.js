let cancion=document.getElementById("cancion");
let play_pause_btn=document.getElementById("play_pause_btn");
let cover=document.getElementById("cover");
let controls=document.querySelector(".controls");
let play_btn = document.getElementById("play-btn");
let pause_btn = document.getElementById("pause-btn");
play_btn.addEventListener("click", () =>{
    cancion.play();
    cover.style.animationPlayState ="running";
});


let count=0;
function play_pause(){
    if(count==0){
        count=1;
        cancion.play();
        cover.style.animationPlayState ="running";
        controls.style.animationPlayState ="running";

    }
    else{
        count=0;
        cancion.pause();
        cover.style.animationPlayState ="paused";
        controls.style.animationPlayState ="paused";
    }

}
function stop(){
    play_pause();
    cancion.pause()
    cancion.currentTime=0;
    play_pause_btn.innerHTML="⬛ ";
}
