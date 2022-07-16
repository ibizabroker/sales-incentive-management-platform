import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_model/user';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(
    private usersService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.usersService.getUsersList().subscribe(data =>{
      this.users = data;
      console.log(this.users);
    });
  }

  updateUser(userId: number) {
    this.router.navigate(['update-user', userId ]);
  }

}
