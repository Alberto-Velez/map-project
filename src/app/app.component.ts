import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
<nav>
 <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
 <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
 <a routerLink="/addspot" routerLinkActive="active">Fave places</a>
</nav>
<router-outlet></router-outlet>

  `
})
export class AppComponent {
  title = 'Cool spots to visit';

}
