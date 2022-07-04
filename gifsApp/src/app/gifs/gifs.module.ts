import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    ResultsComponent,
    SearchComponent
  ],
  exports:[
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
