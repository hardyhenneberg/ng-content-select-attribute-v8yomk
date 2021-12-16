import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildComponent } from '.././child/child.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [BrowserModule, FormsModule, FlexLayoutModule, MatCardModule, MatToolbarModule],
  declarations: [AppComponent, HelloComponent, ChildComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
