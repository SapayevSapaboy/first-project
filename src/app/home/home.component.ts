import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { contact } from '../component/contactmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
}
