using IssueTracker.Entities.Helpers;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IssueTracker.Entities
{
    public class Issue : IIdEntity
    {
        public Issue(string projectId, string title, string description, string status, int priority)
        {
            Id = Guid.NewGuid().ToString();
            ProjectId = projectId;
            Title = title;
            Description = description;
            Status = status;
            Priority = priority;
        }

        [StringLength(50)]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set; }

        [StringLength(50)]
        public string ProjectId { get; set; }

        [MinLength(3)]
        [StringLength(50)]
        public string Title { get; set; } // e.g. "CART - Unable to add new item to the cart"

        [MinLength(10)]
        [StringLength(400)]
        public string Description { get; set; } // e.g. "When I click the 'Add to Cart' button, nothing happens."

        [StringLength(20)]
        public string Status { get; set; } // e.g. "New", "In Progress", "Closed"

        [Range(1, 3)]
        public int Priority { get; set; } // 1 = "Low", 2 = "Medium", 3 = "High"

        [StringLength(50)]
        public string UserId { get; set; }

        [NotMapped]
        public virtual Project? Project { get; set; }
    }
}
