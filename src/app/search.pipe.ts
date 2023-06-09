import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/user';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: User[] , searchString:String): User[] {
    return users.filter(user => user.firstName.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    || user.lastName.toLowerCase().indexOf(searchString.toLowerCase()) !==-1
      || String(user.id).toLowerCase().indexOf(searchString.toLowerCase()) !== -1 
      || user.profession.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
      || user.email.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

}
