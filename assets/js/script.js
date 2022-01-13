/* el flujo es el orden en que se ejecutal las declaraciones que vamos programando */

let miVariable = 10;
console.log(miVariable);

/* estructuras de control de flujo */

let edad = 17;
let tienesINE = true;


if(edad >= 18 && tienesINE == true){
    console.log('puedes entrar')

}/* else{
    console.log('no puedes entrar')
    //else sirve para que se ejecute la parte del codigo dentro de else, si en if no se cumple la condicionante 
} */

/* operador ternario */
/* (condicion a evaluar) ? se ejecuta si es verdadero : se ejecuta si es falso*/

let edad1 = 19;
/* (edad1 >= 18) 
  ? console.log ('Mayor de edad') 
  : console.log ('Menor de edad'); */


  let pregunta = (edad1 >= 18) 
  ? 'Mayor de edad' 
  : 'Menor de edad';

  console.log(pregunta);

  let preguntaEdad = `Tengo ${edad1} años y soy ${(edad1 >=18) ? 'Mayor' : 'menor'} de edad`;
  console.log(preguntaEdad);

  /* let dia = 4; */

  /* if(dia === 0){
      console.log('domingo');
  }else if(dia === 1){
    console.log('lunes');
  } else if(dia === 2){
    console.log('Martes');
  }else if(dia === 3){
    console.log('miercoles');
  }else if(dia === 4){
    console.log('jueves');
  } else if(dia === 5){
    console.log('viernes');
  }else if(dia === 6){
    console.log('sabado');
  }else{
      console.log('ese no es un dia');  
    } */

    //switch 

    /* 
    switch (varrable a evbaluar){
        case valor:
            -codigo a ejecutar-
        break;
        case valor;
            -codigo a ejecutar-
        break;
        default:
            -codigo a ejecutar si sale de las opciones-
        break    

    } */
    /* let dia = 2;

    switch(dia){
       case 0:
            console.log('Domingo');
            break;
        case 1:
            console.log('Lunes');
            break;
        case 2:
            console.log('Martes');
            break;
        case 3:
            console.log('Miercoles');
            break;
        case 4:
            console.log('Jueves');
            break;
        case 5:
            console.log('Viernes');
            break;
        case 6:
            console.log('Sabado');
            break;
        default:
            console.log('No es un dia valido')
            break;                
        } */
    let cuponeDescuento = 'Oro'
    let descuentos;
    
    switch(cuponeDescuento){
        case 'bronce':
            descuentos = 5
            break;
        case 'Plata':
            descuentos = 10
            break;
        case 'Oro':
            descuentos = 15
            break;
        default:
            console.log('Cupon pirata');
            break;
}

console.log(descuentos)