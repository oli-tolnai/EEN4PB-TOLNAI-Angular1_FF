using IssueTracker.Data;
using IssueTracker.Entities;
using IssueTracker.Entities.Dtos.Project;
using IssueTracker.Entities.Helpers;
using IssueTracker.Logic.Logic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IssueTracker.Endpoint.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        ProjectLogic logic;

        public ProjectController(ProjectLogic logic)
        {
            this.logic = logic;
        }

        [HttpPost]
        //[Authorize(Roles = "Admin")]
        public void AddProject(ProjectCreateUpdateDto dto)
        {
            logic.AddProject(dto);
        }

        [HttpGet]
        public IEnumerable<ProjectShortViewDto> GetAllProjects()
        {
            return logic.GetAllProjects();
        }

        [HttpDelete("{id}")]
        //[Authorize(Roles = "Admin")]
        public void DeleteProject(string id)
        {
            logic.DeleteProject(id);
        }

        [HttpPut("{id}")]
        //[Authorize(Roles = "Admin")]
        public void UpdateProject(string id, [FromBody] ProjectCreateUpdateDto dto)
        {
            logic.UpdateProject(id, dto);
        }

        [HttpGet("{id}")]
        //[Authorize]
        public ProjectViewDto GetProject(string id)
        {
            return logic.GetProject(id);
        }
    }
}
