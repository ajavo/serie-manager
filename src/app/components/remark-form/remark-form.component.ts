import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Remarks } from '../../models/Remark';



//Decorator part explains to Angular what the following class will represent
@Component({
  selector: 'app-remark-form',
  templateUrl: './remark-form.component.html',
  styleUrls: ['./remark-form.component.css']
})
export class RemarkFormComponent implements OnInit {

form!: FormGroup;
remark!: Remarks;

//goes back to parent
@Output() formSubmitted: EventEmitter<Remarks>


  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Remarks>()
  }
 // form initialization :called only once when creating the component
  ngOnInit(): void {
    this.initForm()
  }
  //called only once when creating the component, and emit formSubmitted
  onSubmitRemarkForm(): void{
    this.formSubmitted.emit(this.remark);
  }
  //form creation
  private initForm(): void {
    this.remark = new Remarks(0,new Date(), '','')


    //detail of the author's character fields and the remarks
    this.form = this.fb.group({
      author: [
        null,
      [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(30),
    ],
  ],
  remark: [
    null,
    [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(80),
    ],
  ],
    })
  }
}
