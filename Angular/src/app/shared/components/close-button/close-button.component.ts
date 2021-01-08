import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.css']
})
export class CloseButtonComponent implements OnInit {

  @Output() clickedOnClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public clicked(): void {
    this.clickedOnClose.emit();
  }
}
