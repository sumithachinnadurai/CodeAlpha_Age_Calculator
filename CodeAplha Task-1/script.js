function calculateAge() {
    var dobString = document.getElementById("dob").value;
    
    if (!dobString) {
      alert("Please enter your date of birth.");
      return;
    }
    
    var dob = new Date(dobString);
    var now = new Date();
    
    var age = now.getFullYear() - dob.getFullYear();
    
    // Adjust age if birthday hasn't occurred yet this year
    if (now.getMonth() < dob.getMonth() || 
        (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) {
      age--;
    }
    
    document.getElementById("result").innerHTML = "Your age is: " + age;
  }
  