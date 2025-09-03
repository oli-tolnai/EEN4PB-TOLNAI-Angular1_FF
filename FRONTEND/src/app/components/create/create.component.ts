import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { CreateProject } from '../../models/project.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent {
  project: CreateProject = {
    name: '',
    description: ''
  };
  loading = false;

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }

  onSubmit(): void {
    if (this.project.name.trim() && this.project.description.trim()) {
      this.loading = true;
      this.projectService.createProject(this.project).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/list']);
        },
        error: (error) => {
          console.error('Error creating project:', error);
          this.loading = false;
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/list']);
  }
}
