document.getElementById("form-input").addEventListener("input" , function () {
    const username = document.getElementById("username").value;
    const email   =  document.getElementById("email").value;
    const mobile  =  document.getElementById("mobile").value;
    const pass   =   document.getElementById("pass").value;
    const confirmpass = document.getElementById("confirm-pass").value;
    const terms  =   document.getElementById("terms").checked;


    const isformvalid = username && email && mobile && pass && confirmpass && terms ;
    const isemailvalid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6})*$/.test(email);
    const ispassvalid = pass.length >= 8 && /[a-z]/.test(pass) && /[A-Z]/.test(pass) && /\d/.test(pass) && /[!@#\$%\^&\*]/.test(pass);
    const ispassmatch = pass === confirmpass;
    const ismobilevalid = /^(\d{077}\n)/.test(mobile);

    if (isformvalid && isemailvalid && ispassvalid && ispassmatch && ismobilevalid) {
        document.getElementById("form-input").disabled = true ;
        
    }else {
        document.getElementById("form-input").disabled = false ;
    }
}

);
document.getElementById("sign").addEventListener("button" , function singin(){
    const username = document.getElementById("username").value;
    const email   =  document.getElementById("email").value;
    const pass   =   document.getElementById("pass").value;

    const user = {
        id: Date .now(),
        username:username,
        email:email,
        pass:pass

    };
    localStorage.setItem(email,JSON.stringify(user));
    alert("singin succsisfull");
}
);
document.getElementById("login").addEventListener("button" , function login() {
    const email = document.getElementById("login-email").value;
    const pass  = document.getElementById("login-password").value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.pass === pass) {
        sessionStorage.setItem("cureentuser", JSON.stringify({id:user.id,}))
        
    }
    
}

)