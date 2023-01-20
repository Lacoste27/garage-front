export interface IResponse {  
    data: any,
    message: Object,
    success: boolean,
    error: boolean
}

export interface IRole {  
    nom: string
}

export interface IUser {  
    nom:string,
    prenom: string,
    email:string,
    role : IRole
}