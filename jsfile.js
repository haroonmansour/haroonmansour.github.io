function validateform(){  
    var fname=document.myform.fname.value;  
    var lname=document.myform.lname.value;  
    var phone=document.myform.phone.value;
    var email=document.myform.email.value;
    var username=document.myform.username.value;
    var password=document.myform.password.value;  
      
    if (fname==null || fname==""){  
      alert("first name can't be blank");  
      document.getElementById("f").style.border="2px solid red";
      return false;  
    
    }
    
      if (lname==null || lname==""){  
      alert("last name can't be blank");  
document.getElementById("l").style.border ="2px solid red";
      return false;  
    }

    
    
    if (phone==null || phone==""){  
      alert("phone can't be blank");  
document.getElementById("p").style.border =" 2px solid red";
      return false;  
    }
    
    if (email==null || email==""){  
      alert("email can't be blank");
document.getElementById("e").style.border ="2px solid red";
      return false;  
    }
    
    if (username==null || username==""){  
      alert("username can't be blank");  
document.getElementById("u").style.border ="2px solid red";
      return false;  
    }
    
    else if(password.length<6){  
      alert("Password can't be blank"); 
document.getElementById("s").style.border ="2px solid red";
      return false;  
      }  
    }

