import { Injectable } from "@angular/core";
import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent,
    HttpResponse
} from '@angular/common/http'

import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Injectable()

export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService:AuthService,private router:Router){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('intercept request:', req)

        return next.handle(req).pipe(
            tap((event:HttpEvent<any>)=>{
                if(event instanceof HttpResponse){
                    console.log('intercept respons',event)
                }
            })
        )
    }
}