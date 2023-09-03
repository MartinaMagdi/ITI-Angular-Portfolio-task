import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  myFocus: Array<any> = ["Back end developer", "Front end developer", "Responsive Design", "Web Development"]
  skills: Array<any> = [
    {
      name: "HTML",
      percent: "95%"
    },
    {
      name: "CSS",
      percent: "93%"
    },
    {
      name: "Bootstrap",
      percent: "85%"
    },
    {
      name: "Vue.JS",
      percent: "80%"
    },
    {
      name: "React",
      percent: "30%"
    },
    {
      name: "Angular",
      percent: "30%"
    },
  ]
}
