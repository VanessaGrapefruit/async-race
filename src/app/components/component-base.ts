import { EventEmitter } from "../classes/event-emitter";

export abstract class ComponentBase {
    public abstract render(parent: HTMLElement, ...data: unknown[]): void;

    public constructor(protected readonly eventEmitter: EventEmitter) {}

    public renderElement(parent: HTMLElement, tag: string, className?: string, content?: string): HTMLElement {
        const element = document.createElement(tag);
        
        if (className) {
            element.className = className;
        }
        if (content) {
            element.textContent = content;
        }

        parent.appendChild(element);
        return element;
    }
}