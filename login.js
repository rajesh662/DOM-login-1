let form = document.querySelector("form");
form.addEventListener("submit",function(para) {
    para.preventDefault();
    let number = document.querySelector(".login-input").value;
    let result = document.querySelector(".result");
    if((number==="") || isNaN(number)){

        result.innerHTML="not a phone number";
        result.style.color="red";

    }

    else{
        result.innerHTML="login success your phone number";
        result.style.color="red";
    }

    
});