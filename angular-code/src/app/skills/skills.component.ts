import { Component, OnInit } from '@angular/core';
import skills from '../../assets/data/skills.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillData = skills;
  constructor() { }

  ngOnInit(): void {
  }

}
