import { CarsApiService } from "../services/cars-api.service";
import { Car } from "../types/car";
import { CarCardComponent } from "./car-card";
import { RouteComponentBase } from "./route-component-base";

export class GarageComponent extends RouteComponentBase {
    public url: string = 'garage';

    private cardWrapper!: HTMLElement;

    private cards: CarCardComponent[] = [];

    public render(parent: HTMLElement): void {
        super.render(parent);
        this.container.classList.add('app-garage');

        this.cardWrapper = this.renderElement(this.container, 'div', 'card-wrapper');

        CarsApiService.getCars().then(cars => this.renderCards(cars));
    }

    private renderCards(cars: Car[]): void {
        this.cards = [];

        cars.forEach(car => {
            const component = new CarCardComponent(this.eventEmitter, car);
            component.render(this.cardWrapper);
            this.cards.push(component);
        });
    }
}