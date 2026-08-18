/* =========================================
   BACKGROUND MUSIC
========================================= */

const bgMusic = document.getElementById("bgMusic");


/* =========================================
   ELEMENTS
========================================= */

const intro = document.getElementById("intro");
const main = document.getElementById("main");
const finalScreen = document.getElementById("final");

const photo1 = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");
const photo3 = document.getElementById("photo3");

const nextButton = document.getElementById("nextButton");


/* =========================================
   PHOTO SYSTEM
========================================= */

let currentPhoto = 1;


/* =========================================
   START SURPRISE
========================================= */

function startSurprise() {

    // Start music after user interaction
    bgMusic.volume = 0.35;

    bgMusic.play().catch(() => {
        console.log("Music could not autoplay.");
    });

    // Hide intro
    intro.classList.add("hidden");

    // Show main experience
    setTimeout(() => {
        main.classList.remove("hidden");
    }, 700);
}


/* =========================================
   NEXT PHOTO
========================================= */

function nextPhoto() {

    if (currentPhoto === 1) {

        photo1.classList.remove("active");

        photo2.classList.add("active");

        currentPhoto = 2;

        nextButton.innerHTML = "One more? 👀";

    }

    else if (currentPhoto === 2) {

        photo2.classList.remove("active");

        photo3.classList.add("active");

        currentPhoto = 3;

        nextButton.innerHTML = "Okay... one last thing 💗";

    }

    else if (currentPhoto === 3) {

        photo3.classList.remove("active");

        nextButton.style.display = "none";

        // Hide main screen
        main.classList.add("hidden");

        // Show final screen
        setTimeout(() => {

            finalScreen.classList.remove("hidden");

        }, 800);

    }
}


/* =========================================
   STAR GENERATOR
========================================= */

function createStars(container, amount) {

    for (let i = 0; i < amount; i++) {

        const star = document.createElement("div");

        star.classList.add("star");

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDuration =
            (1 + Math.random() * 3) + "s";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        container.appendChild(star);
    }
}


/* =========================================
   INTRO STARS
========================================= */

const stars = document.querySelector(".stars");

if (stars) {
    createStars(stars, 80);
}


/* =========================================
   FINAL STARS
========================================= */

const finalStars =
    document.querySelector(".final-stars");

if (finalStars) {
    createStars(finalStars, 100);
}
