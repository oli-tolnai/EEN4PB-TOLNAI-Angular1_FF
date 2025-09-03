export interface Project {
  id: string;
  name: string;
  description: string;
  activeIssues: number;
}

export interface ProjectDetails {
  id: string;
  name: string;
  description: string;
  issues: Issue[];
  numberOfIssues: number;
  newIssueCount: number;
  inProgressIssueCount: number;
  closedIssueCount: number;
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  priority: number;
  status: string;
  userFullName: string;
}

export interface CreateProject {
  name: string;
  description: string;
}

export interface CreateIssue {
  projectId: string;
  title: string;
  description: string;
  priority: number;
}

export interface UpdateIssueStatus {
  status: string;
}
