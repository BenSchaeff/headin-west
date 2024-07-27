import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  exports: [
    MatToolbarModule, RouterModule, MatListModule, MatSidenavModule, MatIconModule, MatButtonModule
  ]
})
export class MaterialModule {}
