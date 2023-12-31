import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { contact } from '../contactmodel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contactform: FormGroup | any;
  constructor(private formbuilder:FormBuilder,private router:Router,private api:ApiService, private http: HttpClient){}
  ngOnInit(): void {
    this.contactform=this.formbuilder.group({
      firstname:['',Validators.required],
      data:['',Validators.required],
      lastname:['',Validators.required],
      phonenumber:['',Validators.required],
      city:['',Validators.required],
    })
  }
submitcontact(data:contact){
 // console.log(this.contactform.value)
  this.api.addcontact(data).subscribe((res=>{

  }))
  this.contactform.reset();
  this.router.navigate(["/contactlist"])
}

}
