import { HttpMethod } from "../types/http-method";

export class ApiService {
    private static host: string = 'http://127.0.0.1:3000';

    private static async fetch<T>(method: HttpMethod, endpoint: string, body?: unknown): Promise<T> {
        const url = `${this.host}${endpoint}`;

        const response = await fetch(url, {
            method,
            body: body ? JSON.stringify(body) : null
        });
        return await response.json();
    }

    public static get<T>(endpoint: string): Promise<T> {
        return this.fetch('GET', endpoint);
    }

    public static post<T>(endpoint: string, body: unknown): Promise<T> {
        return this.fetch('POST', endpoint, body);
    }

    public static put<T>(endpoint: string, body: unknown): Promise<T> {
        return this.fetch('PUT', endpoint, body);
    }

    public static delete<T>(endpoint: string): Promise<T> {
        return this.fetch('DELETE', endpoint);
    }
}