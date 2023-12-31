import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { __param } from 'tslib';
import { contact } from '../contactmodel';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit{
  public contactid!:number;
  public contactdata: contact = {} as contact;
  constructor(private api:ApiService, private activatedroute:ActivatedRoute, private route:Router){}
    ngOnInit():void {
       this.activatedroute.params.subscribe((param:Params)=>{
        this.contactid = param['id']
       })
       this.api.fetchdate(this.contactid).subscribe((data:contact)=>{
        this.contactdata=data;
        console.log(data)
       }) 
    }
    update(){
      this.api.updatecontact(this.contactdata, this.contactid).subscribe((res:contact)=>{
        alert("Ishonchingiz komilmi!")
        this.route.navigate(['./contactlist'])
      })
    }
}
