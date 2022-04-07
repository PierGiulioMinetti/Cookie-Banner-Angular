import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieBannerService {

  constructor() { }





  // ________________CODE FROM HERE_________________________

  disableBanner(cookieBanner: HTMLDivElement) {
    cookieBanner.classList.remove('active');
    localStorage.setItem("cookieAccepted", "true");
  }

  triggerBanner(cookieContainer: HTMLDivElement) {

    const _cookieContainer = cookieContainer;
    console.log(_cookieContainer);

    setTimeout(() => {
      if (!localStorage.getItem("cookieAccepted")) {

        _cookieContainer.classList.add("active");
      }
    }, 2000)
  }



}
