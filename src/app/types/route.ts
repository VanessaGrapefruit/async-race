import { EventEmitter } from "../classes/event-emitter";
import { RouteComponentBase } from "../components/route-component-base";

export interface Route {
    title: string;
    url: string;
    component: new (eventEmnitter: EventEmitter, ...args: unknown[]) => RouteComponentBase;
}