// 

// function resizeVideo(){
//     console.log("works",window.innerWidth, window.innerHeight);
//     // console.log(window.innerWidth / window.innerHeight,"aspect");
//     if(window.innerWidth > window.innerHeight){
//         video.height = 0.9 * window.innerHeight;
//         console.log("--w",video.width);
//         video.width = 1.778 * video.height;
//     }
//     else{
//         video.width = 0.9 * window.innerwidth;
//         console.log("-w",video.width);
//         video.height = 0.562 * video.width;
//     }
//     console.log("video",video.width, video.height, video.width/video.height);
//     video.play();
// }

// window.addEventListener('resize',resizeVideo);
// resizeVideo();

// // console.log(video.width);







function goToTimeframe(n) {
    video.currentTime = n;
    currentAudio.currentTime = n;
}

// function clickHandle(n){
//     buttons = document.querySelectorAll('.song');
//         buttons.forEach(item => {
//             item.classList.remove('highlight');
//         });
//     buttons[n-1].classList.add('highlight');
// }







//-------------play and pause------------------------------------------------
var video = document.getElementById("video");
var currentAudio = document.getElementById('audio1');
var playButton = document.querySelector('#playPauseIcon');
function pauseAndPlayVideo() {
    console.log('hello---');
    if (video.paused) {
        playButton.classList.remove('ToPlay');
    }
    else {
        playButton.classList.add('ToPlay');
    }

    if (video.paused) {
        video.play();
        currentAudio.play();
    }
    else {
        video.pause();
        currentAudio.pause();
    }
    console.log('clicked', video.currentTime);
}


video.addEventListener('click', () => {
    pauseAndPlayVideo();
})

playButton.addEventListener('click', () => {
    pauseAndPlayVideo();
})
//---------------------------------------------------------------



//to change the pause icon to play when the video ends
video.addEventListener('ended', () => {
    playButton.classList.add('ToPlay');
})

//-------------------------------------------------------------------------



//audio icon animation
var speakerIconLineStroke = document.getElementById("line");
var speakerIcon = document.getElementById('speakerIcon');
speakerIcon.addEventListener('click', () => {
    if (currentAudio.muted) {
        speakerIconLineStroke.classList.remove('musicOff');
    }
    else {
        speakerIconLineStroke.classList.add('musicOff');
    }
    currentAudio.muted = !currentAudio.muted;
});
//-----------------------------------------------------------------------------


//language panel open
var settingsIcon = document.getElementById('settingsIcon');
var panelOpen = false;
var audioListContainer = document.querySelector('.audioList');
settingsIcon.addEventListener('click', () => {
    if (!panelOpen) {
        audioListContainer.classList.add('audioListOpen');
        panelOpen = true;
    }
    else {
        audioListContainer.classList.remove('audioListOpen');
        panelOpen = false;
    }
})

//language change
var languages = document.querySelectorAll('.audioList>button');
function languageChange(n) {
    console.log(languages);
    languages.forEach(element => {
        element.classList.remove('currentLanguage');
    });
    languages[n - 1].classList.add('currentLanguage');
    changeAudio(n);
}


function changeAudio(n) {
    x = currentAudio.muted;
    if (video.paused) {
        currentAudio = document.getElementById('audio' + (n).toString());
        currentAudio.muted = x
        currentAudio.currentTime = video.currentTime;
        return
    }
    video.pause();
    currentAudio.pause();
    currentAudio = document.getElementById('audio' + (n).toString());
    currentAudio.currentTime = video.currentTime;
    video.play();
    currentAudio.play();
    if (x) {
        currentAudio.muted = x;
        return
    }



}


//------------------------------------------------------------------------

//playback timer
var timer = document.querySelector('.timer span');
var playLine = document.getElementById('playLine');
function updateTimer() {
    // console.log(timer)
    setInterval(() => {
        timerValue = Math.floor(video.currentTime);
        if (timerValue / 10 < 1)
            timerString = '0' + timerValue.toString()
        else
            timerString = timerValue.toString()
        timer.innerHTML = '00:' + timerString;

        playLine.style.width = ((video.currentTime / 30) * 100).toString() + '%';
        console.log(playLine.style.width);
    }, 50)
}
updateTimer();