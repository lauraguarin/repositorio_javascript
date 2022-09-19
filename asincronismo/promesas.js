function base (){
    return new Promise((resolve,reject)=>{

        if(true){
resolve();
setTimeout(() => {
    console.log('la linea de codigo dentro de promesa')
},500);

}else{
reject(new Error('holito como estas'))
}
});
}

base()
.then(()=>{
    console.log('en el .then')
    return 'holi io anadaba po aqui '
})
.then((dato)=>{
    console.log('en el then 2 recibo :',dato)
})
.then (auxiliar)
.catch(error=>console.log('se activo el reject'))
function auxiliar(){
    console.log('funcion auxiliar')
}
//control kc (pa lo de los cometarios )
// const mifuncion=new Promise ((resolve,reject)=>{
//     resolve();
//     setTimeout(() => {
//         console.log('la linea de codigo dentro de promesa')
//     },500);
// })
