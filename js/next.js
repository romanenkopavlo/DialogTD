let get = window.location.search;
let myDate = new URLSearchParams(get);
let myDay = myDate.get("day");
let myMonth = myDate.get("month");
let myYear = myDate.get("year");

let dayField = document.getElementById("dayField");
let monthField = document.getElementById("monthField");
let yearField = document.getElementById("yearField");
let dialog = document.getElementById("dialog");
let buttonChange = document.getElementById("change");
let buttonClose = document.getElementById("close");

dayField.innerHTML = "Day: <b>" + myDay + "</b>";
monthField.innerHTML = "Month: <b>" + myMonth + "</b>";
yearField.innerHTML = "Year: <b>" + myYear + "</b>";

buttonChange.onclick = function () {
    dialog.showModal();
}

buttonClose.onclick = function () {
    dialog.close();
}