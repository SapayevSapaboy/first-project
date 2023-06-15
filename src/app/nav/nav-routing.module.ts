import { NavComponent } from "./nav.component";
import { Route } from '@angular/router'

export const navRouting: Route =
{
    path: '',
    component: NavComponent,
    outlet: 'nav'
}