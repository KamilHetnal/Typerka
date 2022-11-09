using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.TopScorerBets
{
    public class TopScorerBetDto
    {
        public Guid Id { get; set; }
        public Guid TopScorerId { get; set; }
        public string AppUserId { get; set; }
        public DateTime BetDate { get; set; }
        public int BetPoints { get; set; }
    }
}