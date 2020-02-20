import { NewEvent } from './new-event';

export interface NewEventResponse {
    success: boolean;
    events: NewEvent[];
}
