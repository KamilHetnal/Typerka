using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Team, Team>();
            CreateMap<Match, Match>();
            CreateMap<Match, Match>().ForMember(t => t.HomeTeam, m => m.MapFrom(s => s.HomeTeam));
            CreateMap<IdentityRole, IdentityRole>();
            CreateMap<AppUser, Profiles.Profile>()
                .ForMember(d => d.Image, o => o.MapFrom(s => s.Photos.FirstOrDefault(x => x.IsMain).Url));
        }
    }
}