using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Team
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Group { get; set; }
        public int MatchesPlayed { get; set; }
        public int Wins { get; set; } 
        public int Losses { get; set; }
        public int Draws { get; set; }
        public int GoalsScored { get; set; }
        public int GoalsConceded { get; set; }
        public int Points { get; set; }
        public ICollection<Player> Players { get; set; } = new List<Player>();
    }
}