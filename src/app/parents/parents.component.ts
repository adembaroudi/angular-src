import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {
  public cdata: any;
  table = [] ;

  constructor() { }
   CData(data) {
     this.table.push(data);
     console.log(data);

   }

  ngOnInit() {
  }

}
