import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieBannerComponentComponent } from './cookie-banner-component/cookie-banner-component.component';



@NgModule({
  declarations: [
    CookieBannerComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CookieBannerComponentComponent
  ]
})
export class CookieBannerModule { }
