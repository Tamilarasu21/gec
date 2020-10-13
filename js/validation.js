function checkPass()
{
    var password = document.getElementById('password');
    var cpassword  = document.getElementById('cpassword');

    if(password.value=="" && cpassword.value=="")
    {
        cpassword.style.border = "1px solid gainsboro";
        cpassword.style.outline = "none";
        cpassword.style.boxShadow = "none";
    }
    else if(password.value == cpassword.value)
    {
        cpassword.style.border = "1px solid green";
        cpassword.style.outline = "none";
        cpassword.style.boxShadow = "1px 1px 3px green";
    }
    else
    {    
        cpassword.style.border = "1px solid red";
        cpassword.style.outline = "none";
        cpassword.style.boxShadow = "1px 1px 3px red";
    }
}  