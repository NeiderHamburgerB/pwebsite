import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment.prod'
import { Repo } from '../interfaces/projects'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  uri!:string

  constructor(private http:HttpClient) {
    this.uri = environment.git_repos
  }

  getRepos():Observable<Repo[]>{
    return this.http.get<Repo[]>(this.uri)
  }

}
