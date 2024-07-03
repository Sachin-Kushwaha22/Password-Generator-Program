function generatePass() {

    const lowerchar = "abcdefghijklmnopqrstuvwxyz";
    const upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchar = "1234567890";
    const symbolchar = "!@#$%^&*()_+-=/*;:<>,./?\|";

    let allowchars = "";
    let pass = "";

    allowchars += lowercase.checked ? lowerchar : "";
    allowchars += uppercase.checked ? upperchar : "";
    allowchars += number.checked ? numberchar : "";
    allowchars += symbol.checked ? symbolchar : "";

    if (allowchars.length == 0) {
        alert("Please select at least one option");
    }
    else {
        for (let i = 0; i < passlength.value; i++) {
            const random = Math.floor(Math.random() * allowchars.length);
            pass += allowchars[random];

        }
        password.textContent = pass;
    }


}


const passlength = document.getElementById("sizeofpass");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const password = document.getElementById("password");