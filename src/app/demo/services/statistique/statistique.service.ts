import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  private base_url = "https://back-m1p10mean.onrender.com/statistiques/";
  // private local_url = "http://localhost:3000/statistiques/";

  public month = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juill', 'Aout', 'Sept', 'Oct', 'Nov'];

  constructor(private http: HttpClient) { }

  tempsMoyenDeRéparation() {
    return this.http.get(this.base_url + 'tempsmoyen');
  }

  chiffreAffaireParJour() {
    return this.http.get(this.base_url + 'chiffreday');
  }

  chiffreAffaireParMois() {
    return this.http.get(this.base_url + 'chiffremonth');
  }

  depenseParMois() {
    return this.http.get(this.base_url + 'depensemonth');
  }

  countClientReparation(client: string){ 
    return this.http.get(this.base_url + 'client?email='+client);
  }

  countAtelierReparation(atelier: string){  
    return this.http.get(this.base_url + 'atelier?email='+atelier);
  }

  trierDatesMonths(dates, chiffre, depense, benefice) {
    for (var i = 0; i < dates.length - 1; i++) {
      for (var j = i + 1; j < dates.length; j++) {
        var dateEncoursSplit = dates[i].split(" ");
        var dateSuivantSplit = dates[j].split(" ");

        if (Number(dateEncoursSplit[0]) > Number(dateSuivantSplit[0])) {
          //Inverser date
          var temp = dates[i];
          dates[i] = dates[j];
          dates[j] = temp;

          // Inverser chiffre
          var chiffretemp = chiffre[i];
          chiffre[i] = chiffre[j];
          chiffre[j] = chiffretemp;

          // Inverser depense
          var depenseTemp = depense[i];
          depense[i] = depense[j];
          depense[j] = depenseTemp;

          //Inverser benefice
          var beneficeTemp = benefice[i];
          benefice[i] = benefice[j];
          benefice[j] = beneficeTemp;

        } else if (Number(dateEncoursSplit[0]) == Number(dateSuivantSplit[0])) {

          var indexMonthEncours = this.month.findIndex(x => x == dateEncoursSplit[1]);
          var indexMonthSuivant = this.month.findIndex(x => x == dateSuivantSplit[1]);

          if (indexMonthEncours > indexMonthSuivant) {
            //Inverser date
            var temp = dates[i];
            dates[i] = dates[j];
            dates[j] = temp;

            // Inverser chiffre
            var chiffretemp = chiffre[i];
            chiffre[i] = chiffre[j];
            chiffre[j] = chiffretemp;

            // Inverser depense
            var depenseTemp = depense[i];
            depense[i] = depense[j];
            depense[j] = depenseTemp;

            //Inverser benefice
            var beneficeTemp = benefice[i];
            benefice[i] = benefice[j];
            benefice[j] = beneficeTemp;
          }
        }

      }
    }
  }
}
