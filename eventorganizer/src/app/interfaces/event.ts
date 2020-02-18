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
    currentUserJoinEvent?: number;
    isJoinedEvent?: boolean;
}
