import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Serie } from 'src/app/models/Serie';
import { Remarks } from '../../models/Remark';


@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.component.html',
  styleUrls: ['./serie-form.component.css'],

})
export class SerieFormComponent implements OnInit {
  //@Output allows the child to send data to a parent component
  @Output() formSubmitted: EventEmitter<Serie>;

  //@Input()is to give a child component a way to communicate with its parent component.
  @Input() buttonLabel!: string;
  @Input() serieToEdit!: Serie;


  form!: FormGroup;

  serie!: Serie;



  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Serie>();

   }

  ngOnInit(): void {

// We do a private function to make the code more readable
    this.initForm();
  }

  //function to submit the form
    onSubmitSerieForm(): void{


      this.formSubmitted.emit(this.serie);


    }



//detail of the form's character fields: title, season date, critical description and image and comments
    private initForm(): void{

      this.serie = this.serieToEdit ? this.serieToEdit: new Serie(0,'',new Date,0,'','','',[new Remarks(0,new Date,'','')]);

      // Instantiate  to give the validators to each of the fields
    // For each control / field, we assign a key that we will reuse in the HTML with the formControlName
    // and an array. The first index will be the default (null in our case) and the second index will be
    // an array of Validators
      this.form = this.fb.group({
        title: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
        dateBegin: [null, [Validators.required]],
        seasons: [null, [Validators.required]],
        description: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(300)]],
        critical: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
        img: [null, [Validators.required, Validators.minLength(5)]],


    });
  }


//function to change date
  onChangeDateBegin(dateBeginString: string) {
      this.serie.dateBegin = new Date(Date.parse(dateBeginString));
    }

}

