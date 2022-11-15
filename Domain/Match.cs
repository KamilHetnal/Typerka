using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Match
    {
        public Guid Id { get; set; }
        public Guid HomeTeamId { get; set; }
        public Guid AwayTeamId { get; set; }
        public Team HomeTeam { get; set; }
        public Team AwayTeam { get; set; }
        public DateTime MatchDate { get; set; }
        public int HomeGoals { get; set; }
        public int AwayGoals { get; set; }
        public ICollection<Bet> MatchBets { get; set; } = new List<Bet>();
    }
}