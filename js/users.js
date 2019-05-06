var users = new Array();
var a = {userName: "a", password: "a", firstName: "a", lastName: "a", email: "a", birthday: "a"};
users.push(a);


function CreateUser() {
    var newUser = {userName: document.getElementById('un').value, password: document.getElementById('pswd').value, firstName: document.getElementById('fn').value,
     lastName: document.getElementById('ln').value, email: document.getElementById('email').value, birthday: document.getElementById('bd').value};
    users.push(newUser);
    alert("Congradulations! You can start play.");
    document.getElementById('un').value = "";
    document.getElementById('pswd').value = "";
    document.getElementById('fn').value = "";
    document.getElementById('ln').value = "";
    document.getElementById('email').value = "";
    document.getElementById('bd').value = "";
    ShowSection('login');
}

function isExistUser(newUser){
    var i;
    for(i = 0; i < users.length; i++){
        if(users[i]["userName"] == newUser)
            return true;
    }
    return false;
}

function checkPassword(userName, pswd){
    var i;
    for(i = 0; i < users.length; i++){
        if(users[i]["userName"] == userName)
            return (users[i]["password"] == pswd);
    }
}


