export interface Event {
    id?:number;
    userName?: string;
    eventStartDate?: Date;
    description?: string;
    title?:string;
    price?: number;
    minNumberOfPeople?: number;
    maxNumberOfPeople?: number;
    numberOfPeopleSignedUp?:number;
    categoryName?: string;
    rating?:number;
    pastEvent?:boolean;
}
