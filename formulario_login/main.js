(function(){ 
    var lista = document.getElementById("lista"),
        nombreInput = document.getElementById("nombreInput"),
        mailInput = document.getElementById("mailInput"),
        montoInput = document.getElementById("montoInput"),
        btnNuevaPersona = document.getElementById("btn-agregar");

    var agregarPersona = function(){
        var nombre= nombreInput.value,
            ingreso=montoInput.value;
            nuevoItem = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(nombre+" " +ingreso);

    
        if(nombre === ""){
            nombreInput.setAttribute("placeholder","Agregar datos validados");
            nombre.className="Error";
            return false;
        }

        enlace.appendChild(contenido);
        enlace.setAttribute("href","#");
        nuevoItem.appendChild(enlace);
        lista.appendChild(nuevoItem);

        nombreInput.value ="";

        for(var i=0; i <=lista.children.length -1;i++){
            lista.children[i].addEventListener("click",function(){
                this.parentNode.removeChild(this);
                            })
        }

    };

    var comprobarInput = function(){
        nombreInput.className="";
        nombreInput.setAttribute("placeholder","PIPON");

    };


    var eliminarPersona = function(){
        this.parentNode.removeChild(this);
    };

    btnNuevaPersona.addEventListener("click",agregarPersona);
    nombreInput.addEventListener("click",comprobarInput);

    for(var i=0; i<=lista.children.length -1;i++){
        lista.children[i].addEventListener("click",eliminarPersona);


    }

    
}())