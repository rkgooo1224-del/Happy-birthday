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

    waterButton.classList.add("water
