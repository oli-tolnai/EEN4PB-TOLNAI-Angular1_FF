import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { CreateProject, ProjectDetails } from '../../models/project.model';

@Component({
  selector: 'app-editproj',
  templateUrl: './editproj.component.html',
  styleUrls: ['./editproj.component.sass'],
  standalone: false
})
export class EditprojComponent implements OnInit {
  project: CreateProject = {
    name: '',
    description: ''
  };
  projectId: string = '';
  loading = false;
  loadingProject = false;

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
    this.loadingProject = true;
    this.projectService.getProject(this.projectId).subscribe({
      next: (projectDetails: ProjectDetails) => {
        this.project = {
          name: projectDetails.name,
          description: projectDetails.description
        };
        this.loadingProject = false;
      },
      error: (error) => {
        console.error('Error loading project:', error);
        this.loadingProject = false;
      }
    });
  }

  onSubmit(): void {
    if (this.project.name.trim() && this.project.description.trim()) {
      this.loading = true;
      this.projectService.updateProject(this.projectId, this.project).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/list']);
        },
        error: (error) => {
          console.error('Error updating project:', error);
          this.loading = false;
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/list']);
  }
}
