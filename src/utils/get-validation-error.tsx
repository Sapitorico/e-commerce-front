import type { TypeWithKey } from "../models/type-with-key"

const getValidaitonError = (errorCode: any) =>{
    const codeMatcher: TypeWithKey<string> = {
        "400_BAD_REQUEST": "Solicitud incorrecta. Por favor verifica los datos enviados.",
        "409_CONFLICT": "Conflicto. El recurso ya existe o hay un problema con los datos enviados.",
        "500_INTERNAL_SERVER_ERROR": "Error interno del servidor. Por favor intenta de nuevo más tarde.",
        "USER_ALREADY_EXIST": "El correo o número de teléfono ya han sido registrados.",
    }
    return codeMatcher[errorCode]
}

export default getValidaitonError
