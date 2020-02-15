import { Category } from './category';

export interface NewEvent {
    eventStartDate: Date;
    description: string;
    title: string;
    price?: number;
    minNumberOfPeople?: number;
    maxNumberOfPeople?: number;
    category: number | Category;
}
