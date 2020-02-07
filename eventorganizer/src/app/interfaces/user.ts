export interface User {
    id?:number;
    img?: Blob;
    username: string;
    email?:string;
    registrationDate?:string;
    Events?: Event[];
}
