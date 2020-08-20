import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'magicorp';

  constructor(
    public authService: AuthService,
    public breakpointObserver: BreakpointObserver
  ) { }

}
