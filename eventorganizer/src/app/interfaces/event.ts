export interface Event {
<<<<<<< HEAD
    title: string;
    date: Date;
=======
    id?:number;
    creationDate:Date;
    eventStartDate: Date;
    describe: string;
    title:string;
    price?: number;
>>>>>>> 650686b7b39ecd2d1bb383ab716e740696ab175c
    min?: number;
    max?: number;
    messages?:string[];
    category: string;
    active:boolean;
}
