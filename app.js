const formulario = document.querySelector (".form-create");
let contador = 1;
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const descripcion = document.querySelector("#descripcion").value;
    const contenedor = document.querySelector(".publicaciones");
    contenedor.innerHTML +=`<div id"${contador}" class="publicacion">
        <p>id:${contador}</p>
        <p>${descripcion}</p>
        <button id="editar" onclick="editar(this)">editar</button>
        <button id="eliminar" onclick="eliminar(this)">eliminar</button>
        </div>`;
    contador++;
});

function editar(e){
    parrafo = e.parentElement.querySelector("p:nth-child(2)");
    parrafo.contentEditable = true;
    e.value = "Guardar";
    if(parrafo.contentEditable){
        parrafo.contentEditable = false;
    }
    if(e.value == "Guardar"){
        e.value = "Editar";
    }
}

function eliminar(e){
    e.parentElement.remove();
}