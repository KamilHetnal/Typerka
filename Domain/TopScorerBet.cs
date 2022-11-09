using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class TopScorerBet
    {
        public Guid Id { get; set; }
        public AppUser AppUser { get; set; }
        public Guid TopScorerId { get; set; }
        public Player TopScorer { get; set; }
        public DateTime BetDate { get; set; }
        public int Points { get; set; }
    }
}