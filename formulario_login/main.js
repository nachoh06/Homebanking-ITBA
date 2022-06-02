(function(){
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");

    var agregarTarea = function(){
        var tarea= tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);
    
    
        if(tarea === ""){
            tareaInput.setAttribute("placeholder","Agregar una tarea válida");
            tarea.className="Error";
            return false;
        }

        enlace.appendChild(contenido);
        enlace.setAttribute("href","#");
        nuevaTarea.appendChild(enlace);
        lista.appendChild(nuevaTarea);

        tareaInput.value ="";

        for(var i=0; i <=lista.children.length -1;i++){
            lista.children[i].addEventListener("click",function(){
                this.parentNode.removeChild(this);
                            })
        }

    };

    var comprobarInput = function(){
        tareaInput.className="";
        tareaInput.setAttribute("placeholder","PIPON");

    };


    var eliminarTarea = function(){
        this.parentNode.removeChild(this);
    };

    btnNuevaTarea.addEventListener("click",agregarTarea);
    tareaInput.addEventListener("click",comprobarInput);

    for(var i=0; i<=lista.children.length -1;i++){
        lista.children[i].addEventListener("click",eliminarTarea);


    }


}())