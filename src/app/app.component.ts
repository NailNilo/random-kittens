import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DogapiService } from './dogapi.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  catsDisplay: any[] = [];

  constructor(private service: DogapiService) {}

  ngOnInit(): void {
    this.service.getCatImages().subscribe(data => {
    this.catsDisplay = data;
  });}
  refresh(): void {
    this.service.getCatImages().subscribe(data => {
      this.catsDisplay = data;
    });
  }
}
