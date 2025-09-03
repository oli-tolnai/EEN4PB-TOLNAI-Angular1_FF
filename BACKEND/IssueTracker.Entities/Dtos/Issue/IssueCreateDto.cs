using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IssueTracker.Entities.Dtos.Issue
{
    public class IssueCreateDto
    {
        public required string ProjectId { get; set; } = "";

        //[MinLength(10)]
        [MaxLength(100)]
        public required string Title { get; set; } = "";

        //[MinLength(20)]
        [MaxLength(500)]
        public required string Description { get; set; } = "";

        [Range(1, 3)]
        public required int Priority { get; set; }

        [MaxLength(30)]
        public string Status { get; } = "New";


        /*
        Title = title;
        Description = description;
        Status = status;
        Priority = priority;
        Type = type;*/
    }
}
