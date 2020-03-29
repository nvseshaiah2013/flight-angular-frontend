export class BookingRequest{

    name:string;
    age:number;
    gender:string;
    idType:string;
    idNo:string;
    flight_code:string;
    constructor(name:string,age:number,gender:string,idType:string,idNo:string,flight_code?:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.idType = idType;
        this.idNo = idNo;
    }

    setFlight_code(flight_code:string):void{
        this.flight_code = flight_code;
    }
}