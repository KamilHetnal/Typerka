using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Bets;
using Application.ChampionBets;
using Application.Matches;
using Application.TopScorerBets;
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
            CreateMap<Player, Player>();
            CreateMap<Championship, Championship>();
            CreateMap<Match, Match>()
                .ForMember(d => d.MatchBets, d => d.MapFrom(d => d.MatchBets));
            CreateMap<Match, MatchDto>()
                .ForMember(d => d.MatchBets, d => d.MapFrom(d => d.MatchBets));
            CreateMap<Bet, Bet>()
                .ForMember(m => m.Match, m => m.MapFrom(m => m.Match))
                .ForMember(d => d.BetDate, d => d.MapFrom(d => d.BetDate));
            CreateMap<Match, Match>().ForMember(t => t.HomeTeam, m => m.MapFrom(s => s.HomeTeam));
            CreateMap<IdentityRole, IdentityRole>();
            CreateMap<AppUser, Profiles.Profile>()
                .ForMember(d => d.Image, o => o.MapFrom(s => s.Photos.FirstOrDefault(x => x.IsMain).Url));
            CreateMap<Bet, BetDto>();
            CreateMap<ChampionBet, ChampionBet>();
            CreateMap<ChampionBet, ChampionBetDto>();
            CreateMap<TopScorerBet, TopScorerBet>();
            CreateMap<TopScorerBet, TopScorerBetDto>();
        }
    }
}