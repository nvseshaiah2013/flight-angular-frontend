import { AbstractControl } from '@angular/forms';

export class IdentityValidator {
    static isValidPAN(control: AbstractControl) : { [key :string] : boolean } | null {
        if(control.value == '')
            return null;
        const value = control.value;
        let pattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/
        const isValid = pattern.test(value);
        if(isValid){
            return null;
        }
        else
            {
                return { invalidPan : true}
            }

    }
    static isValidPassport(control: AbstractControl): { [key: string]: boolean } | null {
        if (control.value == '')
            return null;
        const value = control.value;
        let pattern = /^[A-Z][0-9]{7}$/
        const isValid = pattern.test(value);
        if (isValid) {
            return null;
        }
        else {
            return { invalidPassport: true }
        }
    }

    static isValidDrivingLicense(control: AbstractControl): { [key: string]: boolean } | null {
        if (control.value == '')
            return null;
        const value = control.value;
        let pattern = /^((A[NPRS])|(BR)|(C[GH])|(D[LD])|(G[AJ])|(H[RP])|(J[KH])|(K[LA])|(L[AD])|(M[PHNLZ])|(NL)|(OD)|(P[BY])|(RJ)|(SK)|(T[NSR])|(U[PK])|(WB))(\d{1}[1-9])(20(([0-1][0-9])|(20)))(\d{6}[1-9])$/
        const isValid = pattern.test(value);
        if(isValid)
            return null;
        else 
            return {
                invalidDrivingLicense : true
            }
    }
    static isValidAadhar(control: AbstractControl): { [key: string]: boolean } | null {
        if (control.value == '')
            return null;
        const value = control.value;
        let pattern = /^[2-9][0-9]{11}$/
        const isValid = pattern.test(value);
        if (isValid) {
            return null;
        }
        else {
            return { invalidAadhar: true }
        }
    }
    
}