let text = document.querySelector("h1");
let newText;

window.addEventListener("keydown", function (key) {
    newText = key.key;
    console.log(key);
    if (newText === " ") {
        text.innerText = "SPACE";
    }
    else {
        text.innerText = newText;
    }
})