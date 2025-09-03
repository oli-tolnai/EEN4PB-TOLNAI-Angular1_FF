using AutoMapper;
using IssueTracker.Data;
using IssueTracker.Entities;
using IssueTracker.Entities.Dtos.Issue;
using IssueTracker.Entities.Dtos.Project;
using IssueTracker.Entities.Dtos.User;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IssueTracker.Logic.Helpers
{
    public class DtoProvider
    {
        UserManager<AppUser> userManager;

        public Mapper Mapper { get; }

        public DtoProvider(UserManager<AppUser> userManager)
        {
            this.userManager = userManager;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Project, ProjectShortViewDto>()
                .AfterMap((src, dest) =>
                {
                    dest.ActiveIssues = src.Issues.Count(i => i.Status != "Closed");
                });
                cfg.CreateMap<AppUser, UserViewDto>()
                .AfterMap((src, dest) =>
                {
                    dest.IsAdmin = userManager.IsInRoleAsync(src, "Admin").Result;
                });

                cfg.CreateMap<Project, ProjectViewDto>();
                cfg.CreateMap<ProjectCreateUpdateDto, Project>();
                cfg.CreateMap<IssueCreateDto, Issue>();
                cfg.CreateMap<Issue, IssueViewDto>();
                //.AfterMap((src, dest) =>
                //{
                //    var user = userManager.Users.First(u => u.Id == src.UserId);
                //    dest.UserFullName = user.LastName! + " " + user.FirstName;
                //});
                cfg.CreateMap<Issue, IssueViewDto>()
                .AfterMap((src, dest) =>
                {
                    var user = userManager.Users.FirstOrDefault(u => u.Id == src.UserId);
                    if (user != null)
                    {
                        dest.UserFullName = user.LastName + " " + user.FirstName;
                    }
                    else
                    {
                        dest.UserFullName = "Unknown User";
                    }
                });
                cfg.CreateMap<IssueStatusUpdateDto, Issue>();
            });

            Mapper = new Mapper(config);
        }
    }
}
