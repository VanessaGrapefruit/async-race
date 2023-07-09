type Callback<T> = (data: T) => void;

export class EventEmitter {
    private subscribersMap: Map<string, Callback<unknown>[]> = new Map<string, Callback<unknown>[]>();

    public emit<T>(event: string, data: T): void {
        const subscribers = this.subscribersMap.get(event);

        subscribers?.forEach(callback => {
            callback(data);
        });
    }

    public subscribe<T>(event: string, callback: Callback<T>): void {
        const callbacks = this.subscribersMap.get(event) || [];

        this.subscribersMap.set(event, [...callbacks, callback as Callback<unknown>]);
    }

    public unsubscribe<T>(event: string, callback: Callback<T>): void {
        const callbacks = this.subscribersMap.get(event) || [];

        this.subscribersMap.set(event, callbacks.filter(item => item !== callback));
    }
}