import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieBannerComponentComponent } from './cookie-banner-component.component';

describe('CookieBannerComponentComponent', () => {
  let component: CookieBannerComponentComponent;
  let fixture: ComponentFixture<CookieBannerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookieBannerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieBannerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
