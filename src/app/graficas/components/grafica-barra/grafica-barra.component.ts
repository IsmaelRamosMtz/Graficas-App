import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true
  };

  @Input() barChartLabels: Label[] = [
    // '2020', '2021', '2022', '2023', '2024', '2025', '2026'
  ];

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Messi' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Crisitiano Ronaldo' },
    // { data: [8, 18, 84, 77, 54, 37, 10], label: 'Neymar jr', backgroundColor: '#000000', hoverBackgroundColor: 'black' }
  ];

  constructor() { }

  ngOnInit(): void {
    if(this.horizontal == true){
      this.barChartType = 'horizontalBar'
    }
  }

}
