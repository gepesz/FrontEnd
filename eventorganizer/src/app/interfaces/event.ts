import { Comments } from './comments';

export interface Event {
    id?:number;
    pictureId?: number;
    userName?: string;
    eventStartDate?: Date;
    description?: string;
    title?:string;
    price?: number;
    minNumberOfPeople?: number;
    maxNumberOfPeople?: number;
    categoryName?: string;
    numberOfParticipants?: number;
    registeredForEvent?: boolean;
    comments?: Comments[];
}
