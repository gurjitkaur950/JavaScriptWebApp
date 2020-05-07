/*Gurjit  */

var audio = document.getElementById("penguinAudio");

var h2 = document.getElementById('clock');


var currentTime = setInterval(function () {
    var date = new Date();

    var hours = (12 - (date.getHours()));


    var minutes = date.getMinutes();

    var seconds = date.getSeconds();

    var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';




    if (hours < 0) {
        hours = hours * -1;
    } else if (hours == 00) {
        hours = 12;
    } else {
        hours = date.getHours();
    }

    var hrs = (hours < 10) ? "0" + hours : hours;
    var mins = (minutes < 10) ? "0" + minutes : minutes;
    var secs = (seconds < 10) ? "0" + seconds : seconds;

    h2.textContent = hrs + ":" + mins + ":" + secs + "" + ampm;

}, 1000);




function Menu(m) {

    if (m == 'h') {
        var select = document.getElementById('alarmhrs');
        var input = 12;
    } else if (m == 'm') {
        var select = document.getElementById('alarmmins');
        var input = 59;
    } else {
        var select = document.getElementById('alarmsecs');
        var input = 59;
    }
    for (i = 1; i <= input; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);

    }
}
Menu('h');
Menu('m');
Menu('s');


function alarmSet() {

    var hr = document.getElementById('alarmhrs');

    var min = document.getElementById('alarmmins');

    var sec = document.getElementById('alarmsecs');

    var ap = document.getElementById('ampm');


    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;
    var selectedAP = ap.options[ap.selectedIndex].value;


    var hrs = (selectedHour < 10) ? "0" + selectedHour : selectedHour;
    var mins = (selectedMin < 10) ? "0" + selectedMin : selectedMin;
    var secs = (selectedSec < 10) ? "0" + selectedSec : selectedSec;


    var alarmTime = hrs + ":" + mins + ":" + secs + selectedAP;
    console.log('alarmTime:' + alarmTime);

    document.getElementById('alarmhrs').disabled = true;
    document.getElementById('alarmmins').disabled = true;
    document.getElementById('alarmsecs').disabled = true;
    document.getElementById('ampm').disabled = true;



    var h2 = document.getElementById('clock');

    /*function to calcutate the current time 
    then compare it to the alarmtime and play a sound when they are equal
    */

    setInterval(function () {

        var date = new Date();

        var hours = (12 - (date.getHours()));


        var minutes = date.getMinutes();

        var seconds = date.getSeconds();

        var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';




        if (hours < 0) {
            hours = hours * -1;
        } else if (hours == 00) {
            hours = 12;
        } else {
            hours = date.getHours();
        }

        var hrs = (hours < 10) ? "0" + hours : hours;
        var mins = (minutes < 10) ? "0" + minutes : minutes;
        var secs = (seconds < 10) ? "0" + seconds : seconds;
        var currentTime = h2.textContent = hrs + ":" + mins + ":" + secs + "" + ampm;


        if (alarmTime == currentTime) {

            audio.loop = true;
            audio.load();
            var playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(function () {

                }).catch(function () {
                    console.log('Play function has an error.');
                });
            }

        }



    }, 1000);

}


function alarmClear() {

    document.getElementById('alarmhrs').disabled = false;
    document.getElementById('alarmmins').disabled = false;
    document.getElementById('alarmsecs').disabled = false;
    document.getElementById('ampm').disabled = false;
    audio.pause();
}
