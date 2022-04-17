import { Component, Input, OnInit } from '@angular/core';
import { Repo } from '../../interfaces/projects';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {

  @Input() project !: Repo

  constructor() { }

  ngOnInit(): void {
  }

}
