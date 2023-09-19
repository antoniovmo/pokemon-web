import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

// Components
import {HeaderComponent} from "./header/header.component";



@NgModule({
  declarations: [
    HeaderComponent
  ],
    exports: [
        HeaderComponent
    ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class SharedModule { }
