import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private ds: DataService) {}
  users: any;
  ngOnInit(): void {
    this.ds.getUsers().subscribe((data) => {
      this.users = data.users;
    });
  }
}
