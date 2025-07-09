document.addEventListener('DOMContentLoaded', () => {
    // Universal music control
    const backgroundMusic = document.getElementById('backgroundMusic');
    const playPauseBtn = document.getElementById('playPauseBtn');
    let isPlaying = false; // To track music state

    // Attempt to autoplay music on the first page load
    // This is often blocked by browsers, so the button is crucial.
    if (backgroundMusic) {
        backgroundMusic.volume = 0.5; // Set a default volume
        backgroundMusic.play().then(() => {
            isPlaying = true;
            if (playPauseBtn) {
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            }
        }).catch(error => {
            console.log("Autoplay prevented:", error);
            // Optionally show a message to the user to click play
        });
    }

    // Play/Pause button functionality
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            if (isPlaying) {
                backgroundMusic.pause();
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            } else {
                backgroundMusic.play();
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            }
            isPlaying = !isPlaying;
        });
    }

    // Page 1 specific logic (index.html)
    const surpriseText = document.getElementById('surpriseText');
    const continueBtn1 = document.getElementById('continueBtn1');
    const page1Container = document.querySelector('.letter-page');

    if (page1Container) {
        setTimeout(() => {
            if (surpriseText) surpriseText.style.opacity = '1';
            setTimeout(() => {
                if (continueBtn1) continueBtn1.style.display = 'inline-block';
            }, 1000); // Button appears 1 second after "surprise" text
        }, 2000); // "Surprise" text appears 2 seconds after page load

        if (continueBtn1) {
            continueBtn1.addEventListener('click', () => {
                // Smooth transition to memories.html
                page1Container.style.opacity = '0';
                page1Container.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    window.location.href = 'memories.html';
                }, 500); // Match CSS transition duration
            });
        }
    }

    // Page 3 specific animations (celebrate.html)
    const celebrationPage = document.querySelector('.celebration-page');
    if (celebrationPage) {
        // Balloon animation
        const balloonsContainer = document.querySelector('.balloons-container');
        const colors = ['#FFC107', '#E91E63', '#9C27B0', '#2196F3', '#00BCD4', '#8BC34A']; // Vibrant colors

        function createBalloon() {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            balloon.style.left = `${Math.random() * 100}vw`; // Random horizontal position
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            balloon.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5-10 seconds
            balloon.style.animationDelay = `${Math.random() * 2}s`; // Stagger start
            balloonsContainer.appendChild(balloon);

            balloon.addEventListener('animationend', () => {
                balloon.remove(); // Remove balloon after animation
            });
        }

        setInterval(createBalloon, 1000); // Create a new balloon every second

        // Sparkle animation (simple, more can be done with canvas)
        const sparkleContainer = document.querySelector('.sparkle-container');
        function createSparkle() {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.left = `${Math.random() * 100}vw`;
            sparkle.style.top = `${Math.random() * 100}vh`;
            sparkle.style.animationDuration = `${Math.random() * 1 + 1}s`;
            sparkle.style.animationDelay = `${Math.random() * 1.5}s`;
            sparkleContainer.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 2500); // Remove after a duration
        }
        setInterval(createSparkle, 100); // More frequent for density

        // Star Fall animation (simple)
        const starFallContainer = document.querySelector('.star-fall-container');
        function createStar() {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * -50}px`; // Start above screen
            star.style.animationDuration = `${Math.random() * 4 + 3}s`; // 3-7 seconds
            star.style.animationDelay = `${Math.random() * 2}s`;
            starFallContainer.appendChild(star);
            setTimeout(() => star.remove(), 7000); // Remove after a duration
        }
        setInterval(createStar, 300); // Create new stars periodically
    }
});
