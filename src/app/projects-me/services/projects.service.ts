import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Repo } from '../interfaces/projects'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  uri!:string

  constructor(private http:HttpClient) {
    this.uri = 'https://api.github.com/users/NeiderHamburgerB/repos'
  }

  getRepos():Observable<Repo[]>{
    return this.http.get<Repo[]>(this.uri)
  }

}
