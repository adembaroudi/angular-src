import { Component, OnInit, Input } from '@angular/core';
import { Validators , FormControl , FormGroup } from '@angular/forms';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  hide = true;

  @Input() parentevent: any[];
  editForm: FormGroup;
  index: number ;
  constructor() { }


  ngOnInit() {
       this.editForm = new FormGroup({
        firstName : new FormControl('', Validators.required),
        lastName : new FormControl('', Validators.required),
        email : new FormControl('', Validators.required),
        mobile : new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
 });
  }
  delete(i) {
    this.parentevent.splice(i, 1) ;
 }
  edit(i) {
    this.editForm = new FormGroup({
      firstName: new FormControl(this.parentevent[i].firstName),
      lastName : new FormControl(this.parentevent[i].lastName),
      email: new FormControl(this.parentevent[i].email),
      mobile : new FormControl(this.parentevent[i].lastName),
      password : new FormControl(this.parentevent[i].lastName),

    });
    this.index = i ;
  }
update() {
  this.parentevent[this.index] = this.editForm.value ;
}}
