function number(num) {
    var textbox = document.getElementById('number-input')
    var current = textbox.value
    if (current == 0) {
        textbox.value = current + num;
    }

    else {
        textbox.value = current + num;
    }
}

function clear() {
    document.getElementById('number-input').value = 0;
}