let text = document.querySelector("h1");
let newText;

window.addEventListener("keydown", function(key){
    newText = key.key;
    text.innerText = newText;
})