import { FormControl } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
// import { isNumber, toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';


export function DateValidate(control: FormControl): { [key: string]: boolean } | null {
    if(control.value == '')
        return null;
    const value = control.value;
   
    let date = parse(value);
    if(date === null)
    {   
        return {invalidDate : true}
    }
    return null;
}

function parse(value: string): NgbDateStruct | null {
    if (value != null) {
        // console.error(typeof value);
        if(typeof value =='object')
        {
            return value;
        }
        //console.error(typeof value);
        const dateParts = value.trim().split('-');
        // console.log(dateParts);
        if (dateParts.length === 3 && !Number.isNaN(parseInt(dateParts[0])) && !Number.isNaN(parseInt(dateParts[1])) && !Number.isNaN(parseInt(dateParts[2]))) {
            return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: toInteger(dateParts[2]) };
        }
    }
    return null;
}

function toInteger(value:any)
{
    return parseInt(value);
}