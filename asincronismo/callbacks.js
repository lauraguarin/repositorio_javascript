function receptora (cb1,cb2,parametro){
    cb1();
    setTimeout(() => {
       console.log('dentro de la funcion receptora') 
    },0);
    /*depende de la posicion en la que se esta agregando*/
    cb2(parametro)
}
function funcionargumento(parametro){
    //ESTA FUNCION COMO TAL ESTA DENTRO DLE ARGUMENTO DIRECTAMENTE DE LA LLMAAD QUE AREMOS 
    console.log(`${parametro} de la funcion argumento`)
}
//receptora(funcionargumento,'wolis bonis')
/* fFUNCION ANONIMA TIPO FLECHA */
receptora(()=>console.log('funcion anonima'),funcionargumento,'wolito como tas')

/*

function trabajoArreglos(cb1,cb2){
    let vec=[]
        setTimeout(() => {
        console.log(vec)
    }, 1000);
    vec=cb1(vec);
    console.log(cb2(vec));
    }
    
    // function cualquierFunction(vec){
    //     console.log(`El parametro es de tipo ${typeof(vec)}`)
    //     return [];
    // }
    
    function llenaArreglo(vec){
    for (let i = 0; i < 10; i++) {
        vec[i]=Math.round(Math.random()*100)    
        }
        return vec;
    }
    function sumarArreglo(vec){
        let suma=0
        for (let i = 0; i < vec.length; i++) {
            suma+=vec[i];
        }
           return suma;
    }   
    
    trabajoArreglos(llenaArreglo,sumarArreglo);
   */
    function llenaArreglo(vec){
        for (let i = 0; i < 10; i++) {
            vec[i]=Math.round(Math.random()*100)    
            }
            return vec;
        }
    let vector=[]
    llenaArreglo(vector);
    //console.log(vector);
    
    function trabajoArreglos(cb1,cb2,vec){
        let vec1=[]
        vec1=vec;
            console.log(cb1(vec1))
            setTimeout(() => {
            console.log(vec1)
        }, 2000);
    
        console.log(cb2(vec1));
        }
        
        // function cualquierFunction(vec){
        //     console.log(`El parametro es de tipo ${typeof(vec)}`)
        //     return [];
        // }
        
        
        function sumarArreglo(vec){
            let suma=0
            for (let i = 0; i < vec.length; i++) {
                suma+=vec[i];
            }
               return suma;
        }
        
        function promedioArreglo(vec){
            suma=0;
            for (let i = 0; i < vec.length; i++) {
                suma+=vec[i];            
            }
            return suma/vec.length;
        }
        
        trabajoArreglos(sumarArreglo,promedioArreglo,vector);
/*trabajo*/
/*intento fallido
function letrasmayusculas(string){
    console.log( string.pperCase());
}
letrasmayusculas('hola esta es mi prueba de miniscula a mayuscula')
 function letrasminusculas(string1){
    console.log( string1.toLowerCase()); 
 }
letrasminusculas('HOLA ESTA ES MI PRUEBA DE MAYUSCULA A MINUSCULA')*/
function todas(cb1, cb2, cadena) {
    cb1(cadena)
    cb2(cadena)
    console.log('el total de mayusculas es: ' + cb1(cadena));
    console.log('el total de minusculas es: ' + cb2(cadena));
}


function contarMayusculas(cadena) {
    var contar = 0;
    var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < mayusculas.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if (cadena[x] == mayusculas[i]) {
                contar += 1;
            }
        }
    }
    return contar;
}


function contarminusculas(cadena) {
    var contar = 0;
    var minusculas = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < minusculas.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if (cadena[x] == minusculas[i]) {
                contar += 1;
            }
        }
    }
    return contar;
}



todas(contarMayusculas, contarminusculas, 'HOLA como ESTAS,MI nombre ES laUra')

