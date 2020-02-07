export interface Event {
    id?:number;
    username?:string;
    creationDate:Date;
    eventStartDate: Date;
    description: string;
    title:string;
    price?: number;
    minNumberOfPeople?: number;
    maxNumberOfPeople?: number;
    messages?:string[];
    category: string;
    active:boolean;
}
