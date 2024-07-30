const audio_player = document.getElementById('audio1');
const button = document.getElementById('control1');
const progress = document.getElementById('progress1');
var state = false;
function play_pause(){
    if (state){
        audio_player.pause();
        button.innerHTML="";
    }else{
        audio_player.play();
        button.innerHTML="";
    }
    state = !state;
}
audio_player.addEventListener("timeupdate", () => {
    const percent = (audio_player.currentTime / audio_player.duration) * 100;
    progress.style="width: "+percent+"%;";
});