let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let button = document.getElementById("button");
let error = document.getElementById("error");

let isErrorDay = false;
let isErrorMonth = false;
let isErrorYear = false;

let date = new Date();
let currentYear = date.getFullYear();

error.style.display = "none";

day.oninput = function () {
    if (day.value.length > 1) {
        month.focus();
    }

    if (day.value > 31) {
        error.style.display = "inline";
        error.innerText = "Invalid value!";
        day.style.backgroundColor = "#FF728E";
        isErrorDay = true;
    } else {
        if (!isErrorMonth && !isErrorYear) {
            error.style.display = "none";
        }
        day.style.backgroundColor = "#FFFFFF";
        isErrorDay = false;
    }

    button.disabled = !(day.value !== "" && month.value !== "" && year.value !== "" && year.value.length > 3 && !isErrorDay && !isErrorMonth && !isErrorYear);
}

month.oninput = function () {
    if (month.value.length > 1) {
        year.focus();
    }

    if (month.value > 12) {
        error.style.display = "inline";
        error.innerText = "Invalid value!";
        month.style.backgroundColor = "#FF728E";
        isErrorMonth = true;
    } else {
        if (!isErrorDay && !isErrorYear) {
            error.style.display = "none";
        }
        month.style.backgroundColor = "#FFFFFF";
        isErrorMonth = false;
    }

    button.disabled = !(day.value !== "" && month.value !== "" && year.value !== "" && year.value.length > 3 && !isErrorDay && !isErrorMonth && !isErrorYear);
}

year.oninput = function () {
    if (year.value.length > 3 && day.value !== "" && month.value !== "" && !isErrorDay && !isErrorMonth && !isErrorYear) {
        button.disabled = false;
        button.focus();
    }

    if (year.value > currentYear) {
        error.style.display = "inline";
        error.innerText = "Invalid value!";
        year.style.backgroundColor = "#FF728E";
        isErrorYear = true;
    } else {
        if (!isErrorDay && !isErrorMonth) {
            error.style.display = "none";
        }
        year.style.backgroundColor = "#FFFFFF";
        isErrorYear = false;
    }

    button.disabled = !(day.value !== "" && month.value !== "" && year.value !== "" && year.value.length > 3 && !isErrorDay && !isErrorMonth && !isErrorYear);
}