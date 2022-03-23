import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParentComponent} from "./parent/parent.component";
import {PageNotFoundComponentComponent} from "./page-not-found-component/page-not-found-component.component";

const routes: Routes = [
  {path: 'home', component: ParentComponent},
  {path: '', redirectTo: 'home', pathMatch: 'prefix'},
  {path: '**', component: PageNotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
