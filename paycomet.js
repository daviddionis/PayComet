const DatosOperacion = require('./DatosOperacion.class');
const { TipoOperacion } = require('./tiposDeDatos');
const { MD5, SHA512 } = require('crypto-js');

const endPoint = 'https://api.paycomet.com/gateway/xml-bankstore?wsdl';
const endPointUrl = 'https://api.paycomet.com/gateway/ifr-bankstore';


class PayComet {

    constructor(merchantCode, terminal, password){
        this.merchantCode = merchantCode;
        this.terminal = terminal;
        this.password = password;
    
    }

    generarFirmaHasheada(datosOperacion = new DatosOperacion) {
        return SHA512(`${this.merchantCode}${this.terminal}${TipoOperacion.PURCHASE}${datosOperacion.getOrderId()}${datosOperacion.getPrecio()}${datosOperacion.getMoneda()}${MD5(this.password)}`);
    }

    generarEndPointIframe(datosOperacion = new DatosOperacion) {
        const hash = this.generarFirmaHasheada(datosOperacion);
        return `${endPointUrl}?MERCHANT_MERCHANTCODE=${this.merchantCode}&MERCHANT_TERMINAL=${this.terminal}&OPERATION=${TipoOperacion.PURCHASE}&LANGUAGE=${datosOperacion.getIdioma()}&MERCHANT_MERCHANTSIGNATURE=${hash}&MERCHANT_ORDER=${datosOperacion.getOrderId()}&MERCHANT_AMOUNT=${datosOperacion.getPrecio()}&MERCHANT_CURRENCY=${datosOperacion.getMoneda()}&URLOK=${datosOperacion.getUrlOk()}&URLKO=${datosOperacion.getUrlKo()}&3DSECURE=${datosOperacion.getSecure3D() ? 1 : 0}`;
    }

}


module.exports = PayComet;
