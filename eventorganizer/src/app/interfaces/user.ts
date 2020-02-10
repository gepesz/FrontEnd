export interface User {
    id?:number;
    img?: Blob;
    username: string;
    email?:string;
    registrationDate?:string;
    password?:string;
    Events?: Event[];
}
