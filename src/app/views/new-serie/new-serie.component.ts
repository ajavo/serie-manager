import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from '../../models/Serie';
import { SerieService } from '../../services/serie/serie.service';

@Component({
  selector: 'app-new-serie',
  templateUrl: './new-serie.component.html',
  styleUrls: ['./new-serie.component.css']
})
export class NewSerieComponent implements OnInit {

  constructor(private serieService: SerieService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSubmitNewSerie(serieToAdd: Serie): void{
    this.serieService
    .addSerie(serieToAdd)
    .then(() =>
      this.router.navigateByUrl('/series')
    );
  }
}
