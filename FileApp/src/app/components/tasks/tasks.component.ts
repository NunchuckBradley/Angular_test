import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../service/task.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    console.log("deleting");
    this.taskService.deleteTask(task).subscribe(
      () => (this.tasks = this.tasks.filter(
        (t) => t.id !== task.id
      ))
    );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();

  }

}
