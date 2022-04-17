import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Repo } from '../../interfaces/projects'
import { ProjectsService } from '../../services/projects.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects!:Repo[]
  path!:string

  constructor(private projectsService:ProjectsService, private route:ActivatedRoute) { 
    route.url.subscribe( res => this.path = res[0].path)
  }

  ngOnInit(): void {
    this.getRepos()
  }

  getRepos(){
    this.projectsService.getRepos()
      .subscribe( res => this.projects = res )
  }


}
