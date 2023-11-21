function sumar (n1, n2){ //Function nos sirve para crear un conjunto de instrucciones que realiza una tarea o calcula un valor
    var resultado = n1 + n2; //Declaamos la variable resultado (en estecaso una suma)
    var res = document.getElementById("resultado")  //El (getElementById) no sirve para seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado
    if (n1 != 0 && n2 != 0){
        respuesta.style.display = "block"
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    }else{
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

function restar (n1, n2){
    var resultado = n1 - n2; //Declaramos la variable resultado (en estecaso una resta)
    var res = document.getElementById("resultado")
    if (n1 != 0 && n2 != 0){
        respuesta.style.display = "block"
        res.innerHTML = `Total: ${resultado}`;
        res.style.color="green";
    }else{
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

function multiplicar (n1, n2){
    var resultado = n1 * n2; //Declaramos la variable resultado (en estecaso una multiplicacion)
    var res = document.getElementById("resultado")
    if (n1 != 0 && n2 != 0){
        respuesta.style.display = "block"
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    }else{
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

function dividir (n1, n2){
    var resultado = n1 / n2; //Declaamos la variable resultado (en estecaso una division)
    var res = document.getElementById("resultado")
    if (n1 != 0 && n2 != 0){
        respuesta.style.display = "block" //DISPLAY párrafo normal que al recibir un click esconde o muestra alternativamente el contenido de un elemento DIV
        res.innerHTML = `Total: ${resultado}`; //STYLE Ya es el estilo que le queramos dar 
        res.style.color = "green"; //elegimos el color que queramos
    }else{
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;  //InnerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento
        res.style.color = "red";
    }
}

function mostrar(){
    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
    let Opcion = parseInt(document.getElementById("opc").value)
    switch(Opcion){ //SWITCH evalúa una expresión, comparando el valor de esa expresión con una instancia case 
        case 1: //CASE Una instancia case valorN es usada para ser comparada con la expresión
            sumar(n1, n2)
            break;
        case 2:
            restar(n1, n2)
            break;
        case 3:
            multiplicar(n1, n2)
            break;
        case 4:
            dividir(n1, n2)
            break; //BREAK finaliza la ejecución de la instrucción do , for , switch o while más próxima que la incluya
        default: //DEFAULT  permite exportar funciones, objetos o clases como valores por defecto desde un módulo
            alert("Opcion no válida") //ALERT esta funcion nos sirve para que le salga al usuario una alerta de que no eligio alguna opcion valida
    }
}