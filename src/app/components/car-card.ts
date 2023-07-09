import { EventEmitter } from "../classes/event-emitter";
import { Car } from "../types/car";
import { ComponentBase } from "./component-base";

export class CarCardComponent extends ComponentBase {
    private container!: HTMLElement;
    private name!: HTMLElement;
    private id!: HTMLElement;

    public constructor(protected eventEmitter: EventEmitter, private car: Car) {
        super(eventEmitter);
    }

    public render(parent: HTMLElement): void {
        this.container = this.renderElement(parent, 'div', 'app-car-card');

        this.id = this.renderElement(this.container, 'div', 'id', `${this.car.id}`);
        this.name = this.renderElement(this.container, 'div', 'name', this.car.name);
    }
}