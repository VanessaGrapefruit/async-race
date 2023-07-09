import { GarageComponent } from "../components/garage";
import { WinnersComponent } from "../components/winners";
import { Route } from "../types/route";

export const routes: Route[] = [
    { title: 'Garage', url: 'garage', component: GarageComponent },
    { title: 'Winners', url: 'winners', component: WinnersComponent },
];