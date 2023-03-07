export class _Token{
    UserName:string;
    UserPassword:string;
    FirmId:number;
    IsAllTimeLogined:boolean;

    constructor(userName:string, userPassword:string, firmId:number, isAllTimeLogined:boolean){
        this.UserName = userName;
        this.UserPassword = userPassword;
        this.FirmId = firmId;
        this.IsAllTimeLogined = isAllTimeLogined;
    }
}