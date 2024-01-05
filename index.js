const userText = document.getElementById("editor");

// toggle bold, italic & underline
function formatText(type) {
    userText.classList.toggle(type);
}

// align text: left, center, right, justify
function textAlign(alignType) {
    userText.style.textAlign = alignType;
}

// change font size
function changeFontSize(value) {
    userText.style.fontSize = value + "px";
}

// transform text: uppercase, lowercase
function textTransform() {
    if (userText.style.textTransform == "uppercase") {
        userText.style.textTransform = "lowercase";
    } else userText.style.textTransform = "uppercase";
}

// change text color
function pickColor(value) {
    userText.style.color = value;
}
