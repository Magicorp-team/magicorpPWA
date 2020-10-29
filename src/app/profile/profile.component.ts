import { Component, ViewChild, OnInit } from '@angular/core';
import { DiscordService } from '../service/discord.service';
import { UserService } from '../service/user.service';
import { User } from '../class/user';
import { MatTableDataSource } from '@angular/material/table';
import { SignLogs } from '../class/sign-logs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private userService: UserService,
    private discordService: DiscordService,
    private router: Router
  ) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.getUser();
    this.route.queryParams.subscribe(params => {
      if (params['code']) {
        this.discordService.linkDiscordAccount(params['code']).subscribe(
          discord => this.user.discord = discord,
          error => this.errorMsg = error
        );
        this.router.navigate([], {queryParams: {code: null}, queryParamsHandling: 'merge'});
      }
    });
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

  unlinkDiscord(): void {
    this.discordService.unlinkDiscordAccount().subscribe(
      _ => this.user.discord = null,
      error => this.errorMsg = error
    );
  }

}
