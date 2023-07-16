import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectiveModule } from 'src/app/shared/directive/directive.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    DirectiveModule,
    RouterModule,
    IonicModule
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
