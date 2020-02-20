export interface User {
    id?:number;
    pictureId?: number;
    username: string;
    email?:string;
    registrationDate?:string;
    password?:string;
    Events?: Event[];
}
