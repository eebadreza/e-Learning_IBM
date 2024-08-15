import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users-display',
  templateUrl: './users-display.component.html',
  styleUrls: ['./users-display.component.scss'],
})
export class UsersDisplayComponent {
  @Input() users: any;
}
