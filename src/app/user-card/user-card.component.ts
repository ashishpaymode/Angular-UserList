import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
    @Input() user:User=new User();

    @Output() callMoreinfo=new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }

  newEmitEvent(){
    this.callMoreinfo.emit(this.user);
  }

}
