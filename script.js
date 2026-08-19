/* =====================================================
   A LITTLE BIRTHDAY ADVENTURE
   ===================================================== */


/* =====================================================
   MUSIC
===================================================== */

const bgMusic = document.getElementById("bgMusic");

function startMusic() {
    bgMusic.volume = 0.35;

    bgMusic.play().catch(() => {
        console.log("Music needs a user interaction.");
    });
}


/* =====================================================
   MISSIONS
===================================================== */

const mission1 = document.getElementById("mission1");
const mission2 = document.getElementById("mission2");
const mission3 = document.getElementById("mission3");
const mission4 = document.getElementById("mission4");
const finalGift = document.getElementById("finalGift");
const birthday = document.getElementById("birthday");


function showMission(mission) {

    document.querySelectorAll(".mission").forEach(section => {
        section.classList.remove("active");
    });

    mission.classList.add("active");
}


/* =====================================================
   MISSION 01
   STAR SKY
===================================================== */

const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const skyMessage = document.getElementById("skyMessage");
const hiddenHeart = document.getElementById("hiddenHeart");
const heartCaption = document.getElementById("heartCaption");


/* Create stars */

function createStars(amount) {

    for (let i = 0; i < amount; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 75 + "%";

        star.style.animationDelay =
            Math.random() * 4 + "s";

        star.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        stars.appendChild(star);
    }
}


/* Start the sky */

function startSky() {

    createStars(70);

    setTimeout(() => {

        skyMessage.classList.add("show");

    }, 1000);


    setTimeout(() => {

        moon.classList.add("show");

    }, 3500);


    setTimeout(() => {

        hiddenHeart.classList.add("show");
        heartCaption.classList.add("show");

    }, 5000);
}


/* Find the love */

function findLove() {

    startMusic();

    hiddenHeart.classList.add("found");

    heartCaption.innerHTML =
        "❤️<br><span>Love found.</span>";

    setTimeout(() => {

        showMission(mission2);

    }, 1300);
}


/* Start sky automatically */

startSky();


/* =====================================================
   MISSION 02
   FLOWER
===================================================== */

const seed = document.getElementById("seed");
const flower = document.getElementById("flower");

const waterButton =
    document.getElementById("waterButton");

const flowerNext =
    document.getElementById("flowerNext");

const waterMessage =
    document.getElementById("waterMessage");


let waterCount = 0;


/* Water the flower */

function waterFlower() {

    startMusic();

    waterCount++;

    waterButton.classList.add("watered");

    setTimeout(() => {

        waterButton.classList.remove("watered");

    }, 300);


    if (waterCount === 1) {

        seed.innerHTML = "🌱";

        waterMessage.innerHTML =
            "Something is growing... 🌱";

    }


    else if (waterCount === 2) {

        seed.innerHTML = "🌿";

        waterMessage.innerHTML =
            "Keep going... 💧";

    }


    else if (waterCount === 3) {

        seed.innerHTML = "🌷";

        waterMessage.innerHTML =
            "Almost there... 🌷";

    }


    else if (waterCount >= 4) {

        seed.classList.add("grown");

        flower.classList.add("bloom");

        waterMessage.innerHTML =
            "Look what you made bloom. 🌸";

        waterButton.style.display =
            "none";

        flowerNext.classList.remove("hidden");
    }
}


/* Go to memories */

function goToMemories() {

    showMission(mission3);

}


/* =====================================================
   MISSION 03
   PHOTOS
===================================================== */

const photo1 =
    document.getElementById("photo1");

const photo2 =
    document.getElementById("photo2");

const photo3 =
    document.getElementById("photo3");

const photoNext =
    document.getElementById("photoNext");


let currentPhoto = 1;


/* Hide all photos */

function hidePhotos() {

    photo1.classList.remove("active");
    photo2.classList.remove("active");
    photo3.classList.remove("active");

}


/* Next photo */

function nextPhoto() {

    startMusic();

    hidePhotos();


    if (currentPhoto === 1) {

        photo2.classList.add("active");

        currentPhoto = 2;

    }

    else if (currentPhoto === 2) {

        photo3.classList.add("active");

        currentPhoto = 3;

    }

    else {

        photoNext.style.display =
            "none";

        showMission(mission4);

        return;
    }
}


/* =====================================================
   MISSION 04
   CAKE
===================================================== */

const cake =
    document.getElementById("cake");

const cakeMessage =
    document.getElementById("cakeMessage");

const cakeNext =
    document.getElementById("cakeNext");


let candlesLit = false;


/* Light candles */

function lightCandles() {

    if (candlesLit) {
        return;
    }

    startMusic();

    candlesLit = true;


    const candles =
        document.querySelectorAll(".candle");


    candles.forEach((candle, index) => {

        setTimeout(() => {

            candle.classList.add("lit");

        }, index * 600);

    });


    setTimeout(() => {

        cakeMessage.innerHTML =
            "Make a wish... ✨";

    }, 2000);


    setTimeout(() => {

        cakeNext.classList.remove("hidden");

    }, 2800);
}


/* Go to final gift */

function goToGift() {

    showMission(finalGift);

}


/* =====================================================
   FINAL GIFT
===================================================== */

const gift =
    document.getElementById("gift");

const giftInstruction =
    document.getElementById("giftInstruction");


let giftOpened = false;


/* Open gift */

function openGift() {

    if (giftOpened) {
        return;
    }

    giftOpened = true;

    startMusic();

    gift.classList.add("open");

    giftInstruction.innerHTML =
        "✨ You found it. ✨";


    setTimeout(() => {

        showMission(birthday);

    }, 1600);
}


/* =====================================================
   START MUSIC ON FIRST USER INTERACTION
===================================================== */

document.addEventListener(
    "click",
    startMusic,
    {
        once: true
    }
);
