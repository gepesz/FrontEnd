export interface Event {
    id?:number;
    userName?: string;
    eventStartDate?: Date;
    description?: string;
    title?:string;
    price?: number;
    minNumberOfPeople?: number;
    maxNumberOfPeople?: number;
    categoryName?: string;
}
