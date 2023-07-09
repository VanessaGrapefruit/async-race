import { AppComponent } from "./app/app";
import { EventEmitter } from "./app/classes/event-emitter";
import './style.css';

const eventEmitter = new EventEmitter();
new AppComponent(eventEmitter).render(document.body);