import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TheaterComponent } from './theater/theater.component';
import { ScreenComponent } from './screen/screen.component';
import { ShowComponent } from './show/show.component';
import { MovieComponent } from './movie/movie.component';
import { TheaterdeleteComponent } from './theaterdelete/theaterdelete.component';
import { ScreendeleteComponent } from './screendelete/screendelete.component';
import { ShowdeleteComponent } from './showdelete/showdelete.component';
import { MoviedeleteComponent } from './moviedelete/moviedelete.component';
import { ErrorComponentComponent } from './error-component/error-component.component';


const routes: Route[] = [

{path:'theater',component:TheaterComponent},
{path:'screen',component:ScreenComponent},
{path:'show',component:ShowComponent},
{path:'movie',component:MovieComponent},
{path:'theaterdelete',component:TheaterdeleteComponent},
{path:'screendelete',component:ScreendeleteComponent},
{path:'showdelete',component:ShowdeleteComponent},
{path:'moviedelete',component:MoviedeleteComponent},
{path:'**',component:ErrorComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
