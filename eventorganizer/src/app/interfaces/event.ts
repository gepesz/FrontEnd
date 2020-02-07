export interface Event {
    title: string;
    date: Date;
    min?: number;
    max?: number;
    describe: string;
    category: string;
    eventName: string;
    price?: number;
}
