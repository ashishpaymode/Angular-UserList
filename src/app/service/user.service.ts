import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[]=[];
  constructor() { }

  public GetUsers(){
    return this.users;
  }
  public GetUserById(id:number){
    for(let u of this.users){
      if(u.id==id){
        return u;
      }
    }
    return null;
  }
  public AddUser(UserModel:User){
    this.users.push(UserModel);
  }
  public DeleteUser(id:number){
    this.users = this.users.filter(val => val.id != id);
  }
}
