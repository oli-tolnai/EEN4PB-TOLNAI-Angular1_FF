using IssueTracker.Data;
using IssueTracker.Entities;
using IssueTracker.Entities.Dtos.Project;
using IssueTracker.Logic.Helpers;

namespace IssueTracker.Logic.Logic
{
    public class ProjectLogic
    {
        Repository<Project> repo;
        DtoProvider dtoProvider;

        public ProjectLogic(Repository<Project> repo, DtoProvider dtoProvider)
        {
            this.repo = repo;
            this.dtoProvider = dtoProvider;
        }

        public void AddProject(ProjectCreateUpdateDto dto)
        {
            Project p = dtoProvider.Mapper.Map<Project>(dto);

            if (repo.GetAll().FirstOrDefault(p => p.Name == dto.Name) == null)
            {
                repo.Create(p);
            }
            else
            {
                throw new ArgumentException("Project with this name already exists");
            }
        }

        public IEnumerable<ProjectShortViewDto> GetAllProjects()
        {
            return repo.GetAll().Select(x =>
                    dtoProvider.Mapper.Map<ProjectShortViewDto>(x)
                );
        }

        public void DeleteProject(string id)
        {
            repo.DeleteById(id);
        }

        public void UpdateProject(string id, ProjectCreateUpdateDto dto)
        {
            Project oldp = repo.FindById(id);
            dtoProvider.Mapper.Map(dto, oldp);
            repo.Update(oldp);
        }

        public ProjectViewDto GetProject(string id)
        {
            Project pModel = repo.FindById(id);
            return dtoProvider.Mapper.Map<ProjectViewDto>(pModel);
        }

    }
}
