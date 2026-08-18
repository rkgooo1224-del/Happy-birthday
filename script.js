// ===============================
// CREATE STARS
// ===============================

for (let i = 0; i < 70; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    document.body.appendChild(star);
}


// ===============================
// FLOATING HEARTS
// ===============================

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    const hearts = [
        "💗",
        "💕",
        "💖",
        "💓",
        "🫶",
        "✨"
    ];

    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);
}

setInterval(createHeart, 700);


// ===============================
// START SURPRISE
// ===============================

function startSurprise() {

    document
        .getElementById("intro")
        .classList.add("hidden");


    setTimeout(() => {

        document
            .getElementById("photoScreen")
            .classList.remove("hidden");


        setTimeout(() => {

            document
                .getElementById("photoCard")
                .classList.add("show");

        }, 400);

    }, 800);
}


// ===============================
// PHOTOS
// ===============================

const photos = [

    {
        src: "photo1.jpg",

        caption:
            "Okay... maybe one photo first 🙃"
    },

    {
        src: "photo2.jpg",

        caption:
            "Fine... here's another one 🫶"
    },

    {
        src: "photo3.jpg",

        caption:
            "You really wanted more, didn't you? 😂"
    }

];


let currentPhoto = 0;


// ===============================
// NEXT PHOTO
// ===============================

function nextPhoto() {

    currentPhoto++;


    // All photos finished
    if (
        currentPhoto >= photos.length
    ) {

        showFinal();

        return;
    }


    const card =
        document.getElementById(
            "photoCard"
        );


    card.classList.remove("show");


    setTimeout(() => {

        card
            .querySelector("img")
            .src =
            photos[currentPhoto].src;


        card
            .querySelector(".photo-caption")
            .textContent =
            photos[currentPhoto].caption;


        card.classList.add("show");

    }, 500);
}


// ===============================
// FINAL SCREEN
// ===============================

function showFinal() {

    document
        .getElementById("photoScreen")
        .classList.add("hidden");


    setTimeout(() => {

        document
            .getElementById("finalScreen")
            .classList.remove("hidden");


        setTimeout(() => {

            document
                .getElementById("message")
                .classList.add("show");


            createConfetti();

        }, 700);

    }, 900);
}


// ===============================
// CONFETTI
// ===============================

function createConfetti() {

    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const piece =
            document.createElement("div");


        piece.className =
            "confetti";


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.animationDuration =
            (3 + Math.random() * 4) + "s";


        piece.style.animationDelay =
            Math.random() * 2 + "s";


        piece.style.background =
            `hsl(
                ${Math.random() * 360},
                90%,
                65%
            )`;


        piece.style.transform =
            `rotate(
                ${Math.random() * 360}deg
            )`;


        document.body.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 8000);
    }
      }
