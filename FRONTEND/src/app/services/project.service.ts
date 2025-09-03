import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project, ProjectDetails, CreateProject } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = 'https://localhost:7016/api/Project';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl);
  }

  getProject(id: string): Observable<ProjectDetails> {
    return this.http.get<ProjectDetails>(`${this.baseUrl}/${id}`);
  }

  createProject(project: CreateProject): Observable<any> {
    return this.http.post(this.baseUrl, project);
  }

  updateProject(id: string, project: CreateProject): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, project);
  }

  deleteProject(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
