
  class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
    this.color = color;
    this.currentSpeed = currentSpeed;
 this.maxSpeed = maxSpeed;
 }
 //primer metodo
 move() {
 console.log("moving at", this.currentSpeed);
 }
 //segundo metodo
 accelerate(amount) {
 this.currentSpeed += amount;
 }
}
/*es la clase moto y hereda  usando un extends  cuentan como una secundaria y hacemos uso del metodo
*/
class Motorcycle extends Vehicle {
  //color ,velocidad,velocidad maxima y combustible
 constructor(color, currentSpeed, maxSpeed, fuel) {
  //es como llamamos el constructor de la clase padre y se coloca dentrde super para que sepa que es necesaria
 super(color, currentSpeed, maxSpeed);
 this.fuel = fuel;
 }
 //es un metodo lo podemos llamar como queramos
 doWheelie() {
 console.log("Driving on one wheel!");
 }
}
let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class persona{
  constructor (nombre,documento){
    this._nombre=nombre;
    this._documento=documento;
  }
//obtener
get nombre(){
  return this._nombre;
}
get documento(){
  return this._documento;
}
set nombre(nombre){
  this._nombre=nombre
  }
set documento(documento){
  this._documento=documento
  }
 
}
class aprendiz extends persona{
  constructor(nombre,documento,ficha){
super (nombre,documento);
this._ficha=ficha;
  }
  get ficha(){
  return this._ficha;
}
set ficha(ficha){
  this._ficha=ficha
  }
  imprimirtodo(){
    console.log(this.nombre)
    console.log(this.documento)
    console.log(this.ficha)
  }
}
//se ponen los valores que quiero siendo esta la clase padre 
let ob1=new persona('laura guarin',1023367585)
//aqui coloco los valores que deseo  que se pongan dentro del metodo 
let ob2 =new aprendiz('samuel padilla',56666666,'ADSI');
console.log (ob1)
console.log(ob2)
//otro metodo para que genere un cambio en el ob2.
ob2._ficha=('medio ambiente');
console.log(ob2)
// esta es otra formaa de cambiarlo.
ob2.nombre="william guarin";
console.log(ob2)
ob2.imprimirtodo();
// se coloca asi para que me muestre los cambios luego de cada modificacion en los datos.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//otra forma de proteger los datos 
class persona1{
  #nombre
  #apellido
  constructor(nombre,apellido){
    this.#nombre=nombre;
    this.#apellido=apellido;
  }
  get nombre(){
    return this.#nombre
  }
  get apellido(){
    return this.#apellido 
  }
}
let objeto =new persona1('laura','guarin');
let objeto2 =new persona1('yerli','martinez')
console.log(objeto.nombre)
console.log (objeto.apellido)
console.log(objeto2.nombre)
console.log (objeto2.apellido)
module.exports=persona1
