import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent implements OnInit {
  @Input() name: string;
  @Output('sendValue') newValue: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.newValue.emit("From ImageView");
  }
}
