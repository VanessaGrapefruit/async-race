import { EventEmitter } from "../classes/event-emitter";
import { Route } from "../types/route";
import { ComponentBase } from "./component-base";
import { GarageComponent } from "./garage";
import { WinnersComponent } from "./winners";

export class HeaderComponent extends ComponentBase {
    private header!: HTMLElement;
    private title!: HTMLElement;
    private menu!: HTMLElement;
    private menuItems: HTMLElement[] = [];

    public constructor(protected eventEmitter: EventEmitter, private routes: Route[]) {
        super(eventEmitter);
    }

    public render(parent: HTMLElement): void {
        this.header = this.renderElement(parent, 'header', 'app-header');
        this.title = this.renderElement(this.header, 'div', 'title');
        this.menu = this.renderElement(this.header, 'div', 'menu');

        this.routes.forEach(route => {
            const element = this.renderElement(this.menu, 'a', 'menu-item', route.title);
            element.dataset.url = route.url;
            this.menuItems.push(element);
        });

        this.onRouteChange(this.routes[0]);

        this.menu.addEventListener('click', e => {
            const element = e.target as HTMLElement;
            const url = element.dataset.url;
            const route = this.routes.find(item => item.url === url);
            this.onRouteChange(route!);
        });
    }

    private onRouteChange(route: Route): void {
        this.title.textContent = route.title;

        const activeElement = this.menuItems.find(item => item.dataset.url === route.url)!;
        const inactiveElements = this.menuItems.filter(item => item.dataset.url !== route.url);

        activeElement.classList.add('active');
        inactiveElements.forEach(element => element.classList.remove('active'));

        this.eventEmitter.emit('routeChanged', route);
    }
}