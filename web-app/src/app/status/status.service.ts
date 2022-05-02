import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Status } from './status'

@Injectable()
export class StatusService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private baseURL = 'http://localhost:3000';
  constructor(private htttp: Http) { }
  updateStatusList(order: Status): Promise<Status> {
    return this.htttp.put(this.baseURL + "/restaurant/status", JSON.stringify(order), {headers: this.headers})
      .toPromise()
      .then(res => {
        if (res.status == 201) {return order;} else {return null;}
      })
      .catch(this.catch);
  }
}
