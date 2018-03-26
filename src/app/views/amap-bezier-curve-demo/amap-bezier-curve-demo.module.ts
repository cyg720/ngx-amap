import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AmapBezierCurveDemoRoutingModule } from './amap-bezier-curve-demo-routing.module';
import { SimpleComponent } from './simple/simple.component';
import { EventsComponent } from './events/events.component';
import { MethodsComponent } from './methods/methods.component';

@NgModule({
  imports: [
    CommonModule,
    AmapBezierCurveDemoRoutingModule,
    SharedModule
  ],
  declarations: [
    SimpleComponent,
    EventsComponent,
    MethodsComponent
  ]
})
export class AmapBezierCurveDemoModule { }
