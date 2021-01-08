import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-entity-detail-card',
  templateUrl: './entity-detail-card.component.html',
  styleUrls: ['./entity-detail-card.component.css']
})
export class EntityDetailCardComponent implements OnInit {

  public showCard = false;

  @Output() clickedClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.showCard = true, 10);
  }

  public sendCloseUp(): void {
    this.clickedClose.emit();
  }

}
