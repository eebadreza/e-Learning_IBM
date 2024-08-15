import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  title = 'todos';
  todos: any;

  constructor(private ts: TodosService) {
    ts.getTodos().subscribe((data) => {
      // console.log(data);
      this.todos = data;
    });
  }
}
