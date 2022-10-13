using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Bet
    {
        public Guid Id { get; set; }
        public Guid MatchId { get; set; }
        public int HomeScore { get; set; }
        public int AwayScore { get; set; }
    }
}