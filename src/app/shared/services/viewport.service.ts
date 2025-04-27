import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewportService {

  private _headerSize = signal<number>(0);
  headerSize = this._headerSize.asReadonly();

  private _footerSize = signal<number>(0);
  footerSize = this._footerSize.asReadonly();

  innerHeight = window.innerHeight;

  constructor() { }

  setHeaderSize(offsetHeight: number | undefined) {
    if (offsetHeight) this._headerSize.set(offsetHeight);
  }

  setFooterSize(offsetHeight: number | undefined) {
    if (offsetHeight) this._footerSize.set(offsetHeight);
  }
}
