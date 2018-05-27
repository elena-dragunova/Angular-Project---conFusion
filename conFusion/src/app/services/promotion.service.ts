import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
//import { PROMOTIONS } from '../shared/promotions';

import { HttpClient, Response } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PromotionService {

  constructor( private http: HttpClient, private ProcessHttpMsgService: ProcessHttpmsgService ) { }

  /*getPromotions(): Observable<Promotion[]> {
    return Observable.of(PROMOTIONS).delay(2000);
  }

  getPromotion(id: number): Observable<Promotion> {
    return Observable.of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).delay(2000);
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return Observable.of(PROMOTIONS.filter((promo) => promo.featured)[0]).delay(2000);
  }*/

  getPromotions(): Observable<Promotion[]> {
    return this.http.get(baseURL + '/promotions')
        .map(res => { return this.ProcessHttpMsgService.extractData(res); });
  }

  getPromotion(id: number): Observable<Promotion> {
    return  this.http.get(baseURL + '/promotions/'+ id)
        .map(res => { return this.ProcessHttpMsgService.extractData(res); });
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get(baseURL + '/promotions?featured=true')
        .map(res => { return this.ProcessHttpMsgService.extractData(res)[0]; });
  }

}
