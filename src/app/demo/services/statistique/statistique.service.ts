import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  private base_url = "https://back-m1p10mean.onrender.com/reparations/";
  private local_url = "http://localhost:3000/statistiques/";

  public month = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juill', 'Aout', 'Sept', 'Oct', 'Nov'];

  constructor(private http: HttpClient) { }

  tempsMoyenDeRéparation() {
    return this.http.get(this.local_url + 'tempsmoyen');
  }

  chiffreAffaireParJour(debut = null, fin = null) {
    var urlChiffreParJour = this.local_url + 'chiffreday';
    if (debut != null && debut != "" && debut != undefined && fin != null && fin != "" && fin != "") {
      urlChiffreParJour += '/?debut=' + debut;
      urlChiffreParJour += '&fin=' + fin;
    }
    return this.http.get(urlChiffreParJour);
  }

  chiffreAffaireParMois() {
    return this.http.get(this.local_url + 'chiffremonth');
  }

  depenseParMois() {
    return this.http.get(this.local_url + 'depensemonth');
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
