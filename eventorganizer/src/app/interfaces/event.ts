export interface Event {
    id?:number;
    creationDate:Date;
    eventStartDate: Date;
    describe: string;
    title:string;
    price?: number;
    min?: number;
    max?: number;
    messages?:string[];
    category: string;
    active:boolean;
}
