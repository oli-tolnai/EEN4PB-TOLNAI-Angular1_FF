using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IssueTracker.Entities.Dtos.Project
{
    public class ProjectCreateUpdateDto
    {
        public string Name { get; set; } = "";

        public string Description { get; set; } = "";

    }
}
