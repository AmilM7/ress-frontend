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
      name: "Mirza Arslanagic",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid asperiores cum earum enim esse eveniet id illo inventore minima minus molestiae necessitatibus nisi obcaecati officia officiis quasi recusandae saepe sequi sunt tempora, veritatis voluptate. A aliquid architecto blanditiis expedita inventore ipsum laboriosam magni modi, molestias, obcaecati, officia ullam ut.',
      image: '../assets/mirza.png'
    },
    {
      name: "Amar Sose",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid asperiores cum earum enim esse eveniet id illo inventore minima minus molestiae necessitatibus nisi obcaecati officia officiis quasi recusandae saepe sequi sunt tempora, veritatis voluptate. A aliquid architecto blanditiis expedita inventore ipsum laboriosam magni modi, molestias, obcaecati, officia ullam ut.',
      image: '../assets/amar.jpg'
    },
    {
      name: "Irfan Paric",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid asperiores cum earum enim esse eveniet id illo inventore minima minus molestiae necessitatibus nisi obcaecati officia officiis quasi recusandae saepe sequi sunt tempora, veritatis voluptate. A aliquid architecto blanditiis expedita inventore ipsum laboriosam magni modi, molestias, obcaecati, officia ullam ut.',
      image: '../assets/irfan.jpg'
    },
    {
      name: "Amil Murselovic",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid asperiores cum earum enim esse eveniet id illo inventore minima minus molestiae necessitatibus nisi obcaecati officia officiis quasi recusandae saepe sequi sunt tempora, veritatis voluptate. A aliquid architecto blanditiis expedita inventore ipsum laboriosam magni modi, molestias, obcaecati, officia ullam ut.',
      image: '../assets/amil.jpg'
    },
  ]
}
