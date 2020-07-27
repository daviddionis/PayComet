const { Moneda } = require("./tiposDeDatos");


class DatosOperacion {
    constructor(idioma, orderId, precio, urlOk, urlKo, moneda = Moneda.EUR, secure3D = true){
        this.idioma = idioma;
        this.orderId = orderId;
        this.precio = precio;
        this.urlOk = urlOk;
        this.urlKo = urlKo;
        this.moneda = moneda;
        this.secure3D = secure3D;
    }

    getIdioma() {
        return this.idioma;
    }

    getOrderId() {
        return this.orderId;
    }

    getPrecio() {
        return this.precio;
    }

    getUrlOk() {
        return this.urlOk;
    }

    getUrlKo() {
        return this.urlKo;
    }

    getMoneda() {
        return this.moneda;
    }

    getSecure3D() {
        return this.secure3D;
    }

    setIdioma(idioma){
        this.idioma = idioma;
    }
    
    setOrderId(orderId) {
        this.orderId = orderId
    }
    
    setPrecio(precio){
        this.precio = precio;
    }

    setUrlOk(urlOk) {
        this.urlOk= urlOk;
    }

    setUrlError(urlError){
        this.urlKo = urlError;
    }
    
    setMoneda(moneda){
        this.moneda = moneda;
    }

    setSecure3D(secure3D){
        this.secure3D = secure3D;
    }


    
}

module.exports = DatosOperacion;