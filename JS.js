function retrieve(){
    

	var x = document.querySelectorAll(".l");
    var myWindow = window.open('');
    myWindow.document.write('<html><head><title>Home Page</title><link rel="stylesheet" type="text/css" href="dataWindow.css"></head><body>');
    myWindow.document.write("<h1> Welcome to MSP Family! </h1> "+
    "<img src=\"msp_logo.png\">" +
    "<h2> \"The data you have entered is\" </h2>");
    var fname=x[0].value;
    myWindow.document.write("<p class=\"p1\">First name:</p>" + "<p class=\"p2\">"+fname+"</p>");

    var lname=x[1].value;
    myWindow.document.write("<p class=\"p1\">Last name:</p>" + "<p class=\"p2\">"+lname+"</p>");

    var email=x[2].value;
    myWindow.document.write("<p class=\"p1\">Email:</p>" + "<p class=\"p2\">"+email+"</p>");
    
    var num=x[3].value;
    myWindow.document.write("<p class=\"p1\">Phone Number:</p>" + "<p class=\"p2\">"+num+"</p>");
    
    var bDay=x[4].value;
    myWindow.document.write("<p class=\"p1\">Date of Birth:</p>" + "<p class=\"p2\">"+bDay+"</p>");

    var radio=document.getElementsByName("gender");
    var gender;
    for(var i=0; i<radio.length; i++){
        if(radio[i].checked){
            gender=radio[i].value;
            break;
        }
    }
    myWindow.document.write("<p class=\"p1\">Gender:</p>" + "<p class=\"p2\">"+gender+"</p>");

	myWindow.document.write("</body> </html>");
	
}