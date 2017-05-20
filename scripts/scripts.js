/*
	Cogemos los campos de input y ol, y los introducimos en variables 
	para luego trabajar con ellos.
*/
var newNoteInput = document.getElementById("new_note"); 
var deleteNoteInput = document.getElementById("delete_note");
/*
	Intorducimos el elemento ol del HTML dentro de una variable para luego ir agregandole
	nuevos elementos
*/
var listNotes = document.getElementById("ul_list");
/*
	Las siguientes variables almacenarán el contenido del input y el 
	numero de nota que hay que borrar
*/
var newNoteText;
var contador = 1;

window.onload = function() {	
	document.getElementById("new_note_submit").addEventListener("click", addNewNote);
	document.getElementById("delete_note_submit").addEventListener("click", checkNote);
	
}

function addNewNote(event){
	event.preventDefault();	
	//Comprobamos que el campo del input hay algo escrito, de no ser así mostramos un aviso
	if(!newNoteInput.value){
		alert("El campo de nueva nota esta vacio");
	}else{
		//Creamos nuevo nodo
		newNoteInList = document.createElement("li");
		/*
			Creamos la variable donde se almacenará la hora
		*/		
		today = new Date();
		todayTime = today.getHours() +":"+today.getMinutes() +":"+today.getSeconds();
		/*
			Al nuevo nodo la incluimos la nueva nota con la hora incluida pero a través de 
			innerHTML, de esta manera es mucho más fácil, además le incluimos nosotros a mano el 
			número de nota, este dependerá de el número de hijos que tenga +1
		*/
		newNoteInList.innerHTML= "<strong>"+contador+" - "+todayTime+"</strong> - " + newNoteInput.value;
		/*
			Agregamos un nuevo atributo al nuevo nodo, este será el contador
		*/			
		newNoteInList.setAttribute("id", (contador));
		listNotes.appendChild(newNoteInList);
		newNoteInput.value = "";
		/*
			Creamos el listener sobre la nueva nota que hemos creado
		*/
		listNotes.childNodes[listNotes.childNodes.length-1].addEventListener("dblclick", deleteNote);
		
		contador++;
	}
}

function checkNote(event){
	event.preventDefault();	
	/*
		Comprobamos que lo que se ha introducido en el campo es un número
	*/
	var numberToDelete = document.getElementById("delete_note").value;
	if(isNaN(numberToDelete)){
		//Sino mostramos un mensage de alerta
		alert("El valor que has introducido no es un número");
	}else if(document.getElementById(numberToDelete) != null){
		deleteNoteNumber(numberToDelete);
		document.getElementById("delete_note").value ="";	
	}else{
		alert("El número introducido no existe")
	}
}

function deleteNote(event){		
	if(confirm("Se va a proceder a el borrado de la nota :"+ this.innerHTML)){
		this.remove();	
	}
	event.preventDefault();			
}

function deleteNoteNumber(numberLi){	
	if(confirm("Se va a proceder a el borrado de la nota: "+document.getElementById(numberLi).innerHTML)){			
		document.getElementById(numberLi).remove();	
	}
}