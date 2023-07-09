import { RouteComponentBase } from "./route-component-base";

export class WinnersComponent extends RouteComponentBase {
    public url: string = 'winners';
    
    public render(parent: HTMLElement): void {
        super.render(parent);
        this.container.classList.add('app-winners');
        this.container.textContent = 'Winners';
    }
}