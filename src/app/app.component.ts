import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'magicorp';
  private _darkTheme = new Subject<boolean>();
  isDarkTheme: Observable<boolean> = this._darkTheme.asObservable();

  constructor(
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

}
