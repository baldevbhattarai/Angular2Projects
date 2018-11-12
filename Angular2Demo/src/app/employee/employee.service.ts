
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

// Import Http & Response from angular HTTP module
import { Http, Response } from '@angular/http';
// Import Observable from rxjs/Observable
import { Observable } from 'rxjs/Observable';
// Import the map operator
import 'rxjs/add/operator/map';

// The @Injectable() decorator is used to inject other dependencies
// into this service. As our service does not have any dependencies
// at the moment, we may remove the @Injectable() decorator and the
// service works exactly the same way. However, Angular recomends
// to always use @Injectable() decorator to ensures consistency
@Injectable()
export class EmployeeService {
    // Inject Angular http service
    constructor(private _http: Http) { }

    getEmployees(): Observable<IEmployee[]> {
        // To convert Observable<Response> to Observable<IEmployee[]>
        // we are using the map operator
        return this._http.get('http://localhost:64475/api/employees')
            .map((response: Response) => <IEmployee[]>response.json());
    }
}