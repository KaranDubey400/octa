

// octaelliptical's project
//this is to display the user information for rechacking 
function pika(){
    var fname = document.getElementById('school').value;
    var lname = document.getElementById('lname').value; 
    var fullusername = fname + " " + lname ;
    var email = document.getElementById('chico').value;
    var phone = document.getElementById('pokemon').value;
    var country = document.getElementById('country').value;
  var birthday = document.getElementById("birthday1").value;
    
    document.getElementById("spiderman").innerHTML =  "<h1>YOUR DETAILS </h1>";
    document.getElementById('spiderman').innerHTML += "<p>" + fullusername + "</p>";
    document.getElementById('spiderman').innerHTML +=  email + "<br>" + phone +"<br>"+"date of birth  "+ birthday +"<br>"+ country  ;
   
  
  }
// this is a function to validate first name
function inputfname1(){
    var fname = document.getElementById("school").value;

  if (fname.length<3){
    document.getElementById("fnames").innerHTML = "*try something different ,tooshort";
        document.getElementById("fnames").style.color = "red";
        
 }

 if (fname.length == 0){

  document.getElementById("fnames").innerHTML = "*required ";
        document.getElementById("fnames").style.color = "red";
 }
 if (fname.length>8){
  
  document.getElementById("fnames").innerHTML = "*too long input ";
        document.getElementById("fnames").style.color = "red"; }

 if(fname.length > 3 && fname.length < 8) {
   
    document.getElementById("fnames").innerHTML = "valid ";
  
      document.getElementById("fnames").style.color = "green" ;

} }



function inputlname1(){
  var lname = document.getElementById("lname").value;
  if (lname.length<3 ){
    document.getElementById("lnames").innerHTML = "*try something different ,tooshort";
        document.getElementById("lnames").style.color = "red";
}
else
      document.getElementById("lnames").innerHTML = " ";
if (lname.length == 0){
  
  document.getElementById("lnames").innerHTML = "*required ";
        document.getElementById("lnames").style.color = "red";
}
if (lname.length >3){
  
  document.getElementById("lnames").innerHTML = "valid ";
  
      document.getElementById("lnames").style.color = "green" ;
}
      if(lname.length > 3 && lname.length < 8) {
   
        document.getElementById("lnames").innerHTML = "valid ";
      
          document.getElementById("lnames").style.color = "green" ;
    
    }
  
  
}








//  this is function for phone detail ,chacking if it's 10 digits or not 
    function phone1() {
      var fphone = document.getElementById('pokemon').value;
      if(fphone.length != 10 ){
        document.getElementById("doremon").innerHTML = "*phone number must be of 10 digits";
        document.getElementById("doremon").style.color = "red" ;

      }
      
      if(fphone.length ==10 ){
        document.getElementById("doremon").innerHTML ="valid"; 
        document.getElementById("doremon").style.color = "green" ;
      
      }
      if(fphone.length ==0 ){
        document.getElementById("doremon").innerHTML ="required"; 
        document.getElementById("doremon").style.color = "red" ;
      
      }
    }
// this function is for email id ,checking it has vaild number of character
    function email1() {

        var femail =  document.getElementById('chico').value;
      if(femail.length >18){
        document.getElementById('thor').innerHTML = "Length upto 18 letters allowed";
        
      }
     
      if (femail.length == 0){

        document.getElementById("thor").innerHTML = "*required ";
              document.getElementById("thor").style.color = "red"; 
            }

      if(femail.length >0 && femail.length <18){
      document.getElementById("thor").innerHTML ="valid"; 
      document.getElementById("thor").style.color = "green" ;
    
    }
     
     }

     // this function is for password .....
    function password11(){
      var password = document.getElementById("password12").value;
      if(password.length ==0){
        document.getElementById("password13").innerHTML = "*required ";
        document.getElementById("password13").style.color = "red" ;
        }
      if(password.length<6){
      document.getElementById("password13").innerHTML = "*password must be 8 characters long ";
      document.getElementById("password13").style.color = "red" ;
      }
      else
      document.getElementById("password13").innerHTML ="valid";
      document.getElementById("password13").style.color = "green" ;

    }


// thus is a function allocated for getting total cost of the order placed (billing)
    function totalorder() {
      var pizza = document.getElementById("price1").value;
      var qtn1 = document.getElementById("evior").value;
      var placeorder = pizza* qtn1  ;
      document.getElementById("lexi").innerHTML =  "<br>"  + "<h3>" + "TOTALPRICE=" +" " + placeorder + "dollars($)" + "</h3>"  ;




    }

  
  


  

    

