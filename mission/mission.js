const themeSelector = document.querySelector("select");
let image = document.querySelector("img");
const body = document.querySelector("body");

function changeTheme() {
    if (themeSelector.value == "dark")
    {
        image.setAttribute("src", "images/byui-logo_white.png")
        body.classList.add("dark");
    }
    else if (themeSelector.value == "light")
    {
        image.setAttribute("src", "images/byui-logo_blue.webp")
        body.classList.remove("dark");
    }

}

themeSelector.addEventListener('change', changeTheme);