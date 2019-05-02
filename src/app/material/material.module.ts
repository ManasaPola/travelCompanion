import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatTableModule,
    Material.MatPaginatorModule,
    Material.MatSortModule
  ],
  exports: [
    Material.MatTableModule,
    Material.MatPaginatorModule,
    Material.MatSortModule
  ]
})
export class MaterialModule { }
