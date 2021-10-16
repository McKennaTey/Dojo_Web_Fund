console.log("page loaded...");

function playVideo(dogvid) {
    dogvid.play();
}

function pauseVideo(dogvid) {
    dogvid.pause();
    dogvid.currentTime =0
}