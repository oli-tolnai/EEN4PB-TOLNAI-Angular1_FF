import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from '../../services/issue.service';
import { CreateIssue } from '../../models/project.model';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.sass']
})
export class AddIssueComponent implements OnInit {
  issue: CreateIssue = {
    projectId: '',
    title: '',
    description: '',
    priority: 3
  };
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private issueService: IssueService
  ) { }

  ngOnInit(): void {
    this.issue.projectId = this.route.snapshot.params['id'];
  }

  onSubmit(): void {
    if (this.issue.title.trim() && this.issue.description.trim()) {
      this.loading = true;
      this.issueService.createIssue(this.issue).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/view', this.issue.projectId]);
        },
        error: (error) => {
          console.error('Error creating issue:', error);
          this.loading = false;
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/view', this.issue.projectId]);
  }
}
