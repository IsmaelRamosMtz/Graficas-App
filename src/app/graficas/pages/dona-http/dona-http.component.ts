import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  data: any = [];

  public doughnutChartLabels: Label[] = [];

  public doughnutChartData: MultiDataSet = [];

  public doughnutChartType: ChartType = 'doughnut'

  public colors: Color[] = [
    {
      backgroundColor: [
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63'
      ]
    }
  ]


  constructor(
    private _graficasService: GraficasService
  ) { }

  ngOnInit(): void {

    this._graficasService.getUsuariosRedesSocialesDonaData()
    .subscribe(({ labels, values}) => {
      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values);
      // this.doughnutChartData = values;
    });

    // forma 1
    // this._graficasService.getRedesSociales()
    // .subscribe(data => {
    //   // console.log(data);  
    //   const labels = Object.keys(data);
    //   const values = Object.values(data);
    //   console.log(labels);
    //   console.log(values);
    //   this.doughnutChartLabels = labels;
    //   this.doughnutChartData.push(values);
    // });

  }

}
