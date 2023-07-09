import { ComponentBase } from "./components/component-base";
import { HeaderComponent } from "./components/header";
import { RouteComponentBase } from "./components/route-component-base";
import { routes } from "./const/routes";
import { Route } from "./types/route";

export class AppComponent extends ComponentBase {
    private container!: HTMLElement;

    private header = new HeaderComponent(this.eventEmitter, routes);

    private views: RouteComponentBase[] = [];

    public render(parent: HTMLElement): void {
        this.container = super.renderElement(parent, 'div', 'container');

        routes.forEach(route => {
            const component = new route.component(this.eventEmitter);
            component.render(this.container);
            this.views.push(component);
        });
        this.eventEmitter.subscribe('routeChanged', (route: Route) => this.onRouteChange(route));

        this.header.render(this.container);
    }

    private onRouteChange(route: Route): void {
        const activeView = this.views.find(view => view.url === route.url);
        const inactiveViews = this.views.filter(view => view.url !== route.url);

        activeView?.show();
        inactiveViews.forEach(view => view.hide());
    }
}