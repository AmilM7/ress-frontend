import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  title = 'about-us';
  public people = [
    {
      name: "Mirza",
      description: "Developer",
      image: '../assets/mirza.png'
    },
    {
      name: "Amar",
      description: "Developer",
      image: '../assets/amar.jpg'
    },
    {
      name: "Irfan",
      description: "Developer",
      image: '../assets/irfan.jpg'
    },
    {
      name: "Amil",
      description: "Developer",
      image: '../assets/amil.jpg'
    },
  ]
}
