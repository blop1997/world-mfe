import { Directive, ElementRef, HostListener, inject, input, Input, OnInit } from '@angular/core';
import { MFNavigateService } from '../services/mf-navigate.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[mfRouterLink]'
})
export class MFRouterLinkDirective implements OnInit {

  readonly mfRouterLink = input<any>("");
  readonly routerLinkActive = input<any>();
  readonly queryParams = input<any>();
  readonly mfeBase = input<any>();

  private mfNavigateService= inject(MFNavigateService)

  private elementRef = inject(ElementRef)


  ngOnInit(): void {
    this.suscribeNavigation();
    this.isActive();
  }

  @HostListener('click')
  navigate(): void {

    this.mfNavigateService.navigate(this.mfeBase(), this.mfRouterLink(), { queryParams: this.queryParams() });
  }

  suscribeNavigation(): void {
    this.mfNavigateService.navigation.subscribe(() => {
      this.isActive();
    });
  }

  isActive(): void {
    if (this.routerLinkActive()) {
        this.elementRef.nativeElement.classList.add(this.routerLinkActive());
    }
  }
}
