
function checkLogin() {
          
  var userID = document.getElementById("userID").value;
  var password = document.getElementById("password").value;

   if(userID == "" || password == "") {
    alert("Please enter a User ID and Password");
    return false;
  }
      
 else if(userID == "Vel" && password == "00") {
    window.location.href = "vel/welcome.html";
    alert("Login successful!");
    return true;
  } 
 else if(userID == "Prashanth" && password == "64636") {
    window.location.href ="Prashanth/welcome.html";
    alert("Login successful!");  
    return true;
  }
  else if(userID == "Rakshith" && password == "31770") {
    window.location.href ="Rakshith/welcome.html";
    alert("Login successful!");  
    return true;
  }

  else if(userID == "Lokesh War" && password == "98352") {
    window.location.href ="Lokesh War/welcome.html";
    alert("Login successful!");  
    return true;
  }

  else if(userID == "Rahul" && password == "89002") {
    window.location.href ="Rahul/welcome.html";
    alert("Login successful!");  
    return true;
  }

  else if(userID == "Srivan" && password == "21967") {
    window.location.href ="Srivan/welcome.html";
    alert("Login successful!");  
    return true;
  }

  else if(userID == "Suriya" && password == "62565") {
    window.location.href ="Suriya/welcome.html";
    alert("Login successful!");  
    return true;
  }
  else if(userID == "Barath" && password == "22265") {
    window.location.href ="Barath/welcome.html";
    alert("Login successful!");  
    return true;
  }

 


  
  else {
    alert("Invalid User ID or Password. Please try again.");
    return false;
  }
 
 
}
