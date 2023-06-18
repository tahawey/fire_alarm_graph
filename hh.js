document.write( `
  
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>


<link rel="stylesheet" href="css/animate.css">
<link rel="stylesheet" href="css/main.js">
 <link rel="stylesheet" href="css/css1.css">
 <link rel="stylesheet" href="css/w3.css">
<script src="js/WOW.min.js"></script>
 

<a >
  <div class="cw-slides">
  <div class="carousel slide" data-ride="carousel"> 
  <div class="carousel-inner">   
  <div class="item active left">          
	   </div>   <div class="item next left">     
	   </div>   <div class="item">     
	   </div>   <div class="item">     
	   </div> 
	   </div>
	   </div>
    <div class="cw-inventory hidden-xs font-primary wow bounceInLeft" data-wow-delay="1.5s" style="visibility: visible; animation-delay: 1.5s; animation-name: bounceInLeft;"> 
	
    </div>
  </div>
</a>
<div class="cw-body">

  <div class="container">
    <div class="row cw-btns text-center font-primary "> 
	<div class="col-md-3 wow fadeInLeft " data-wow-duration=".5s" data-wow-delay="0s" style="visibility: visible; animation-duration: 0.5s; animation-delay: 0s; animation-name: fadeInLeft;">   
	
	<a href="service.html">    
	<div class="cw-btn">       
	<h6>
	<i class="fa fa-comment " ></i> 
	POINTS
	</h6>     
	</div>   </a> </div> 
	<div class="col-md-3 wow fadeInLeft" data-wow-duration=".5s" data-wow-delay="0.25s" style="visibility: visible; animation-duration: 0.5s; animation-delay: 0.25s; animation-name: fadeInLeft;">   
	<a href="p1.html">     
	<div class="cw-btn"> 
	<h6>
	<i class="fa fa-car" ></i> 
	Live events
	</h6>     </div>   </a> </div> 

	<div class="col-md-3 wow fadeInLeft" data-wow-duration=".5s" data-wow-delay=".5s" style="visibility: visible; animation-duration: 0.5s; animation-delay: 0.5s; animation-name: fadeInLeft;">   
	<a href="demo2.html">      <div class="cw-btn">       
	<h6>
	<i class="fa fa-search" ></i> 
	BMS AHU DEMO 
	</h6>     </div>   </a> </div> 
	
	<div class="col-md-3 wow fadeInLeft" data-wow-duration=".5s" data-wow-delay=".75s" style="visibility: visible; animation-duration: 0.5s; animation-delay: 0.75s; animation-name: fadeInLeft;">   
	<a href="demo.html">      <div class="cw-btn">       
	<h6>
	<i class="fa fa-map-marker" ></i> 
	F A Demo
	</h6>     </div>   </a> </div>
    </div>
	
    <div class="row cw-welcome wow fadeIn" data-wow-duration="1s" data-wow-delay="1s" style="white;text-align:center;visibility: visible; animation-duration: 1s; animation-delay: 1s; animation-name: fadeIn;"> <div class="col-md-6 col-lg-8">   

	<h1>  </h1>   
	
		</div> 
<a>

`);
function set_lag(lang){	document.cookie = "lang="+lang;	location.reload();	}
function getCookie(cname) {  let name = cname + "=";  let decodedCookie = decodeURIComponent(document.cookie);  let ca = decodedCookie.split(';');  for(let i = 0; i <ca.length; i++) {    let c = ca[i];    while (c.charAt(0) == ' ') {      c = c.substring(1);    }    if (c.indexOf(name) == 0) {      return c.substring(name.length, c.length);    }  }  return "";}
function reverseString(s){return s.split("").reverse().join("");}
function initButton() { document.getElementById('toggle').addEventListener('click', onToggle);   }
function onToggle(event) {    websocket.send(JSON.stringify({'action':'toggle'}));}
function hex2bin(hex){    
	
	return  ("00000000" + (parseInt(hex, 10)).toString(2)).substr(-7) ;
	}
 
	function send_mqtt(msg="outputs,1,0,0,1,"){
	//	var msg = "outputs,1,0,0,1,";
		console.log(msg);
		message = new Paho.MQTT.Message(msg);
		message.destinationName = "tahawey/sonac/cmnd/sserialsend";
		mqtt.send(message);
		 
	}
