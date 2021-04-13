let email = document.getElementById("email");
let error = document.getElementById("error");
function validate1(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value))
    {error.innerHTML = "Email is valid";
    error.style.color = "green";
    return true;
    }
    else{
        error.innerHTML = "Email is invalid";
        error.style.color ="red";
    
    }
}
function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = document.getElementById("password");
   
     if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
        pwd.style.border="2px solid green";
    } 
    else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
        pwd.style.border="2px solid orange";
    } 
    else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
        pwd.style.border="2px solid red";
    }
}

// function phonenumber()
// {
//   var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//   if((inputtxt.value.match(phoneno))
//         {
//       return true;
//         }
//       else
//         {
//         alert("message");
//         return false;
//         }
// }