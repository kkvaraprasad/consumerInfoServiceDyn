package com.websocket;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.server.ServerEndpoint;

 
@ServerEndpoint("/websocketendpoint")//this annotation difines that this class is the endpoint to the websocket prog
public class consumerInfoService {     

	//this annotation opens the connection for the request
    @OnOpen
    public void onOpen(){
        System.out.println("connection opened successfully............");

    }    

    //this annotation will close the connection on demand
    @OnClose
    public void onClose(){

        System.out.println("Close Connection ...");

    }     

    //this annotation will handle the request from the client and process the business logic.
    //from this method we can call another classes involved in the business logic.
    //now i am just sending the message back to client from here with out any business logic.
    @OnMessage
    public String onMessage(String consumerGood){

        System.out.println("parameter sent from browser : " + consumerGood);

        String consumerInfo = " this message from websocket server :- "+ consumerGood;

        return consumerInfo;

    } 

    // this annotation will log the errors raised in the request and response.
    @OnError
    public void onError(Throwable e){

        e.printStackTrace();

    } 

}