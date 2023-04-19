function logar(){
	
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

if (email == "joycemouraifpi@gmail.com"  && password == "admin123"){
	alert("foi bem");
	location.href = "page.html";
}

else{
alert("tenso");
}

}

