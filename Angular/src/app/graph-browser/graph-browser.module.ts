import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphCanvasComponent } from './components/graph-canvas/graph-canvas.component';
import { EntityDetailCardComponent } from './components/entity-detail-card/entity-detail-card.component';
import { GraphBrowserComponent } from './graph-browser.component';



@NgModule({
  declarations: [
    GraphCanvasComponent,
    EntityDetailCardComponent,
    GraphBrowserComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GraphBrowserComponent
  ]
})
export class GraphBrowser { }
