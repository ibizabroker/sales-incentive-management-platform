import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_model/user';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.userService.createUser(this.user).subscribe(data => {
      console.log(data);
      this.goToUsersList();
    },
    error => console.log(error));
  }

  goToUsersList() {
    this.router.navigate(['/user-list']);
  }

  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }

}
