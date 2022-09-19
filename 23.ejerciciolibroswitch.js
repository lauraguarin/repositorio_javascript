/*
1 agregar producto 
2 eliminar producto 
3 ordenar 
4 sobre escribir  
5 buscar 
6 salir 

*/
var opcion = Math.floor(Math.random() * 10)

listadeproductos = ['huevos','pan','cafe','naranjas']
while ( opcion !=6){
    console.log(opcion)
    while (opcion>6) {
        console.log('no se encuentra dentro de las opciones')
        var opcion = Math.floor(Math.random() * 10)
        console.log(opcion)
    }
    switch (opcion) {
        case 1:
            listadeproductos.push('cereal')
            console.log(listadeproductos)
          break;
        case 2:
           listadeproductos.pop()
           console.log(listadeproductos)
          break;
        case 3:
          listadeproductos.sort()
          console.log(listadeproductos)
          break;
        case 4:
          listadeproductos.splice((Math.floor(math.random() * listadeproductos.length))-1,1,'huevos ','leche')
          console.log(listadeproductos)
          break;
        case 5:
          var buscado =listadeproductos.indexOf('cafe')
          console.log(`cafe esta en la posicion ${buscado}`)
          break;
        
      }

    var opcion = Math.floor(Math.random() * 10)
    console.log('--------------------------------------------------------------------------')
}