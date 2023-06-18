	function onConnectionLost(){
	console.log("connection lost");
	document.getElementById("status").innerHTML = "Connection Lost";
	document.getElementById("messages").innerHTML ="Connection Lost";
	connected_flag=0;
	setTimeout(MQTTconnect, reconnectTimeout);
	//reconnect();
	}
	
	function reconnect(){
	while (connected_flag==0) {setTimeout(MQTTconnect, 1000);}
	}
	function onFailure(message) {
		console.log("Failed");
		document.getElementById("messages").innerHTML = "Connection Failed- Retrying";
        setTimeout(MQTTconnect, reconnectTimeout);
    }
	function onMessageArrived(r_message){
		out_msg="Message received "+r_message.payloadString+"<br>";
		out_msg=out_msg+"Message received Topic "+r_message.destinationName;
		document.getElementById("lastmsg").innerHTML= r_message.payloadString;
	}
	function onConnected(recon,url){	console.log(" in onConnected " +reconn);	}
	function onConnect() {
	document.getElementById("messages").innerHTML ="Connected to "+host +"on port "+port;
	connected_flag=1;
	sub_topics();
	document.getElementById("status").innerHTML = "Connected";
	console.log("on Connect "+connected_flag);

	}

    function MQTTconnect() {
		document.getElementById("messages").innerHTML =" ";
		var s = "broker.mqttdashboard.com";//document.forms["connform"]["server"].value;
		var p = "8000";//document.forms["connform"]["port"].value;
		if (p!=""){	console.log("ports");port=parseInt(p);console.log("port" +port);}
		if (s!="")	{host=s;console.log("host");}
		console.log("connecting to "+ host +" "+ port);
		var x=Math.floor(Math.random() * 10000); 
		var cname="orderform-"+x;
		mqtt = new Paho.MQTT.Client(host,port,cname);
		var options = {timeout: 3,onSuccess: onConnect,onFailure: onFailure,
		//setAutomaticReconnect : true
		};
        mqtt.onConnectionLost = onConnectionLost;
        mqtt.onMessageArrived = onMessageArrived
		mqtt.connect(options);
		//setTimeout(sub_topics, 1000);
		return false;
	}
	function sub_topics(){
		document.getElementById("messages").innerHTML ="";
		if (connected_flag==0){
		out_msg="<b>Not Connected so can't subscribe</b>"
		console.log(out_msg);
		document.getElementById("messages").innerHTML = out_msg;
		return false;
		}
		var stopic= "tahawey/sonac/tele/RESULT";
		console.log("Subscribing to topic ="+stopic);
		mqtt.subscribe(stopic);
		return false;
	}
	function send_message(msg=""){
		document.getElementById("messages").innerHTML ="";
		if (connected_flag==0){
		out_msg="<b>Not Connected so can't send</b>"
		console.log(out_msg);
		document.getElementById("messages").innerHTML = out_msg;
		return false;
		}
		if(msg=="") msg = "hi mohameddddd";
		console.log(msg);
		var topic = "tahawey/sonac/tele/RESULT";//document.forms["smessage"]["Ptopic"].value;
		message = new Paho.MQTT.Message(msg);
		
		if (topic=="")message.destinationName = "test-topic"
		else
		message.destinationName = topic;
		mqtt.send(message);
		return false;
	}

function fnonload() {
send_message("yessasas");
send_message();

}
//setTimeout(fnonload, 4000);
//setTimeout(MQTTconnect, 1000);

	var connected_flag=0	
	var mqtt;
    var reconnectTimeout = 2000;
	MQTTconnect();