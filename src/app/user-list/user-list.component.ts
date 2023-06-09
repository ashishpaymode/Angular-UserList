import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[]=[];
  constructor(private userService:UserService) {
    
   }

  ngOnInit(): void {
    let user:User=new User();
    user.id=100;
    user.firstName="rongali";
    user.lastName="surendra";
    user.email="rongali@gmail.com";
    user.profession="it";
    user.dateOfBirth = new Date();
    this.userService.AddUser(user);

    let user2:User = new User();
    user.id=101;
    user.firstName="rongali";
    user.lastName="raghavendra";
    user.email="rongali@gmail.com";
    user.profession="CSE";
    user.dateOfBirth = new Date();
    
    this.users=this.userService.GetUsers();
  }

  moreInfo(newUser:any){
    alert(newUser.id+" "+newUser.firstName+" "+newUser.lastName+" "+newUser.email+" "+newUser.profession);
    console.log("user ");
  }

}
