import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isNew = false;
  authMsg = '';
  lastUrl = '';
  hide = true;
  signInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  signUpForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    passwordConfirm: new FormControl('')
  });

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    this.isNew = this.route.snapshot.url[0].path === 'signup'
  }

  onSubmit() {
    if (this.isNew) {
      let form = this.signUpForm.value;
      this.userService.createUser(form.username, form.password).subscribe(
        _ => {
          this.router.navigate(['/signin'], (!this.lastUrl)? {} : { queryParams: { lastUrl: this.lastUrl } })
        },
        error => this.authMsg = error
      );
    } else {
      let form = this.signInForm.value;
      this.authService.setToken(form.username, form.password).subscribe(
        _ => {
          if (!this.lastUrl) this.router.navigate(['/'])
          else window.location.href = this.lastUrl
        },
        error => this.authMsg = error
      );
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.lastUrl = params['lastUrl'];
    });
  }

}
