import {computed, Injectable, OnDestroy, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewportService implements OnDestroy {

  private _headerSize = signal<number>(0);
  headerSize = this._headerSize.asReadonly();

  private _footerSize = signal<number>(0);
  footerSize = this._footerSize.asReadonly();

  private _innerHeight = signal<number>(window.innerHeight);
  innerHeight = this._innerHeight.asReadonly();


  constructor() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  private onResize() {
    this._innerHeight.set(window.innerHeight);
  }

  setHeaderSize(offsetHeight: number | undefined) {
    if (offsetHeight) this._headerSize.set(offsetHeight);
  }

  setFooterSize(offsetHeight: number | undefined) {
    if (offsetHeight) this._footerSize.set(offsetHeight);
  }
}
