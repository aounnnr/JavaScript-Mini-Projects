let btn = document.querySelector("#btn");
let input = document.querySelector("#input");

btn.addEventListener("click",function(){
    input.click();
})

input.addEventListener("change", function(data){
    let file = data.target.files[0];
    btn.textContent = file.name;
})