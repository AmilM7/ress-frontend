import { Component } from '@angular/core';

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
      description: " Backend Developer",
      image: '../../../../assets/Creators/mirza.png'
    },
    {
      name: "Amar",
      description: "Frontend Developer",
      image: '../../../../assets/Creators/amar.jpg'
    },
    {
      name: "Irfan",
      description: "Frontend Developer",
      image: '../../../../assets/Creators/irfan.jpg'
    },
    {
      name: "Amil",
      description: "Backend Developer",
      image: '../../../../assets/Creators/amil.jpg'
    },
  ]
}
