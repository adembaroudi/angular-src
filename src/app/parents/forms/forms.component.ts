import { Component,  Output , EventEmitter} from '@angular/core';
import { Validators , FormControl , FormGroup  } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent  {
  hide = true;
  @Output() childEvent = new EventEmitter<any>();
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName : new FormControl('', Validators.required),
    email : new FormControl('', [ Validators.required , Validators.email]),
    mobile : new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(10)])

  });
  table = [];
constructor() { }
  onSubmit() {
    this.childEvent.emit(this.profileForm.value);
  }



}
