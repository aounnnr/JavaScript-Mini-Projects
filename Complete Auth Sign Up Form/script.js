document.querySelector("#btn").addEventListener("click", function (evt) {
    evt.preventDefault();

    function nameauth() {
        const NAME_REGEX = /^\p{L}[\p{L}\p{M}' .-]{0,48}\p{L}$/u;

        if (document.querySelector("#name").value.trim() === "") {
            document.querySelector("#_name").textContent = "Please Enter Your Name";
            document.querySelector("#_name").style.display = "block";
        }
        else if (!NAME_REGEX.test(document.querySelector("#name").value.trim())) {
            document.querySelector("#_name").textContent = "Please enter a valid name (2–50 letters; spaces, apostrophes, hyphens and periods allowed)";
            document.querySelector("#_name").style.display = "block";
        }
        else {
            document.querySelector("#_name").style.display = "none";
            return true;
        }
    }

    function mailauth() {
        const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (document.querySelector("#email").value.trim() === "") {
            document.querySelector("#_email").textContent = "Please Enter Your Email";
            document.querySelector("#_email").style.display = "block";
        }
        else if (!EMAIL_REGEX.test(document.querySelector("#email").value.trim())) {
            document.querySelector("#_email").textContent = "Please enter a valid email address";
            document.querySelector("#_email").style.display = "block";
        }
        else {
            document.querySelector("#_email").style.display = "none";
            return true;
        }

    }

    function passauth() {
        const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S{8,64}$/;

        if (document.querySelector("#pass").value === "") {
            document.querySelector("#_pass").textContent = "Please Enter Your Password";
            document.querySelector("#_pass").style.display = "block";
        }
        else if (!PASS_REGEX.test(document.querySelector("#pass").value)) {
            document.querySelector("#_pass").textContent = "Password must be 8–64 characters and include uppercase, lowercase, a number and a symbol";
            document.querySelector("#_pass").style.display = "block";
        }
        else {
            document.querySelector("#_pass").style.display = "none";
            return true;
        }
    }

    function confpassauth() {

        if (document.querySelector("#passconf").value === "") {
            document.querySelector("#_passconf").textContent = "Please Enter Your Password";
            document.querySelector("#_passconf").style.display = "block";
        }
        else if (document.querySelector("#pass").value !== document.querySelector("#passconf").value) {
            document.querySelector("#_passconf").textContent = "Passwords do not match. Please try again";
            document.querySelector("#_passconf").style.display = "block";
        }
        else {
            document.querySelector("#_passconf").style.display = "none";
            return true;
        }
    }

    let resname = nameauth();
    let resemail = mailauth();
    let respass = passauth();
    let respassconf = confpassauth();

    if (resname === true && resemail === true && respass === true && respassconf === true) {
        const userDets = {
            name: document.querySelector("#name").value.trim(),
            email: document.querySelector("#email").value.trim(),
            passw: document.querySelector("#pass").value
        };
    }
});