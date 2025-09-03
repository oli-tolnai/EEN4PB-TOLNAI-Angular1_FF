import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateIssue, UpdateIssueStatus } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private baseUrl = 'https://localhost:7016/api/Issue';

  constructor(private http: HttpClient) { }

  createIssue(issue: CreateIssue): Observable<any> {
    return this.http.post(this.baseUrl, issue);
  }

  updateIssueStatus(id: string, statusUpdate: UpdateIssueStatus): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, statusUpdate);
  }
}
