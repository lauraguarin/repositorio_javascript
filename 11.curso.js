// uso de variables
//typeof muestra el tipo de datos//

//tipo string//
 var nombre='laura';
 console.log(nombre)
 console.log (typeof(nombre));
// tipo  numerico//
 var edad =17;
 console.log(edad);
 console.log (typeof(edad));

//tipo string//
 edad ='diecisiete'
 console.log(edad) ;
 console.log(typeof(edad));

//los numeros decimales  se definen  en .//
 var sueldo=1000.00;
 console.log (sueldo);
 console.log (typeof(sueldo));

//tipo bollean//
 var tiene_usted_un_trabajo_estable=false;
 console.log (tiene_usted_un_trabajo_estable);
 console.log (typeof(tiene_usted_un_trabajo_estable));

//esta variable esta definida mas no asignada debido al typeof
//tipo undefined//
 var  puestodetrabajo;
 console.log (puestodetrabajo);

//tipo null//
 puestodetrabajo=null;
 console.log (puestodetrabajo);

/* comentarios dentro del sistema*,se selecciona todo.*/
// nos sirven para definir partes importantes o decir el modo de uso.

/*opeadores matematicos *,/,+,-,*/
 var edadlaura,edadbestie,direferenciaedad;
 var sumaedades,yearlaura,year;
//se escribe en ingles ya que la ñ presenta datos erroneos.
 edadlaura=17;
 edadbestie=16;
 yearactual=2022;
 direferenciaedad = edadlaura - edadbestie;
 sumaedades = edadlaura + edadbestie;
 yearlaura = yearactual - edadlaura;
 yearbestie = yearactual - edadbestie;
//concatena los valores de texto con el de la suma.
 console.log(direferenciaedad);
 console.log(sumaedades);
 console.log('año en que nacio laura',+ yearlaura);
 console.log('año en que nacio  bestie',+ yearbestie);
 console.log(yearactual * 5);
 console.log(yearactual / 2);
//operadores logicos son <> <= >=  == /
 var edadlaura,edadbestie,direferenciaedad;
 edadlaura=17;
 edadbestie=16;
 var mayorlaura = ! (edadlaura!=edadbestie);
 console.log(mayorlaura);

//operadores unarios ++incremento y --decremento/
//dentro de la impresion se puede colocar el operador perto dentro de ()/
 edadlaura++;
 console.log(edadlaura);
 edadbestie--;
 console.log(edadbestie)
//asignacion +=,-=,*=,/= ,%= /
 var a =12;
 var b =5;
 var c =a % 5 ;//residiuo de la operacion
 console.log(c);
 a+=b;
 console.log(a);


