let esqueleto="off";
let esqueletoStop = document.getElementById("esqueletoquieto");
let botonAudio = new Audio ("SOUNDS/audio.mp3")
let botonSonido = new Audio ("SOUNDS/botonbailar.mp3")

function bailar(){
    if(esqueleto == "off"){
        esqueleto = "on";
        esqueletoStop.classList.add("on")
        esqueletoStop.addEventListener('click', ()=>{
            botonSonido.play();
        })
        esqueletoStop.addEventListener('click', ()=>{
            botonAudio.play();
        })
    } else{ 
        esqueleto = "off"
        esqueletoStop.classList.remove("on")
        esqueletoStop.addEventListener('click', ()=>{
            botonSonido.pause(0);
            botonAudio.pause(0);
        })
        

    }
}