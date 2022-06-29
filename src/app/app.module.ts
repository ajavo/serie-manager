import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './views/auth/auth.component';
import { ErrorComponent } from './views/error/error.component';
import { SingleSerieComponent } from './views/single-serie/single-serie.component';
import { HeaderComponent } from './components/header/header.component';
import { NewSerieComponent } from './views/new-serie/new-serie.component';
import { EditSerieComponent } from './views/edit-serie/edit-serie.component';
import { SerieFormComponent } from './components/serie-form/serie-form.component';
import { SeriesListComponent } from './views/series-list/series-list.component';
import { AuthService } from './services/auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SerieService } from './services/serie/serie.service';
import { RemarkFormComponent } from './components/remark-form/remark-form.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ErrorComponent,
    SingleSerieComponent,
    HeaderComponent,
    NewSerieComponent,
    EditSerieComponent,
    SerieFormComponent,
    SeriesListComponent,


    RemarkFormComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, SerieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
