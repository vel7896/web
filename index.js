function checkLogin() {
          
    var userID = document.getElementById("userID").value;
    var password = document.getElementById("password").value;

     if(userID == "" || password == "") {
      alert("Please enter a User ID and Password");
      return false;
    }
        
    if(userID == "vel" && password == "00") {
      window.location.href = "vel/welcome.html";
      alert("Login successful!");
      return true;
    } 
   else if(userID == "p" && password == "1") {
      window.location.href ="/vel/welcome1.html";  
      alert("Login successful!");  
      return true;
    }
    else {
      alert("Invalid User ID or Password. Please try again.");
      return false;
    }
   
   
  }
