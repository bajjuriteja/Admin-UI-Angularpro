import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheaterComponent } from './theater/theater.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ScreenComponent } from './screen/screen.component';
import { ShowComponent } from './show/show.component';
import { MovieComponent } from './movie/movie.component';
import { TheaterdeleteComponent } from './theaterdelete/theaterdelete.component';
import { ScreendeleteComponent } from './screendelete/screendelete.component';
import { ShowdeleteComponent } from './showdelete/showdelete.component';
import { MoviedeleteComponent } from './moviedelete/moviedelete.component';
import { ErrorComponentComponent } from './error-component/error-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TheaterComponent,
    ScreenComponent,
    ShowComponent,
    MovieComponent,
    TheaterdeleteComponent,
    ScreendeleteComponent,
    ShowdeleteComponent,
    MoviedeleteComponent,
    ErrorComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
