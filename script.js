// ========================================
// BIRTHDAY WEBSITE JAVASCRIPT
// ========================================


// ----------------------------------------
// VARIABLES
// ----------------------------------------

let currentPhoto = 1;

const totalPhotos = 3;

const music =
    document.getElementById("bgMusic");

const intro =
    document.getElementById("intro");

const main =
    document.getElementById("main");

const finalScreen =
    document.getElementById("final");

const nextButton =
    document.getElementById("nextButton");


// ----------------------------------------
// START SURPRISE
// ----------------------------------------

function startSurprise() {

    // Start background music
    music.volume = 0.4;

    music.play().catch(() => {
        console.log("Music could not start.");
    });


    // Hide intro
    intro.classList.add("hidden");


    // Show main experience
    setTimeout(() => {

        main.classList.remove("hidden");

        createStars();
        createFloatingHearts();

    }, 800);
}


// ----------------------------------------
// NEXT PHOTO
// ----------------------------------------

function nextPhoto() {

    // Current photo
    const current =
        document.getElementById(
            "photo" + currentPhoto
        );


    // Hide current photo
    current.classList.remove("active");


    // Move to next photo
    currentPhoto++;


    // If all 3 photos are finished
    if (currentPhoto > totalPhotos) {

        setTimeout(() => {

            showFinalScreen();

        }, 800);

        return;
    }


    // Get next photo
    const next =
        document.getElementById(
            "photo" + currentPhoto
        );


    // Show next photo
    setTimeout(() => {

        next.classList.add("active");

    }, 500);


    // Change button text

    if (currentPhoto === 2) {

        nextButton.textContent =
            "One more? 👀";

    }

    else if (currentPhoto === 3) {

        nextButton.textContent =
            "Okay... last one 💗";

    }
}


// ----------------------------------------
// FINAL SCREEN
// ----------------------------------------

function showFinalScreen() {

    main.classList.add("hidden");


    setTimeout(() => {

        finalScreen.classList.remove("hidden");


        // Confetti
        createConfetti();


        // Extra hearts
        createFinalHearts();


    }, 900);
}


// ----------------------------------------
// CREATE STARS
// ----------------------------------------

function createStars() {

    const container =
        document.querySelector(".stars");


    if (!container) return;


    for (let i = 0; i < 80; i++) {

        const star =
            document.createElement("span");


        star.className = "star";


        star.style.left =
            Math.random() * 100 + "%";


        star.style.top =
            Math.random() * 100 + "%";


        star.style.animationDelay =
            Math.random() * 4 + "s";


        star.style.animationDuration =
            (2 + Math.random() * 3) + "s";


        container.appendChild(star);
    }
}


// ----------------------------------------
// FLOATING HEARTS
// ----------------------------------------

function createFloatingHearts() {

    setInterval(() => {

        const heart =
            document.createElement("div");


        heart.className =
            "floating-heart";


        const heartTypes = [
            "💗",
            "💕",
            "💖",
            "💓",
            "💞",
            "✨"
        ];


        heart.textContent =
            heartTypes[
                Math.floor(
                    Math.random() *
                    heartTypes.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.fontSize =
            (14 + Math.random() * 18) + "px";


        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";


        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 10000);

    }, 800);
}


// ----------------------------------------
// CONFETTI
// ----------------------------------------

function createConfetti() {

    const pieces = [
        "🎉",
        "✨",
        "💗",
        "💕",
        "🌸",
        "⭐",
        "🎊"
    ];


    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");


        piece.className =
            "confetti";


        piece.textContent =
            pieces[
                Math.floor(
                    Math.random() *
                    pieces.length
                )
            ];


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.top =
            (-10 - Math.random() * 30) + "%";


        piece.style.fontSize =
            (12 + Math.random() * 20) + "px";


        piece.style.animationDuration =
            (3 + Math.random() * 4) + "s";


        piece.style.animationDelay =
            Math.random() * 2 + "s";


        document.body.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 8000);
    }
}


// ----------------------------------------
// FINAL HEART EXPLOSION
// ----------------------------------------

function createFinalHearts() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");


            heart.className =
                "final-heart";


            heart.textContent = "💗";


            heart.style.left =
                (40 + Math.random() * 20) + "%";


            heart.style.top =
                (45 + Math.random() * 10) + "%";


            document.body.appendChild(heart);


            setTimeout(() => {

                heart.remove();

            }, 3000);

        }, i * 100);

    }
}
