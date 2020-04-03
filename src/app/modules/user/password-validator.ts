import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
    static hasNumber(control: AbstractControl): { [key: string]: boolean } | null{
        const value = control.value;
        let pattern = /[0-9]/
        const isValid = pattern.test(value);
        if(isValid)
            return null;
        else 
            return { hasNum: true };
    }
    static hasCapitalLetter(control:AbstractControl) : {[key:string] : boolean} | null{
        const value = control.value;
        let pattern = /[A-Z]/
        const isValid = pattern.test(value);
        if (isValid)
            return null;
        else
            return { hasCap: true };
    }

    static hasSmallLetter(control: AbstractControl) : { [key:string] : boolean } | null {
        const value = control.value;
        let pattern = /[a-z]/
        const isValid = pattern.test(value);
        if (isValid)
            return null;
        else
            return { hasSmall: true };
    }
    static hasSymbol(control: AbstractControl) : { [key:string ]: boolean } | null {
        const value = control.value;
        let pattern = /[^\w\s]/
        const isValid = pattern.test(value);
        if (isValid)
            return null;
        else
            return { hasSym: true };
    }
    static passwordMatcher(control: AbstractControl) : {[key:string] : boolean } | null {
        const password = control.get('password').value;
        const cnfmPassword = control.get('confirmPassword').value;
        if(password == cnfmPassword)
            return null;
        else
            {
                control.get('confirmPassword').setErrors({notMatch:true});
            }
    }
}


