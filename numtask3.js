
function check(){
var img_check = document.getElementById("5");
if (img_check.checked) {  
	
	var checkAnswer =  document.getElementById("checkAnswer");
	checkAnswer.innerHTML = "Answer is correct , The End. ";
	var i=document.getElementById("Next");
	i.style.display = "block";
	
}
else{var checkAnswer =  document.getElementById("checkAnswer");
	checkAnswer.innerHTML = "Answer is not correct , please try again  ";
 
}
}
/*
else{document.write("false")}
}*/

/*
var list1=document.getElementById("list1");
function hoverplay(){
list1.style.display="block";
}
function hoverpause(){
list1.style.display="none";
}
	
	
	
	var list3=document.getElementById("list3");
	function hoverplay1(){
	list3.style.display="block"
	}
	function hoverpause1(){
	
			list3.style.display="none";
	}
	
	var list2=document.getElementById("list2");
	function hoverplay2(){
	list2.style.display="block"
	}
	function hoverpause2(){
	
			list2.style.display="none";
	}*/