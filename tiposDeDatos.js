

const TipoOperacion = {
    PURCHASE: 1,
    PREAUTHORIZATION_CREATE_USER: 3,
    PREAUTHORIZATION_CANCEL_USER: 4,
    PREAUTHORIZATION_CONFIRM_USER: 6,
    SUBSCRIPTION_CREATE_USER: 9,
    PREAUTHORIZATION_CREATE_DEFERED_USER: 13,
    PREAUTHORIZATION_CANCEL_DEFERED_USER: 14,
    PREAUTHORIZATION_CONFIRM_DEFERED_USER0: 16,
    ADD_USER: 107,
    PURCHASE_USER_TOKEN: 109,
    SUBSCRIPTION_CREATE_USER_TOKEN: 110,
    PREAUTHORIZATION_CREATE_USER_TOKEN: 111,
}

const Idioma = {
    CASTELLANO: 'ES',
    INGLES: 'EN',
    FRANCES: 'FR',
    ALEMAN: 'DE',
    ITALIANO: 'IT'
}

const Algoritmo = {
    SHA_256: 'sha256',
    SHA_512: 'sha512',
    MD5: 'md5'
}

const RespuestaAddUser = function (errorId, result, urlRedirect) {
    this.errorId = errorId;
    this.result = result;
    this.urlRedirect = urlRedirect;
}

const Moneda = {
    EUR: 'EUR',
    USD: 'USD',
    GBP: 'GBP',
    JPY: 'JPY'
}


module.exports = { TipoOperacion, Idioma, Algoritmo, RespuestaAddUser, Moneda };
