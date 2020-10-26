function submitValues(){
	
		var name=document.getElementById('nm').value; 
		var loc=document.getElementById('loc').value; 
		var turnover = document.getElementById("turnover").value;
		
		document.getElementById("one").innerHTML = name;
		document.getElementById("two").innerHTML = loc;
		document.getElementById("three").innerHTML = turnover;

	}
