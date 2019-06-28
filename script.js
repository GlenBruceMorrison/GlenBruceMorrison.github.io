const root = document.documentElement;
const oBtn = document.getElementById("o");
let currentTheme = 1;

oBtn.addEventListener("mouseenter", () => {
    if(currentTheme === 0){
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
});
