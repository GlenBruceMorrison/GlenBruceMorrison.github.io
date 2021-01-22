const root = document.documentElement;

const theme = {
    dark: {
        text: "white",
        backgroundColor: "black"
    },
    light: {
        text: "black",
        backgroundColor: "white"
    }
}
let transitionTime = 1;

const bigSun = document.getElementById("big-sun");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const overlay = document.getElementById("overlay");

let dayTime = false;

overlay.addEventListener('mouseenter', function (e) {
    if (dayTime) return;
    startTransition();

    setTimeout(() => {
        endTransition();
        dayTime = true;
    }, transitionTime * 1000);
});

overlay.addEventListener('mouseenter', function (e) {
    if (!dayTime) return;
    startTransition();
    setTimeout(() => {
        endTransition();
        dayTime = false;
    }, transitionTime * 1000);
});

function startTransition() {
    if (!dayTime) {
        sun.classList.add("anim-sun-rise");
        document.body.classList.add("bg-white");
        document.body.style.color = theme.light.text;
        document.body.classList.add("anim-big-sun-rise");
        return;
    }

    sun.classList.add("anim-sun-set");
    sun.classList.remove("sun-risen");

    document.body.classList.add("bg-black");

    document.body.style.color = theme.dark.text;
    document.body.classList.add("anim-big-sun-set");
}

function endTransition() {
    if (!dayTime) {
        document.body.classList.remove("bg-black");
        document.body.classList.remove("anim-big-sun-rise");
        sun.classList.remove("anim-sun-rise");
        sun.classList.add("sun-risen");
        return;
    }

    document.body.classList.remove("bg-white");
    sun.classList.remove("anim-sun-set");
    sun.classList.add("sun-set");
    document.body.classList.remove("anim-big-sun-set");
}