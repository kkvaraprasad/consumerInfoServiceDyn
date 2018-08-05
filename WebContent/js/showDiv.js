
function wsSendMessage(requestString){
	
	var webSocket = new WebSocket("ws//localhost:8080/consumerInfoServiceDyn/consumerInfoService");
    webSocket.onopen = function(requestString){ wsOpen();};
    wsSendMessage(webSocket, requestString);
    webSocket.onmessage = function(responseString){ wsGetMessage(requestString);};
    wsCloseConnection();
    webSocket.onclose = function(requestString){ wsClose(requestString);};
    webSocket.onerror = function(requestString){ wsError(requestString);};
    document.getElementById("messageFrmServer").innerHTML = responseString.data;
}
//this function will log message on console when connection opens
function wsOpen(){
	console.log("Connected to server..");
}
// this function will log message on console when message sent to server
function wsSendMessage(ws, string){
	ws.send(string);	
	console.log("Request sent to server..");
}
//this function will close the connection 
function wsCloseConnection(){
	webSocket.close();
	console.log("Websocket connection closed..");
}
//this function will log the message from the server
function wsGetMessage(string){
	console.log("Response from server.."+string.data);
}
//this function will close the connection
function wsClose(string){
	console.log("Connection closed..");
}
function wserror(message){
	console.log("Error message from Server :"+message);
}



function show_DelComp(){
	
	var request = "Dell Computer";	
	var response = wsSendMessage(request);
	
}
function show_LenovoComp(){
	
	var request = "Lenovo Computer";	
	var response = wsSendMessage(request);
}
function show_samsungPhone(){
	
	var request = "Samsung Phone";	
	var response = wsSendMessage(request); 
}
function show_applePhone(){
	
	var request = "Apple phone";	
	var response = wsSendMessage(request);
}
function show_del_laptop(){
	
	var request = "Dell Laptop";	
	var response = wsSendMessage(request);
}
function show_lenovo_laptop(){
	
	var request = "Lenovo Computer";	
	var response = wsSendMessage(request);
}
function show_mac_laptop(){
	
	var request = "Mac Computer";	
	var response = wsSendMessage(request);
}
function show_canon_printer(){
	
	var request = "Canon printer";	
	var response = wsSendMessage(request);
}
function show_hp_printer(){
	
	var request = "HP Printer";	
	var response = wsSendMessage(request);
}
function show_hpFax(){
	
	var request = "HP Fax";	
	var response = wsSendMessage(request);
}
function show_panasonicFax(){
	
	var request = "Panasonic Fax";	
	var response = wsSendMessage(request);
}
function show_canon_cam(){
	
	var request = "Canon Camera";	
	var response = wsSendMessage(request);
}
function show_nikon_cam(){
	
	var request = "Nokon Camera";	
	var response = wsSendMessage(request);
}
function show_samsung_wm(){
	
	var request = "Samsung Washing Machine";	
	var response = wsSendMessage(request);
}
function show_lg_ws(){
	
	var request = "LG Washing Machine";	
	var response = wsSendMessage(request);
}
function show_samsung_tv(){
	
	var request = "Samsung Televison";	
	var response = wsSendMessage(request);
}
function show_lg_tv(){
	
	var request = "LG Television";	
	var response = wsSendMessage(request);
}
function show_hisence_tv(){
	
	var request = "Hisense Television";	
	var response = wsSendMessage(request);
}
function show_defy_fridge(){
	
	var request = "Defy Refregerator";	
	var response = wsSendMessage(request);
}
function show_hisense_fridge(){
	
	var request = "Hisense Refregerator";	
	var response = wsSendMessage(request);
}
function show_samsung_fridge(){
	
	var request = "Samsung Refregerator";	
	var response = wsSendMessage(request);
}
function show_samsung_ac(){
	
	var request = "Samsung Air Conditioner";	
	var response = wsSendMessage(request);
}
function show_lg_ac(){
	
	var request = "LG Air Conditioner";	
	var response = wsSendMessage(request);
}
function show_panaconic_ac(){
	
	var request = "Panasonic Air conditioner";	
	var response = wsSendMessage(request);
}
function show_mixed(){
	
	var request = "Mixer";	
	var response = wsSendMessage(request);
}
function show_grinder(){
	
	var request = "Grinder";	
	var response = wsSendMessage(request);
}
function show_juicer(){
	
	var request = "Juicer";	
	var response = wsSendMessage(request);
}
function show_bpmonitor(){
	
	var request = "Blood Presure Monitor";	
	var response = wsSendMessage(request);
}
function show_sugermonitor(){
	
	var request = "Suger Monitor";	
	var response = wsSendMessage(request);
}
function show_threadmill(){
	
	var request = "Thread Mill";	
	var response = wsSendMessage(request);
}