import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success">
               <p>Ushbu veb-sayt foydalanuvchi tajribasini yaxshilash uchun cookie-fayllardan foydalanadi</p>
             </div>`,
  styles: ["div {margin: 10px 0px; padding: 10px 20px; backgraud-color: #FAD7A0; text-align:center;}","p{font-size: 14px;}"]
})
export class NotificationComponent {

}
