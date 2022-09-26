using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Team, Team>();
            CreateMap<Match, Match>();
            CreateMap<Match, Match>().ForMember(t => t.HomeTeam, m => m.MapFrom(s => s.HomeTeam));
        }
    }
}