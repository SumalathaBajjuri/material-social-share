import { Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable()
export class DefaultShareInfoService {
  private _img: string;
  private _title: string;
  private _summary: string;
  private _url: string;

  constructor(protected _dt: Title) { }

  get img() {
    // todo query a default img from meta
    return this._img;
  }

  set img(i) { this._img = i; }

  get title() {
    return this._title || this._dt.getTitle();
  }

  set title(t) { this._title = t; }

  get summary() {
    // todo query  a default summary from meta
    return this._summary;
  }

  set summary(s) { this._summary = s; }

  get url() {
    return this._url || window.location.href;;
  }

  set url(u) { this._url = u; }
} 
