import { Inject, Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
@Injectable()
export class ApiService {
    constructor(private http: HttpClient, private jwtService: JwtService) {

    }

    private formatErrors(err: any) {
        return throwError(err.error);
        
    }

    get(path: String, params: HttpParams = new HttpParams()): Observable<any> {
        
        return this.http.get(`${environment.api_url}${path}`, {params}).pipe(catchError(this.formatErrors)
    }

}