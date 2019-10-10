function moveHands(){
    with (new Date()){
        h = 30 *((getHours() % 12) + getMinutes() / 60);
        m = 6 * getMinutes();
        s = 6 * getSeconds();
        document.getElementById("seconds").style.cssText = 
        "-webkit-transform:rotate(" + s + "deg);";
        document.getElementById("minutes").style.cssText =
        "-webkit-transform:rotate(" + m + "deg);";
        document.getElementById("hours").style.cssText =
        "-webkit-transform:rotate(" + h + "deg);";
        setTimeout(moveHands, 1000);
    }
}
window.onload = moveHands;
function updateClock(){
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    var timeOfDay = (currentHours < 12) ? "AM" : "PM"
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours === 0) ? 12 : currentHours;
    var currentTimeString = currentHours + ':' + currentMinutes + ':' + currentSeconds + ' ' + timeOfDay;
    document.getElementById("digital").innerHTML = currentTimeString;
}

setInterval(()=>{updateClock()}, 1000)