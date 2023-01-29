import { Component, OnInit, ViewChild } from '@angular/core';
import ApexCharts from 'apexcharts';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";
import { IResponse } from 'src/app/demo/interfaces/interface';
import { StatistiqueService } from 'src/app/demo/services/statistique/statistique.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
  fill: ApexFill,
  plotOptions: ApexPlotOptions
};

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})


export class StatistiqueComponent implements OnInit {

  tempMoyen: number = 0;

  @ViewChild("jourchart") jourchart: ChartComponent;
  public jourChartOptions: Partial<ChartOptions>;
  datasJour: any[] = [];
  datesJour: any[] = [];


  @ViewChild("months") months: ChartComponent;
  public montChart: Partial<ChartOptions>;
  chiffreMoisMitambatra: any[] = [];
  depenseMoisMitambatra: any[] = [];
  beneficeMoisMitambatra: any[] = [];
  datesMitambatra: any[] = [];

  public month = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juill', 'Aout', 'Sept', 'Oct', 'Nov'];

  constructor(private statistiqueService: StatistiqueService) {

  }

  ngOnInit(): void {
    this.statistiqueService.tempsMoyenDeRéparation().subscribe((reponse: IResponse) => {
      if (reponse.success) {
        console.log(reponse);
        this.tempMoyen = reponse.data.tempsmoyen[0].numSecond;
      }
    });

    this.statistiqueService.chiffreAffaireParJour().subscribe((reponse: IResponse) => {
      if (reponse.success) {

        this.datasJour = [];
        this.datesJour = [];

        reponse.data.chiffreJour.forEach(element => {
          this.datasJour.push(element.chiffre);
          this.datesJour.push(element._id);
        });

        this.jourChartOptions = {
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.8,
              opacityTo: 0.8,
              stops: [0, 90, 100]
            }
          },
          series: [
            {
              name: 'Montant',
              data: this.datasJour,

            }
          ],
          chart: {
            type: "area",
            height: 350,
            zoom: {
              enabled: true
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "smooth",
            width: 2
          },
          labels: this.datesJour,
          xaxis: {
            type: "datetime"
          },
          yaxis: {
            opposite: true
          },
          legend: {
            horizontalAlign: "left"
          }
        }

      }

    });

    this.statistiqueService.chiffreAffaireParMois().subscribe((reponse: IResponse) => {
      if (reponse.success) {
        console.log(reponse);

        var datasMois = [];
        var datesMois = [];

        reponse.data.chiffreMonth.forEach(element => {
          datasMois.push(element.total_cost_month);
          datesMois.push(element._id.year + ' ' + this.month[element._id.month - 1]);
        });



        this.statistiqueService.depenseParMois().subscribe((reponse: IResponse) => {
          if (reponse.success) {
            console.log(reponse);

            var datasdepenseMois = [];
            var datesdepenseMois = [];

            reponse.data.depenseMonth.forEach(element => {
              datasdepenseMois.push(element.total_cost_month);
              datesdepenseMois.push(element._id.year + ' ' + this.month[element._id.month - 1]);
            });


          }

          //Chiffre d'affaire
          for (var i = 0; i < datesMois.length; i++) {
            if (!this.datesMitambatra.includes(datesMois[i])) {
              this.datesMitambatra.push(datesMois[i]);
              this.chiffreMoisMitambatra.push(datasMois[i]);
              this.depenseMoisMitambatra.push(0);
            } else {
              var indexDate = this.datesMitambatra.findIndex(x => x == datesMois[i]);
              this.chiffreMoisMitambatra[indexDate] = datasMois[i];
            }
          }

          //Dépense par mois
          for (var i = 0; i < datesdepenseMois.length; i++) {
            if (!this.datesMitambatra.includes(datesdepenseMois[i])) {
              this.datesMitambatra.push(datesdepenseMois[i]);
              this.depenseMoisMitambatra.push(datasdepenseMois[i]);
              this.chiffreMoisMitambatra.push(0);
            } else {
              var indexDate = this.datesMitambatra.findIndex(x => x == datesdepenseMois[i]);
              this.depenseMoisMitambatra[indexDate] = datasdepenseMois[i];
            }
          }

          //Benefice par mois
          for (var i = 0; i < this.datesMitambatra.length; i++) {
            console.log(this.chiffreMoisMitambatra[i] + '-' + this.depenseMoisMitambatra[i]);
            this.beneficeMoisMitambatra[i] = this.chiffreMoisMitambatra[i] - this.depenseMoisMitambatra[i];
          }

          //Triage
          this.statistiqueService.trierDatesMonths(this.datesMitambatra, this.chiffreMoisMitambatra, this.depenseMoisMitambatra, this.beneficeMoisMitambatra);


          this.montChart = {
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.8,
                opacityTo: 0.8,
                stops: [0, 90, 100]
              }
            },
            series: [
              {
                name: 'Chiffre d\'affaire',
                data: this.chiffreMoisMitambatra,
              }, {
                name: 'Dépense',
                data: this.depenseMoisMitambatra
              }, {
                name: 'Bénéfice',
                data: this.beneficeMoisMitambatra
              }
            ],
            chart: {
              type: "area",
              height: 350,
              zoom: {
                enabled: true
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: "smooth",
              width: 2
            },
            labels: this.datesMitambatra,
            xaxis: {
              //type: "datetime"
            },
            yaxis: {
              opposite: true
            },
            legend: {
              horizontalAlign: "left"
            }
          }
        });
      }
    });





  }

}

