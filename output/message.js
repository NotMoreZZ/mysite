"use strict";

function resetAll() {
    const button = document.getElementById("sendmsg");
    const msgform = document.getElementById("msgtext");

    msgform.placeholder = "Опишите задачу и не забудьте оставить свои контакты :)";
    msgform.style.borderColor = "";
    msgform.style.borderWidth = "";

    button.value = "Отправить";
    button.style.backgroundColor = "";
    button.style.borderColor = "";
}

function sendMessage() {
    const button = document.getElementById("sendmsg");
    const msgform = document.getElementById("msgtext");

    if (msgform.value == "") {
        msgform.placeholder = "Вы ничего не ввели :(";
        msgform.style.borderColor = "#fd7e14";
        msgform.style.borderWidth = "5px";
        return;
    }

    const form = new FormData();
    const phpCall = new XMLHttpRequest();

    form.append("msgtext", msgform.value);
    phpCall.open("POST", "message.php");
    phpCall.responseType = "json";
    phpCall.send(form);
    
    phpCall.onload = () => {
        if (phpCall.response) {
            button.style.backgroundColor = "#28a745";
            button.style.borderColor = "#28a745";
            button.value = "Сообщение отправлено! ✔️"
        } else {
            button.style.backgroundColor = "#dc3545";
            button.style.borderColor = "#dc3545";
            button.value = "Произошла ошибка! 🚫"
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("sendmsg");
    const msgform = document.getElementById("msgtext");
    button.addEventListener("click", sendMessage);
    msgform.addEventListener("focus", resetAll);
});