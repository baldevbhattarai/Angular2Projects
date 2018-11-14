
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

// Import Http & Response from angular HTTP module
import { Http, Response } from '@angular/http';
// Import Observable from rxjs/Observable
import { Observable } from 'rxjs/Observable';
// Import the map operator
import 'rxjs/add/operator/map';
import 'rxjs/add/Observable/throw';


// The @Injectable() decorator is used to inject other dependencies
// into this service. As our service does not have any dependencies
// at the moment, we may remove the @Injectable() decorator and the
// service works exactly the same way. However, Angular recomends
// to always use @Injectable() decorator to ensures consistency
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {
    // Inject Angular http service
    constructor(private _http: Http) { }

    getEmployees(): Observable<IEmployee[]> {
        // To convert Observable<Response> to Observable<IEmployee[]>
        // we are using the map operator
        return this._http.get('http://localhost:64475/api/employees')
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
    }
    //getEmployeeByCode(empCode: string): Promise<IEmployee> {
    //    return this._http.get("http://localhost:64475/api/employees/" + empCode)
    //        .map((response: Response) => <IEmployee>response.json())
    //        .toPromise()
    //        .catch(this.handlePromiseError);
    //}

    getEmployeeByCode(empCode: string): Observable<IEmployee> {
        return this._http.get("http://localhost:64475/api/employees/" + empCode)
            .map((response: Response) => <IEmployee>response.json())
            .catch(this.handleError);
    }

    // This method is introduced to handle exceptions
    handlePromiseError(error: Response): Promise<any>{
        console.error(error);
        throw (error);
    }
    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }

}