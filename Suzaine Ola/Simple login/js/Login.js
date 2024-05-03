function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("Password").value;
    
    var real_username = "Shane2002"
    var real_password = "12301995"

if (username == "" || password == "") {

        document.getElementById("error").innerHTML = "All textboxes is required";
    }

    if (username === real_username && password === real_password){
        document.getElementById("error").innerHTML = "Welcome + Username";
    }

    else {
        document.getElementById("error").innerHTML = "Welcome" + username;

    }
      

}
function forgot() {
    alert("You clicked forgot password");
}