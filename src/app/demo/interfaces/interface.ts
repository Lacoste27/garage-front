import { SortDirection } from "@angular/material/sort";
import { SortColumn } from "../services/table/sortable.directive";

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
  paiement?: any;
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
      _id?: string;
      cause: string;
      solution: string;
      prix: number;
      etat: string;
    }
  ];
  status: string;
  sortie?: any
}

export interface DetailsReparations {
  _id: string;
  cause: string;
  solution: string;
  prix: number;
  etat: ReparationVoitureEtat;
}

export enum ReparationEtat {
  deposer = "Deposer",
  encours = "En cours de réparation",
  fini = "Finis",
  sortie = "Sortie",
}

export enum ReparationVoitureEtat {
  encours = "En cours",
  fini = "Finis",
}

export enum DepenseType {  
  salaire = "salaire",
  loyer = "loyer",
  achat_piece ="achat pièces"
}

export interface IStatistique  {  
  all: number,
  encours:number,
  finis: number,
  sortie: number
}

export interface ISearchResult{
  reparations: IReparation[],
  total: number
}

export interface State{
  page: number;
	pageSize: number;
	searchTerm: string;
	sortColumn: SortColumn;
	sortDirection: SortDirection;
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

export interface IDepense {  
  _id?: string,
  date: Date,
  motif: string,
  montant: number,
  atelier?: object
}
