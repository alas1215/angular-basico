import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponet } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
declarations: [
    HeroeComponet,
    ListadoComponent
],
exports: [
    ListadoComponent
],
imports: [
    CommonModule
]

})

export class HeroesModule {

}