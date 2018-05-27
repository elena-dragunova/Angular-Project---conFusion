import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
//mport { LEADERS } from '../shared/leaders';

import { HttpClient, Response } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class LeaderService {

  constructor( private http: HttpClient, private ProcessHttpMsgService: ProcessHttpmsgService ) { }

  /*getLeaders(): Observable<Leader[]> {
    return Observable.of(LEADERS).delay(2000);
  }

  getLeader(id:number): Observable<Leader> {
    return Observable.of(LEADERS.filter((leader) => (leader.id === id))[0]).delay(2000);
  }

  getFeaturedLeader(): Observable<Leader> {
    return Observable.of(LEADERS.filter((leader) => leader.featured)[0]).delay(2000);
  }*/

  getLeaders(): Observable<Leader[]> {
    return this.http.get(baseURL + '/leaders')
        .map(res => { return this.ProcessHttpMsgService.extractData(res); });
  }

  getLeader(id: number): Observable<Leader> {
    return  this.http.get(baseURL + '/leaders/'+ id)
        .map(res => { return this.ProcessHttpMsgService.extractData(res); });
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get(baseURL + '/leaders?featured=true')
        .map(res => { return this.ProcessHttpMsgService.extractData(res)[0]; });
  }

}
