const producto = require('./producto');
class promocion{
    _productos = []
    constructor(cantidad_descuento){
        this._cantidad_descuento = cantidad_descuento;
    }
    get cantidad_descuento(){
        return this._cantidad_descuento;
    }
    set cantidad_descuento(cantidad_descuento){
        this._cantidad_descuento = cantidad_descuento;
    }
    agreagar_producto(producto){
        this._productos.push(producto);
    }
}

module.export = promocion;