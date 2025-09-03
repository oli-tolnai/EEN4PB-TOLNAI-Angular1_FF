using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IssueTracker.Entities.Dtos.Project
{
    public class ProjectShortViewDto
    {
        public string Id { get; set; } = "";
        public string Name { get; set; } = "";
        public string Description { get; set; } = "";

        //public int NumberOfNewIssues { get; set; } = 0;
        public int ActiveIssues { get; set; } = 0;
    }
}
