import type { TypeWihitKey } from "../models/type-with-key"

export const getValidaitonError = (errorCode: any) =>{
    const codeMtcher: TypeWihitKey<string> = {
        "USER_ALREADY_EXIST": "El usuario ya esta registrado"
    }
    return codeMtcher[errorCode]
}