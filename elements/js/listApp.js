(function(){
    // vars
    var lista = document.getElementById("listado");
    var inputCheck = document.getElementById("inputText");
    var buttonSubmit = document.getElementById("button");
    /* functions */
    var addToList = function(){
       var tarea = inputCheck.value;
       var newTarea = document.createElement("li");
       var link = document.createElement("a");
       var content = document.createTextNode(tarea);
       if (tarea === "" || tarea == null) {
        inputCheck.className = "errorInput";
        swal({
            title: "¡Error!",
            text: "El valor que has introducido no es válido.",
            icon: "warning",
            button: "Volver a intentarlo",
        })
            return false;
        }
        /* add the content to the link */
        link.appendChild(content);
        /* a */
        link.setAttribute("href", "#");
        link.className = "list-group-item";
        /* li */
        newTarea.appendChild(link);
        /* toList */
        lista.appendChild(newTarea);
        swal({
            title: "¡Agregado!",
            text: "Has agrado " + tarea + " a tu lista.", 
            icon: "success",
            button: "Agregar otra tarea",
        })

        inputCheck.value = "";

        for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}
    };
    var checkInput = function() {
        inputCheck.className = "";
        inputCheck.setAttribute("placeholder", "Ingrega aquí tu tarea")
    };

    var deleteElement = function() {
        this.parentNode.removeChild(this);
    }
        
    /* EVENTS */
    /* adding elements to the list */
    buttonSubmit.addEventListener("click", addToList);
    /* checking the input */
    inputCheck.addEventListener("click", checkInput);
    /* deleting elements to the list  */
    for (i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", deleteElement);
    }
}());
