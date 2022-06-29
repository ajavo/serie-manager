import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthComponent } from './views/auth/auth.component';
import { EditSerieComponent } from './views/edit-serie/edit-serie.component';
import { ErrorComponent } from './views/error/error.component';
import { NewSerieComponent } from './views/new-serie/new-serie.component';
import { SeriesListComponent } from './views/series-list/series-list.component';
import { SingleSerieComponent } from './views/single-serie/single-serie.component';




//path we want in our application for a view
const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'series', canActivate: [AuthGuard], component: SeriesListComponent },
  {path: 'series/new', canActivate:[AuthGuard],component: NewSerieComponent},
  {path: 'series/:id', canActivate:[AuthGuard],component: SingleSerieComponent},
  {path: 'series/edit/:id', canActivate:[AuthGuard],component: EditSerieComponent},
  {path: 'not-found', component: ErrorComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
