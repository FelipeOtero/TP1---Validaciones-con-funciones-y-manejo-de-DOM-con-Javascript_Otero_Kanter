let notaMatematica;
let notaLengua;
let notaEfsi;
let parrafoPromedio=document.getElementById('promedio');
let parrafoMayorNota=document.getElementById('mayorNota');
let notasMaterias;
let max;
let nombresMaterias = ["Matemática", "Lengua", "Efsi"];

function validaciones()       
{ 

    inputMatematica = document.getElementById('notaMatematica');
    inputLengua = document.getElementById('notaLengua');
    inputEfsi = document.getElementById('notaEfsi');
    
    notaMatematica = parseInt(inputMatematica.value);
    notaLengua = parseInt(inputLengua.value);
    notaEfsi = parseInt(inputEfsi.value);

    if (isNaN(notaMatematica) ||  notaMatematica <= 0 || notaMatematica > 10 ||
        isNaN(notaLengua) || notaLengua <= 0 || notaLengua > 10 ||
        isNaN(notaEfsi) || notaEfsi <= 0 || notaEfsi > 10
        )
    {
        alert("Completar los campos correctamente");

        if(notaMatematica<0 || notaMatematica>10 || isNaN(notaMatematica))
        {
            inputMatematica.style.borderColor = "red";
            
        }

        if (notaLengua<0||notaLengua>10|| isNaN(notaLengua))
        {
            inputLengua.style.borderColor = "red";
        }

        if (notaEfsi<0||notaEfsi>10|| isNaN(notaEfsi))
        {
            inputEfsi.style.borderColor = "red";
        }

        return false;

    } else { 
        inputMatematica.style.borderColor = "green";
        inputLengua.style.borderColor = "green";
        inputEfsi.style.borderColor = "green";
        return true; 
    }
}

function calcularPromedio() 
{   
    let validacion = validaciones();

    if (validacion) {
        let notaPromedio = (notaMatematica + notaLengua + notaEfsi) / 3;
        parrafoPromedio.innerText = "El promedio es " + notaPromedio;
        if (notaPromedio >= 6) {
            parrafoPromedio.style.color = "green";
        } else {
            parrafoPromedio.style.color = "red";
        }
        
    }

}

function encontrarMaximos(array) {
     max = -Infinity;  
    let i = 0;
    do {
        if (array[i] > max) {
            max = array[i];  
        } 
        i++;
    } while (i < array.length);
    return max;
}

function mayorNota() 
{       
    let validacion = validaciones();
    notasMaterias = [notaMatematica,notaLengua,notaEfsi];
    max = encontrarMaximos(notasMaterias);

    parrafoMayorNota.innerHTML = ``;

    for (let i = 0; i <= nombresMaterias.length; i++) {
        if (notasMaterias[i]==max) {
            parrafoMayorNota.innerHTML += `Una de la/s nota/s máximás es de la materia ${nombresMaterias[i]} con un valor de ${notasMaterias[i]} <br>`;
        }
    }
    
}