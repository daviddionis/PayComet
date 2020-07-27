const DatosOperacion = require("./DatosOperacion.class");
const { Idioma } = require("./tiposDeDatos");
const PayComet = require("./paycomet");

const datosOperacion = new DatosOperacion(Idioma.CASTELLANO, '11', 10,'https://optimustours.com', 'https://optimustours.com' );

const procesar = new PayComet('qx8c2say', '15790', 'zctv2b6cbm4z6nkhgc3v');
console.log(procesar.generarEndPointIframe(datosOperacion));