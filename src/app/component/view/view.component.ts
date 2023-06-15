import { ApiService } from 'src/app/api.service';
import { Component, OnInit } from '@angular/core';
import { contact } from '../contactmodel';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent  implements OnInit {

  contact: undefined | contact;
  constructor(private api: ApiService, private route: ActivatedRoute) { }
 ngOnInit(): void {
  let id:string  = this.route.snapshot.paramMap.get('id')!;
    this.getOneContact(id);
    
  }
  getOneContact(id:string) {
    this.api.getOneContact(Number(id)).subscribe(res => {
      this.contact = res;
    })
  }

}
