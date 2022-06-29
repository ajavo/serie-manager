import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Serie } from '../../models/Serie';
import { SerieService } from '../../services/serie/serie.service';
import { Remarks } from '../../models/Remark';

@Component({
  selector: 'app-single-serie',
  templateUrl: './single-serie.component.html',
  styleUrls: ['./single-serie.component.css']
})
export class SingleSerieComponent implements OnInit {




  form!: FormGroup;

  serie!: Serie;

  remark!: Remarks[];

  constructor(private serieService: SerieService, private route: ActivatedRoute, private fb: FormBuilder, private router:Router) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.initForm();//réinitialiser formulaire a chaque actualisation

    this.serieService
    .getSerieById(+id)
    .then((serie: Serie) => {
      this.serie = serie;
    });
  }


createRemark(serieToAddRemark: Remarks, serieWhereAdd: Serie): void{
  this.serieService
  .addRemarks(serieToAddRemark, serieWhereAdd)
  .then(() =>{
    this.router.navigateByUrl('/series')
  })
}



  private initForm(): void{


    this.form = this.fb.group({
      date: [null, [Validators.required]],
      author: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(300)]],
      contents: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],

  });
}

  //onChangeDateRemark(dateString: string) {
   // this.remark.date = new Date(Date.parse(dateString));
 // }
}
