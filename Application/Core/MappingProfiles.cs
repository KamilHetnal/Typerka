using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Bets;
using Application.Matches;
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
            CreateMap<Match, MatchDto>();
            CreateMap<Bet, Bet>().ForMember(m => m.Match, m => m.MapFrom(m => m.Match));
            CreateMap<Match, Match>().ForMember(t => t.HomeTeam, m => m.MapFrom(s => s.HomeTeam));
            CreateMap<IdentityRole, IdentityRole>();
            CreateMap<AppUser, Profiles.Profile>()
                .ForMember(d => d.Image, o => o.MapFrom(s => s.Photos.FirstOrDefault(x => x.IsMain).Url));
            CreateMap<Bet, BetDto>();
        }
    }
}