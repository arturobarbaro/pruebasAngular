import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

    txtInput: FormControl;

  constructor() { }

  ngOnInit() {
      this.txtInput = new FormControl('', Validators.required);
  }

  addTodo() {

  }

}
