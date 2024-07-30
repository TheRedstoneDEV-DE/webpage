const audio_player = document.getElementsByClassName("audio-js");
const button = document.getElementsByClassName("control-js");
const progress = document.getElementsByClassName("progress-js");
const time = document.getElementsByClassName("time-js");
const time_left = document.getElementsByClassName("time-left-js");
var state = false;
function play_pause(i){
    if (state){
        audio_player[i].pause();
        button[i].innerHTML="";
    }else{
        audio_player[i].play();
        button[i].innerHTML="";
        time_left[i].innerHTML=audio_player[i].duration.toHHMMSS();
    }
    state = !state;
}


Number.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

for (let i=0; i<document.getElementsByClassName("audio-js").length; i++){
    audio_player[i].addEventListener("timeupdate", () => {
        const percent = (audio_player[i].currentTime / audio_player[i].duration) * 100;
        progress[i].value = percent;
        time[i].innerHTML=audio_player[i].currentTime.toHHMMSS();
    });
    progress[i].addEventListener("change", () => {
        const time = (progress[i].value / 100)*audio_player[i].duration;
        audio_player[i].currentTime = time;
    });
}