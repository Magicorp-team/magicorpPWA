import { Component, AfterViewInit, AfterContentChecked } from '@angular/core';
import { AuthService } from './service/auth.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, AfterContentChecked {
  title = 'magicorp';
  private _darkTheme = new Subject<boolean>();
  isDarkTheme: Observable<boolean> = this._darkTheme.asObservable();
  lastUrl = '';

  constructor(
    private route: ActivatedRoute,
    public authService: AuthService,
    public breakpointObserver: BreakpointObserver
  ) { }

  ngAfterViewInit(): void {
    if (!localStorage.darkMode) this._darkTheme.next((window.matchMedia("(prefers-color-scheme: dark)")).matches);
    else this._darkTheme.next(localStorage.darkMode == "true");
  }

  toggleDarkTheme(checked: boolean) {
    localStorage.darkMode = checked;
    this._darkTheme.next(checked);
  }

  ngAfterContentChecked() {
    this.route.queryParams.subscribe(params => {
      this.lastUrl = (params['lastUrl'] == undefined || params['lastUrl'] == '') ?
        (location.pathname != '/signin' && location.pathname != '/signup') ?
          location.href : params['lastUrl'] : params['lastUrl'];
    });
  }

}
