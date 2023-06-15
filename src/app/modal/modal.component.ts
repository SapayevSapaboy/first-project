import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  description?: any;
  title?: string;

  constructor(
    protected activeModal: NgbActiveModal
  ){}

  cancel(): void {
    this.activeModal.dismiss();
  }
}
