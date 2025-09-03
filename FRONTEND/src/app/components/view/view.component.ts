import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { ProjectDetails } from '../../models/project.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.sass']
})
export class ViewComponent implements OnInit {
  project: ProjectDetails | null = null;
  loading = false;
  projectId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id'];
    this.loadProject();
  }

  loadProject(): void {
    this.loading = true;
    this.projectService.getProject(this.projectId).subscribe({
      next: (project) => {
        this.project = project;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading project:', error);
        this.loading = false;
      }
    });
  }

  addIssue(): void {
    this.router.navigate(['/addIssue', this.projectId]);
  }

  editIssue(issueId: string): void {
    this.router.navigate(['/editIssue', issueId]);
  }

  goBack(): void {
    this.router.navigate(['/list']);
  }
}
