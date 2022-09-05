let suma = 0
let promedio = 0
let mayor = 0
let menor = 100
let vector = []
let tam = Math.round(Math.random()*100)
console.log('valor de variables tam:',+ tam)
for (let i = 0; i < tam; i++) {
    vector[i] = Math.round(Math.random() * 100)

}
console.log(vector)
console.log('Tamaño de vector', +vector.length);
for (let i = 0; i < vector.length; i++) {
    suma = suma + vector[i]
    promedio = suma / vector.length
}
for (i = 0; i < vector.length; i++) {
    if (vector[i] > mayor)
        mayor = vector[i];
}
for (i = 0; i < vector.length; i++) {
    if (menor > vector[i])
        menor = vector[i];
}

console.log('La suma de todos los numeros es', +suma)
console.log('El promedio de todos los numeros es', +promedio)
console.log('el numero mayor es ', mayor)
console.log('el numero menor es ', menor)



/*
let arreglo = [10, 11, 28, 10, 5];

let mayorQueDiez = arreglo.filter(element => element > 10); //la condicon es que sean mayor que diez

console.log(mayorQueDiez) // [11, 28]*/

/*
let arreglo1 = [10, 11, 3, 02, 5, 20];

let incluyeVeinte = arreglo1.includes(20);

console.log(incluyeVeinte)

var busqueda = [3, 4, 7, 8, 56, 2, 9]
console.log('para buscar un elemento en :', +busqueda[4])

var selectionSort = arr => {
    for (let j = 0; j < arr.length; ++j) {
        let i = iMin = j;
        for (++i; i < arr.length; ++i) {
            (arr[i] < arr[iMin]) && (iMin = i);
        }
        [arr[j], arr[iMin]] = [arr[iMin], arr[j]];
    }

    return arr;
}

var arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
var result = selectionSort(arr);
result;



let vector2 = []
x = Math.round(Math.random() * 10)
let tam2 = Math.round((Math.random() * 20 - 10) + 10)
console.log('valor de variables tam:', +tam2)
for (let i = 0; i < tam2; i++) {
    vector2[i] = Math.round(Math.random() * 100)
}
console.log(vector2)
console.log(+x)
console.log('la ubicacion es ', vector2[(x)])
    //----------------------------------------------------------
var vector3 = [];
for (let i = 0; i < 10; i++) {
    vector3[i] = Math.round(Math.random() * 100)
}
console.log(vector3)

for (i = 0; i < (vector3.length - 1); i++) {
    for (j = i + 1; j < (vector3.length); j++) {
        if (vector3[i] < vector3[j]) {
            aux = vector3[j];
            vector3[j] = vector3[i];
            vector3[i] = aux;
        }
    }
}/*