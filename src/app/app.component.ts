import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  constructor(private dataService: DataService){}
  
  students: any = [];
  Weather: any = [];

  ngOnInit()
  {
    this.dataService.GetStudentData().subscribe(data => {
      this.students = data.students;
    });

    this.dataService.GetWeatherData().subscribe(data => {
      this.Weather = data.weather;
    });
  }
}
