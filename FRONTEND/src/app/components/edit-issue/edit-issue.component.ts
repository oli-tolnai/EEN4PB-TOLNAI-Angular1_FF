import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from '../../services/issue.service';
import { UpdateIssueStatus } from '../../models/project.model';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.sass'],
  standalone: false
})
export class EditIssueComponent implements OnInit {
  issueUpdate: UpdateIssueStatus = {
    status: ''
  };
  issueId: string = '';
  loading = false;

  statusOptions = [
    { value: 'New', label: 'New' },
    { value: 'InProgress', label: 'In Progress' },
    { value: 'Closed', label: 'Closed' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private issueService: IssueService
  ) { }

  ngOnInit(): void {
    this.issueId = this.route.snapshot.params['id'];
    // Set default status
    this.issueUpdate.status = 'New';
  }

  onSubmit(): void {
    if (this.issueUpdate.status) {
      this.loading = true;
      this.issueService.updateIssueStatus(this.issueId, this.issueUpdate).subscribe({
        next: () => {
          this.loading = false;
          // Go back to the previous page (project view)
          window.history.back();
        },
        error: (error) => {
          console.error('Error updating issue status:', error);
          this.loading = false;
        }
      });
    }
  }

  goBack(): void {
    window.history.back();
  }
}
