import { Component } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent {
  name: string = "Martina Magdi"
  title: string = "Full Stack Developer"
  mainSectionImgSrc: string = "assets/images/main-section/avatar.png"
}
