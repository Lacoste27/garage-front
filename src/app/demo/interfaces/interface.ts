export interface IResponse {
  data: any;
  message: Object;
  success: boolean;
  error: boolean;
}

export interface IRole {
  nom: string;
}

export interface IUser {
  nom: string;
  prenom: string;
  email: string;
  role: IRole;
}

export interface IUserRequest {
  nom: string;
  prenom: string;
  email: string;
  password: string;
}

export interface IVoiture {
  numero: string;
  marque: string;
  model: string;
}

export interface IReparation {
  _id: string;
  date_depot: Date;
  date_sortie: Date;
  paiement: {};
  client: {
    nom: string;
    prenom: string;
    email: string;
  };
  voiture: IVoiture;
  reparateur: {
    id: string;
    nom: string;
    prenom: string;
    email: string;
  };
  reparation_faire: [
    {
      cause: string;
      solution: string;
      prix: string;
      etat: string;
    }
  ];
  status: string;
}

export enum ReparationEtat {
  deposer = "Deposer",
  encours = "En cours de réparation",
  fini = "Sortie",
}

export enum ReparationVoitureEtat {
  encours = "En cours",
  fini = "Finis",
}


export interface IPaiment {
  date: string,
  mode: string,
  recu: string,
  rendu: string,
  valideur: {},
  valid: number
}

export interface Paiement {
  mode: string,
  recu: string
}
