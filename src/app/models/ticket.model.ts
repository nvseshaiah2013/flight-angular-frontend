import { Flight } from './flight.model';
import { User } from './user.model';

export class Ticket {
    ticket_id:number;
    status:string;
    flight:Flight;
    user:User;
    name:string;
    age:number;
    gender:string;
    idNo:string;
    idType:string;
}