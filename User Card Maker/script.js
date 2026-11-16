let form = document.querySelector("#form");
let inputs;
let _name = document.querySelector("#_name");
let _email = document.querySelector("#_email");
let _age = document.querySelector("#_age");
let _bio = document.querySelector("#_bio");
let user_card = document.querySelector("#user_card");

form.addEventListener("submit", function (data) {
    data.preventDefault();
    inputs = document.querySelectorAll("input");
    const obj = {
        name: inputs[0].value,
        email: inputs[1].value,
        age: inputs[2].value,
        abt: inputs[3].value
    };

    if (obj.name !== "" && obj.email !== "" && obj.age !== "" && obj.abt !== "") {

        _name.textContent = obj.name;
        _email.textContent = obj.email;
        _age.textContent = obj.age;
        _bio.textContent = obj.abt;

        user_card.style.display = "block";
        form.reset();
    }

    else {
        alert("please enter all details!!");
        form.reset();
    }

})