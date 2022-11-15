using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Bets;
using Application.Teams;
using Domain;

namespace Application.Matches
{
    public class MatchDto
    {
        public Guid Id { get; set; }
        public TeamForMatchDto HomeTeam { get; set; }
        public TeamForMatchDto AwayTeam { get; set; }
        public DateTime MatchDate { get; set; }
        public int HomeGoals { get; set; }
        public int AwayGoals { get; set; }
        public ICollection<BetDto> MatchBets { get; set; } = new List<BetDto>();
    }
}