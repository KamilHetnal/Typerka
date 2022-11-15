using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Bets;
using Application.ChampionBets;
using Application.Matches;
using Application.Players;
using Application.Teams;
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
            CreateMap<Championship, Championship>();
            CreateMap<Team, Team>();
            CreateMap<Team, TeamDto>();
            CreateMap<Team, TeamForMatchDto>();

            CreateMap<Player, Player>();
            CreateMap<Player, PlayerDto>();

            CreateMap<Match, Match>()
                .ForMember(d=> d.HomeTeam, d => d.MapFrom(d => d.HomeTeam))
                .ForMember(d=> d.AwayTeam, d => d.MapFrom(d => d.AwayTeam));
            CreateMap<Match, MatchDto>()
                .ForMember(d => d.MatchBets, d => d.MapFrom(d => d.MatchBets));

            CreateMap<Bet, Bet>()
                .ForMember(m => m.Match, m => m.MapFrom(m => m.Match))
                .ForMember(d => d.BetDate, d => d.MapFrom(d => d.BetDate));
            CreateMap<Bet, BetDto>();

            CreateMap<ChampionBet, ChampionBet>();
            CreateMap<ChampionBet, ChampionBetDto>()
                .ForMember(d => d.BetPoints, o => o.MapFrom(s => s.Points));

            CreateMap<TopScorerBet, TopScorerBet>();
            CreateMap<TopScorerBet, TopScorerBetDto>()
                .ForMember(d => d.BetPoints, o => o.MapFrom(s => s.Points));;
                
            CreateMap<IdentityRole, IdentityRole>();
            CreateMap<AppUser, Profiles.Profile>()
                .ForMember(d => d.Image, o => o.MapFrom(s => s.Photos.FirstOrDefault(x => x.IsMain).Url));
        }
    }
}