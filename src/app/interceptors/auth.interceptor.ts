import { HttpInterceptor, HttpInterceptorFn } from "@angular/common/http";
import { apiProdutos } from "../configurations/environment";

export const AuthInterceptor : HttpInterceptorFn = (req, next) => {

    if (req.url.includes(apiProdutos)) {
        var data = sessionStorage.getItem('usuario') as string;
        var json = JSON.parse(data);

        const request = req.clone({
            setHeaders: { Authorization : 'Bearer ' + json.token}
        });

        return next(request);

    } 

    return next(req);
}