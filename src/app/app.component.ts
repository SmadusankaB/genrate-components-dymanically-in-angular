import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Subscription } from 'rxjs';
import { TextViewComponent } from './text-view/text-view.component';
import { ImageViewComponent } from './image-view/image-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'genrate-components-dymanically-in-angular';
  @ViewChild("viewContainer", { read: ViewContainerRef }) container: any;
  componentRef: any
  factory: any;
  name: string
  message: string = 'Message';
  constructor(private resolver: ComponentFactoryResolver) { }

  createComponent(type: string) {

    this.container.clear();

    if (type == 'text') {
      this.factory = this.resolver.resolveComponentFactory(TextViewComponent);
      this.name = 'I am a Text View'
    } else {
      this.factory = this.resolver.resolveComponentFactory(ImageViewComponent);
      this.name = 'I am an Image View'
    }

    this.componentRef = this.container.createComponent(this.factory);
    this.componentRef.instance.name = this.name;

    const sub: Subscription = this.componentRef.instance.newValue.subscribe((event: string) => {
      this.message = event;
    });
    this.componentRef.onDestroy(() => { sub.unsubscribe(); console.log("Unsubscribing") });
  }
}
