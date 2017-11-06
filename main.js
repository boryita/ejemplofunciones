"use strict"
/**
 * @file Este archivo contiene ejemplos de funciones con for
 * @author Borja Fariña Gonzalez    
 * @version 1.0
 */

 /**
  * @description sumaArray Suma los valores de un array
  * @param {Array} numeros array de numeros
  * @return {Number}
  */

function SumaArray(numeros){
    let suma= 0;
    for(let valor of numeros){
        suma=suma+valor
    }
    return suma;
}

function SumaArray2(numeros){
    let suma=0
    for(let pos in numeros){
        suma=suma+numeros[pos];
    }
    return suma
}

function SumaArray3(numeros){
    let suma=0
    for(let i=0;i<numeros.length;i++){
        suma=suma+numeros[i];
    }
    return suma;
}
    
let sumaValor=SumaArray3([2,3,4,5])
console.log(sumaValor);
