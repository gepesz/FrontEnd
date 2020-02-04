export interface Event {
    date: Date;
    min?: number;
    max?: number;
    describe: string;
    category: string;
    eventName: string;
    price?: number;
}
