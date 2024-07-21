import type { TypeWihitKey } from "../models/type-with-key"

const getValidaitonError = (errorCode: any) =>{
    const codeMtcher: TypeWihitKey<string> = {
        "400_BAD_REQUEST": "Se rompio todo",
        "USER_ALREADY_EXIST": "El usuario ya esta registrado",
        "500_INTERNAL_SERVER_ERROR": "Ha ocurrido un error en el servidor",
    }
    return codeMtcher[errorCode]
}

export default getValidaitonError