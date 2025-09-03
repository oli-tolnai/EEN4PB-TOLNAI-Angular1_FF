import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  projects: Project[] = [];
  loading = false;

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.loading = true;
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
        this.loading = false;
      }
    });
  }

  viewProject(id: string): void {
    this.router.navigate(['/view', id]);
  }

  editProject(id: string): void {
    this.router.navigate(['/editproj', id]);
  }

  addIssue(id: string): void {
    this.router.navigate(['/addIssue', id]);
  }

  deleteProject(id: string): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(id).subscribe({
        next: () => {
          this.loadProjects(); // Reload the list
        },
        error: (error) => {
          console.error('Error deleting project:', error);
        }
      });
    }
  }
}
