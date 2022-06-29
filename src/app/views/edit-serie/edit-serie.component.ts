import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Serie } from 'src/app/models/Serie';
import { SerieService } from '../../services/serie/serie.service';

@Component({
  selector: 'app-edit-serie',
  templateUrl: './edit-serie.component.html',
  styleUrls: ['./edit-serie.component.css']
})
export class EditSerieComponent implements OnInit {

  serie!: Serie;

  constructor(private serieService: SerieService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // Retrieve the id in the url + retrieve the serie which corresponds
    // From HTML, send it to the form component
    const id = this.route.snapshot.params['id'];

    this.serieService
    .getSerieById(+id)
    .then((serie: Serie) => {
      this.serie = serie;
    });
  }
  onSubmitEditedSerie(editedSerie: Serie): void{
    // Listen to the output to send the update of the offer via the API
    this.serieService
    .editSerie(editedSerie)
    .then(()=> {
      this.router.navigateByUrl(('/series'));
    });
  }
}
