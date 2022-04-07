import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CookieBannerService } from '../services/cookie-banner.service';

@Component({
  selector: 'app-cookie-banner-component',
  templateUrl: './cookie-banner-component.component.html',
  styleUrls: ['./cookie-banner-component.component.scss']
})
export class CookieBannerComponentComponent implements OnInit {

  constructor(private bannerService: CookieBannerService) { }
  //properties
  btn!: HTMLButtonElement;
  banner!: HTMLDivElement;



  ngOnInit(): void {
  }

  //METHOD
  //trigger banner with a setTimeout (timeOut start after 2 seconds, and if the cookieAccepted variable isn't set is going to show the banner)
  trigger() {
    this.bannerService.triggerBanner(this.banner)
  }

  // function to disable banner
  cookieButtonClicked() {
    this.bannerService.disableBanner(this.banner);
  }


  ngAfterViewInit() {
    this.btn = document.querySelector('.cookie-btn') as HTMLButtonElement;
    this.banner = document.querySelector('.cookie-banner') as HTMLDivElement;

    this.trigger();
  }




}
