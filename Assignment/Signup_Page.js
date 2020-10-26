function submitValues(){
	
		var name=document.getElementById('name').value; 
		var age=parseInt(document.getElementById('age').value); 
		var mail = document.getElementById("email").value;
		var mobile=document.getElementById('mobile').value; 

		


		document.getElementById("one").innerHTML = name;
		document.getElementById("two").innerHTML = age;
		document.getElementById("three").innerHTML = mail;
		document.getElementById("four").innerHTML = mobile;

	}
