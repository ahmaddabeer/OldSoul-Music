console.log("Welcome to Old Soul Music");

// Initialize variables
let songIndex = 0;
let audioElement = new Audio('./song/mp3(1).mp3');
let masterPlay = document.getElementById('masterPlay'); // Ensure ID matches in HTML
let myprogressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    { songName: "Dekha ha pahli baar...", filePath: "./song/mp3(1).mp3", coverPath: "covers/img/img1.jpeg" },
    { songName: "Dhire Dhire se", filePath: "./song/mp3(2).mp3", coverPath: "covers/img/img2.jpeg" },
    { songName: "Dil pagal ha", filePath: "./song/mp3(3).mp3", coverPath: "covers/img/img3.jpeg" },
    { songName: "Dil ha ki manta nahi", filePath: "./song/mp3(4).mp3", coverPath: "covers/img/img4.jpeg" },
    { songName: "Sab apne lea jite ha ham tare", filePath: "./song/mp3(5).mp3", coverPath: "covers/img/img5.jpeg" },
    { songName: "Ak cahra na bhot payar se dekha", filePath: "./song/mp3(10).mp3", coverPath: "covers/img/img6.jpeg" },
    { songName: "Dil kho gaya", filePath: "./song/mp3(6).mp3", coverPath: "covers/img/img7.jpeg" },
    { songName: "Kil ma sanam", filePath: "./song/mp3(7).mp3", coverPath: "covers/img/img8.jpeg" },
    { songName: "Sift to", filePath: "./song/mp3(8).mp3", coverPath: "covers/img/img9.jpeg" },
    { songName: "Dhulhan to dhula ma ban...", filePath: "./song/mp3(9).mp3", coverPath: "covers/img/img10.jpeg" },
];

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime.pause <= 0) {
       
        audioElement.pause();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); // Fix toggle issue here
        gif.style.opacity = 0;


    } else {
        audioElement.play();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 1;
       
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressBar.value = progress;
});

myprogressBar.addEventListener('change', () => {
    audioElement.currentTime = (myprogressBar.value * audioElement.duration) / 100;
});
