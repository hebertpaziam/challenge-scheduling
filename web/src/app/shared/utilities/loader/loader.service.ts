import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {

  constructor() { }

  public loading: boolean = false;

  block() {
    this.loading = true;
  }
  unblock(){
    this.loading = false;
  }

}
