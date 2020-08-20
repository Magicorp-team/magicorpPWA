import { Component, ViewChild, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../class/user';
import { MatTableDataSource } from '@angular/material/table';
import { SignLogs } from '../class/sign-logs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  errorMsg = '';
  dataSource: MatTableDataSource<SignLogs>;

  constructor(
    private userService: UserService
  ) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe(
      user => {
        this.user = user;
        this.dataSource = new MatTableDataSource(user.signLogs);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => this.errorMsg = error
    );
  }

}
