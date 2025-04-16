import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpStatusCode } from '@angular/common/http';

import { Observable, catchError, of, tap, Subject, BehaviorSubject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private userImageSource = new BehaviorSubject<string | null>(null);
  userImage$ = this.userImageSource.asObservable();
  private errorMessage: string = "Something went wrong. Please try again after sometime.";
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  private logoutSubject = new Subject<void>();
  public logoutAction$ = this.logoutSubject.asObservable();
  public href: any;
  IsError: boolean = false;
  isSystemAlert: boolean = false;
  public renderer: Renderer2;
  constructor(private router: Router,  private http: HttpClient, private _renderer: RendererFactory2) {
    this.renderer = _renderer.createRenderer(null, null);
  }

  doGet(apiUrl: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders()
    };
    let loginData = localStorage.getItem('authToken');
    // loginData = loginData != null ? this.Decrypt(loginData) : null;
    if (loginData) {
      // httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + loginData);
      httpOptions.headers = httpOptions.headers.set('Access-Control-Allow-Origin', '*');
      httpOptions.headers = httpOptions.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    }
    return this.http.get<any>(apiUrl, httpOptions).pipe(
      tap(() => console.log(`doGet success`)),
      catchError((error: HttpErrorResponse) => {
        // this.checkAuthorize(error);
        return throwError(() => error);
      })
    );
  }

  doPost(apiUrl: string, postData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
      )
    };
    let loginData = localStorage.getItem('authToken');
    if (loginData) {
      // httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + loginData);
      httpOptions.headers = httpOptions.headers.set('Access-Control-Allow-Origin', '*');
      httpOptions.headers = httpOptions.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    }
    return this.http.post<any>(apiUrl, postData, httpOptions).pipe(
      tap(() => console.log(`doPost success`)),
      catchError((error: HttpErrorResponse) => {
        // this.checkAuthorize(error);
        return throwError(() => error);
      })
    );
  }

  // doPut(apiUrl: string, putData: any): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders(
  //     )
  //   };
  //   let loginData = localStorage.getItem('authToken');
  //   if (loginData) {
  //     // httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + loginData);
  //     httpOptions.headers = httpOptions.headers.set('Access-Control-Allow-Origin', '*');
  //     httpOptions.headers = httpOptions.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
  //   }
  //   const url = `${environment.BaseURL}${apiUrl}`;
  //   return this.http.put<any>(url, putData, httpOptions).pipe(
  //     tap(() => this.log(`doGet success`)),
  //     catchError((error: HttpErrorResponse) => {
  //       // this.checkAuthorize(error);
  //       return throwError(() => error);
  //     })
  //   );
  // }

  // doDownloadPost(apiUrl: string, postData: any) {
  //   const httpOptions = {
  //     headers: new HttpHeaders()
  //   };
  //   let loginData = localStorage.getItem('authToken');
  //   if (loginData) {
  //     httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + loginData);
  //     httpOptions.headers = httpOptions.headers.set('Access-Control-Allow-Methods', '*');
  //   }
  //   const url = `${environment.BaseURL}${apiUrl}`;
  //   return this.http.post(url, postData, { headers: httpOptions.headers, observe: "response", responseType: "blob" });
  // }

  // doDelete(apiUrl: String, idtoDelete: any): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders(
  //     )
  //   };
  //   let loginData = localStorage.getItem('authToken');
  //   if (loginData) {
  //     httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + loginData);
  //     httpOptions.headers = httpOptions.headers.set('Access-Control-Allow-Origin', '*');
  //     httpOptions.headers = httpOptions.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
  //   }

  //   const options = {
  //     headers: httpOptions.headers,
  //     body: {
  //       UserId: idtoDelete
  //     }
  //   };
  //   const url = (`${environment.BaseURL}${apiUrl}`);
  //   return this.http.delete<any>(url, httpOptions).pipe(
  //     tap(() => this.log(`doGet success`)),
  //     catchError((error: HttpErrorResponse) => {
  //       // this.checkAuthorize(error);
  //       return throwError(() => error);
  //     })
  //   );
  // }

  // Check Authorize Role
  // checkAuthorize(error : any) {
  //   if (error.status == HttpStatusCode.Unauthorized) {
  //     if (this.IsError == false) {
  //       this.IsError = true
  //       this.toster.error("ErrorMessageConstants.Message");
  //     }
  //     this.spinner.hide();
  //     this.dialog.closeAll();
  //   }
  //   else if (error.status == HttpStatusCode.Forbidden) {
  //     if (this.IsError == false) {
  //       this.IsError = true
  //       this.toster.error(TokenConstants.Session_Expired);
  //       localStorage.clear();
  //     }
  //     this.appService.logout();
  //     this.spinner.hide();
  //     this.dialog.closeAll();
  //   }
  //   else if (error.status === HttpStatusCode.InternalServerError) {
  //     this.toster.error(ErrorMessageConstants.Message)
  //     this.appService.logout();
  //     this.spinner.hide();
  //     this.dialog.closeAll();
  //   }
  //   else {
  //     var errorMessage = (error.error.message != null) ? error.error.message : error.message
  //   }
  // }
}