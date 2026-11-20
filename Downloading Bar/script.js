document.querySelector(".btn").addEventListener("click", function () {
    let count = 0;
    let tl = setInterval(function () {
        if (count >= 0) {
            count++;
            if (count <= 100) {
                document.querySelector(".fill").style.width = `${count}%`;
                document.querySelector(".per").textContent = `${count}%`;
            }
            else {
                clearInterval(tl);
                document.querySelector(".title").textContent = "Downloaded...";
            }
        }
    }, 100);
});
