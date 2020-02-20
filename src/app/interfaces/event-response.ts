import { Event } from './event';

export interface EventResponse {
    success: boolean;
    events: Event[];
}

