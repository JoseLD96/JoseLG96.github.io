let varGloball1="Texto de variable global";

function FCambioColor(){   
    letvar.Temporal1= "Texto temporal";
    letvTexto1=document.getElementById("ejmDOM1");
    vTexto1.textContent="Texto cambiado por FCambioColor()";
    vTexto1.style.color="red";
    vTexto1.insertAdjacentHTML("beforeEnd",
                            "<br>este texto es adicional <br><br>");
   vTexto1.style.backgroundColor="green";
   console.log{vTexto1.innerText}
    vTexto1.insertAdjacentHTML("beforeEnd",varGloball1);
    //La variable global se puede utilizar dentro de cualquier funcion

}
vTexto1= "Texto fuera de funcion"; //vtexto1 no es la variable de la funcion
console.log(vTexto1);
console.log(varTemporal1); //varTemporal no esta definido afuer de funcion

unction FCambioClase1() {
    let vTexto2 = document.getElementsByClassName("classDOM1");
    vTexto2[1].innerHTML = "Elemento [1] del arreglo de clase classDOM1";
    console.log("Tamaño del array=", vTexto2.length);
    // se coloca el índice 1 por ser el 2do elemento de la clase classDOM1 de la pag web
}

function FCambioTag1() {
    let vTexto3 = document.getElementsByTagName('h2');
    vTexto3[6].innerHTML = "Elemento h2 cambiado por TagDOM1";
    // se coloca el índice 6 por ser el 7mo elemento h2 de la pag web index.html
}






