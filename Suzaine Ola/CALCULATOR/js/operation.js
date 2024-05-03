function operation(oper) {
    document.getElementById('operationInput').value = open;
    document.getElementById('previous').value = document.getElementById('number-input').value;
    document.getElementById('number-input').value = "";

}

function equal() {
    var textbox = document.getElementById("number-input");
    var previous = document.getElementById("previous").value;

    textbox.value = Number(textbox.value) + Number(previous);

    switch (operation) {
        case '+':
            textbox.value = Number(previous) + Number(textbox.value);
            break;

        case '-':
            textbox.value = Number(previous) + Number(textbox.value);
            break;
    }

}

