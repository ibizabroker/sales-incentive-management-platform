import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_model/user';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userId: number;
  user: User = new User();
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.userService.getUserById(this.userId).subscribe(data => {
      this.user = data;
    })
  }

  onSubmit() {
    this.userService.updateUser(this.userId, this.user).subscribe( data =>{
        this.goToUsersList();
    },
    error => console.log(error));
  }

  goToUsersList() {
    this.router.navigate(['/user-list']);
  }

}
