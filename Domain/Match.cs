using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Match
    {
        public Guid Id { get; set; }
        public Team HomeTeam { get; set; }
        public Team AwayTeam { get; set; }
        public DateTime MatchDate { get; set; }
        public int HomeGoals { get; set; } = 0;
        public int AwayGoals { get; set; } = 0;
    }
}