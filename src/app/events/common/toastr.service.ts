import { Injectable } from '@angular/core';

declare let toastr: any;
@Injectable()
export class ToastrService {
    success(message: string, type?: string) {
        toastr.success(message, type);
    }
    info(message: string, type?: string) {
        toastr.info(message, type);
    }
    warning(message: string, type?: string) {
        toastr.warning(message, type);
    }
    error(message: string, type?: string) {
        toastr.error(message, type);
    }
}
