import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/Serie';
import { SerieService } from '../../services/serie/serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series!: Serie[];

  constructor(private serieService: SerieService) {

  }
  ngOnInit(): void {
    this.series = this.serieService.series;
  }
  onClickDeletSerie(arrayIndex: number): void{
    this.serieService
    .deleteSerie(this.series[arrayIndex].id)
    .then(() => {
     // this.books.splice(arrayIndex,1);
    })
  }


}
