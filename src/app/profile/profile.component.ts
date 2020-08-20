import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../class/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  errorMsg = '';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe(
      user => this.user = user,
      error => this.errorMsg = error
    );
  }

}
