import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {CoursesComponent} from "./components/courses.component";
import { SpringComponent } from './spring/spring.component';
import {SpringService} from "./spring/spring.service";
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SpringComponent,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    SpringService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
