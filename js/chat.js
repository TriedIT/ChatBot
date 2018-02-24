$(document).ready(function(){
	$("a#SEND").click(function(){
		var e=document.getElementById("newMSG");
		var msg=e.value;
		var msgStart="Hi, What's Your Name?";
		if(msg=="Hello")
			$("#chatMSG").append("<div class='message btn btn-info'><b> BOT : </b>"+msgStart+"</div>");
		if(msg.length==0)
			alert("Enter something to chat about! Don't be shy!");
		else
		{
		e.value="";
		$("#chatMSG").append("<div class='message btn btn-info'><b> ME : </b>"+msg+"</div>");
		$("#chatMSG").append("<div class='message bot btn btn-info'><b> BOT : </b>"+msg+"</div>");
		}
	});
});
/*
Alternatively you can do an ajax call to a new php page sending the 'msg' via ajax. Save the message to db. On success, do the append.
For checking new messages, keep doing an ajax call every 2 seconds to check if the database has any new message!
If you would like to open source a database version, you can push your code to my repo or create your own repo and ping me the link!
*/
