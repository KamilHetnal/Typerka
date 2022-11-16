using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application
{
    public class BetDto
    {
        public Guid Id { get; set; }
        public string HomeScore { get; set; }
        public string AwayScore { get; set; }
        public Guid MatchId { get; set; }
        public string AppUserId { get; set; }
        public DateTime BetDate { get; set; }
        public int BetPoints { get; set; }
    }
}