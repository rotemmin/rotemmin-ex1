const balloonContainer = document.querySelector('.balloon-container');
const startButton = document.getElementById('start-button');

let balloonInterval = null;
let isPlaying = false;

startButton.addEventListener('click', () => {
    if (!isPlaying) {
        balloonInterval = setInterval(createBalloon, 1000);
        startButton.textContent = 'Stop!';
        isPlaying = true;
    } else {
        clearInterval(balloonInterval);
        startButton.textContent = 'Surprise!';
        isPlaying = false;
        
        const balloons = document.querySelectorAll('.balloon');
        balloons.forEach(balloon => balloon.remove());
    }
});

function createBalloon() {
    const balloon = document.createElement('div'); 
    balloon.classList.add('balloon'); 

    balloon.style.left = Math.random() * window.innerWidth + "px";
    balloon.style.backgroundColor = getRandomColor(); 
    balloon.style.animation = `floatUp ${Math.random() * 2 + 3}s linear`; 

    balloonContainer.appendChild(balloon); 

    balloon.addEventListener('animationend', () => {
        balloon.remove();
    });
}

function getRandomColor() {
    const colors = ["#80aaec", "#f5e6e4", "#e38a95", "#fcd2d6", "#e06476", "#95d6f5"];
    return colors[Math.floor(Math.random() * colors.length)];
}