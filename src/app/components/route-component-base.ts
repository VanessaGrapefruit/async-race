import { ComponentBase } from "./component-base";

export abstract class RouteComponentBase extends ComponentBase {
    public abstract url: string;

    private parent!: HTMLElement;
    protected container!: HTMLElement;
    private isShown: boolean = false;

    public render(parent: HTMLElement): void {
        this.parent = parent;
        this.container = document.createElement('div');
    }

    public show(): void {
        if (!this.isShown) {
            this.isShown = true;
            this.parent.appendChild(this.container);
        }
    }

    public hide(): void {
        if (this.isShown) {
            this.isShown = false;
            this.parent.removeChild(this.container);
        }
    }
}