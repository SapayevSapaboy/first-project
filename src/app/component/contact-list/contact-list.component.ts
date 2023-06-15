import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { contact } from '../contactmodel';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  data: undefined | contact[];
  filteredData: undefined | contact[];
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.getcontact();

  }
  getcontact() {
    this.api.getcontact().subscribe(res => {
      this.data = res;
      this.filteredData = res;
    })
  }
  delete(id: number) {
    this.api.deletecontact(id).subscribe(res => {
      alert("Ishonchingiz komilmi!!")
      this.getcontact();
    })
  }

  search(event: any): void {
    const value = event.target.value;
    if (value && value.trim().length > 0) {
      this.filteredData = this.data?.filter(item => {
        return (item.firstname?.toLowerCase().includes(value.toLowerCase()) || 
        item.lastname?.toLowerCase().includes(value.toLowerCase()) || 
        item.phonenumber?.toString().toLowerCase().includes(value.toLowerCase()) || 
        item.city?.toLowerCase().includes(value.toLowerCase()))
      });
    } else {
      this.filteredData = this.data;
    }
  }
}
