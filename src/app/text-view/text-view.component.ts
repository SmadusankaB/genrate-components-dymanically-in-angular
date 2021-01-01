import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-view',
  templateUrl: './text-view.component.html',
  styleUrls: ['./text-view.component.scss']
})
export class TextViewComponent implements OnInit {
  @Input() name: string;
  @Output('sendValue') newValue: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.newValue.emit("From TextView");
  }

}
