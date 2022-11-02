using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Bet
    {
        public Guid Id { get; set; }
        public Match Match { get; set; }
        public AppUser AppUser { get; set; }
        public int HomeScore { get; set; }
        public int AwayScore { get; set; }
        public DateTime BetDate { get; set; }
        public Team Winner { get; set; }
        public int BetPoints { get; set; }
    }
}