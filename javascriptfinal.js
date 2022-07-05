




function pika(){
    var fname = document.getElementById('school').value;
    var lname = document.getElementById('lname').value; 
    var fullusername = fname + " " + lname ;
    var email = document.getElementById('chico').value;
    var phone = document.getElementById('pokemon').value;
    var country = document.getElementById('country').value;
  
    
    document.getElementById("spiderman").innerHTML =  "<h1>order summary</h1>";
    document.getElementById('spiderman').innerHTML += "<p>" + fullusername + "</p>";
    document.getElementById('spiderman').innerHTML +=  email + "<br>" + phone +"<br>"+ country ;
  
   
  }
 
    function phone1() {
      var fphone = document.getElementById('pokemon').value;
      if(fphone.length != 10 ){
        document.getElementById("doremon").innerHTML = "*phone number must be of 10 digits";
        document.getElementById("doremon").style.color = "red";

      }
      
      else
      document.getElementById("doremon").innerHTML = " ";
    }

    function email1() {

        var femail =  document.getElementById('chico').value;
      if(femail.length >18){
        document.getElementById('thor').innerHTML = "Length upto 18 letters allowed";
        document.getElementById('thor').style.color= "red";
  
      }
      else 
      document.getElementById('thor').innerHTML = " ";

    }


    function totalorder() {
      var pizza = document.getElementById("price1").value;
      var qtn1 = document.getElementById("evior").value;
      
     

      var pasta = document.getElementById("price2").value;
      var qtn2 = document.getElementById("italianpasta").value;
      var orderpizza = pizza * qtn1 + pasta * qtn2 ;
     

      var burger = document.getElementById("price3").value;
      var qtn3 = document.getElementById("kingburger").value;
      var orderburger = burger * qtn3 ;

      var NOODLES = document.getElementById("price4").value;
      var qtn4 = document.getElementById("chinesenoodles").value;
      var ordernoodles = NOODLES * qtn4 ;

      var waterbottle = document.getElementById("price5").value;
      var qtn5 = document.getElementById("waterbottle1").value;
      var orderwaterbottle = waterbottle * qtn5 ;
    
      
      document.getElementById("lexi").innerHTML = orderpizza +"dollars";
      document.getElementById("macaroni").innerHTML += orderpasta;
      document.getElementById("kinggburger").innerHTML += orderburger;
      document.getElementById("shezwannoodles").innerHTML += ordernoodles;
      document.getElementById("mineralwaterbottle").innerHTML += orderwaterbottle + "dollars$";



    }


  
  


  

    

