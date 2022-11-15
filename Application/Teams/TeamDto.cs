using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Players;
using Application.Matches;

namespace Application.Teams
{
    public class TeamDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Info { get; set; }
        public string BestResult { get; set; }
        public string BestResultDates { get; set; }
        public string Group { get; set; }
        public int MatchesPlayed { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }
        public int Draws { get; set; }
        public int GoalsScored { get; set; }
        public int GoalsConceded { get; set; }
        public int Points { get; set; }
        public ICollection<PlayerDto> Players { get; set; } = new List<PlayerDto>();
    }
}