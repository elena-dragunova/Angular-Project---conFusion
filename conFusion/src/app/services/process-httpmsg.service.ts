import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient, Response } from '@angular/common/http';

@Injectable()
export class ProcessHttpmsgService {

  constructor() { }

  public extractData(res: Response) {
    let body = res;
    console.log(body);
    return body || { };
  }
}
