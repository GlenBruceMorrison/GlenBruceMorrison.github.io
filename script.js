const root = document.documentElement;
let currentTheme = 0;

transition();

document.getElementById("o").addEventListener("mouseenter", () => {
    transition();
});

function transition() {
    setStyle();

    var time = 0;
    var index = 0;

    document.querySelectorAll('.element').forEach(function (ele) {
        setTimeout(function () {
            resetAnimation(ele, "anim-pop");
            document.getElementById("o").innerHTML = moonPhase(index, currentTheme === 0);
            index++;
        }, time);
        time += 50;
    });
}

function setStyle() {
    if (currentTheme === 0) {
        root.style.setProperty("--main-bg-color", "black");
        root.style.setProperty("--main-text-color", "255, 255, 255");
        root.style.setProperty("--main-emphasis-color", "#FFD046");
        currentTheme = 1;
    }
    else {
        root.style.setProperty("--main-bg-color", "white");
        root.style.setProperty("--main-text-color", "0, 0, 0");
        root.style.setProperty("--main-emphasis-color", "#1DD3B0");
        currentTheme = 0;
    }
}

function moonPhase(index, reversed) {
    var phase;

    if (reversed) {
        index = (7 - index);
    }

    switch (index) {
        case 0: case 1:
            phase = "&#127761";
            break;
        case 2:
            phase = "&#127762";
            break;
        case 3: case 4:
            phase = "&#127763";
            break;
        case 5: case 6:
            phase = "&#127764";
            break;
        case 7:
            phase = "&#127765";
            break;
    }

    return phase;
}

function resetAnimation(ele, anim) {
    ele.classList.remove(anim);
    void ele.offsetWidth;
    ele.classList.add(anim);
}