import { Component } from '@angular/core';
import { Activity } from './activity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To-do List';
  // activities: string [];


   activities = [
     new Activity(1, 'Read the bible'),
     new Activity(2,'Make bed'),
     new Activity(3, 'Clean clothes'),
     new Activity(4,'Shopping'),
     new Activity(5,'Visit shosh')
    ];
 }

