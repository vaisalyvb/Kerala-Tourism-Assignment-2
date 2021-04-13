let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
function validate(){
    if(email.value.trim()==""||pwd.value.trim()==""){
        alert("Fields cannot be empty");
        return false;
    }
    else if (email.value==""){
        alert("Email cannot be empty");
        return false;
    }
    else if(pwd.value==""){
        alert("Password cannot be blank");
        return false;
    }
    else if (pwd.value.length<8){
        alert("Password is too short");
        pwd.style.border="2px solid red";
        return false;
    }
    
    else{
        return true;
    }
}
