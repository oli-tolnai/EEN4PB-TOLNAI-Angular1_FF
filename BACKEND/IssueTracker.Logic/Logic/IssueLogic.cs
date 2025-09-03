using IssueTracker.Data;
using IssueTracker.Entities;
using IssueTracker.Entities.Dtos.Issue;
using IssueTracker.Logic.Helpers;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IssueTracker.Logic.Logic
{
    public class IssueLogic
    {
        Repository<Issue> repo;
        DtoProvider dtoProvider;

        public IssueLogic(Repository<Issue> repo, DtoProvider dtoProvider)
        {
            this.repo = repo;
            this.dtoProvider = dtoProvider;
        }

        public void AddIssue(IssueCreateDto dto, string? userId = "anonymous")
        {
            var iModel = dtoProvider.Mapper.Map<Issue>(dto);

            iModel.UserId = userId;
            
            repo.Create(iModel);
        }

        public void UpdateIssueStatus(string id, IssueStatusUpdateDto dto)
        {
            var iModel = repo.FindById(id);
            dtoProvider.Mapper.Map(dto, iModel);
            repo.Update(iModel);
        }
    }
}
