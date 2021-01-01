import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { TextViewComponent } from './text-view/text-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageViewComponent,
    TextViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
