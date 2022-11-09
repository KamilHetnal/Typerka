using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.ChampionBets
{
    public class ChampionBetDto
    {
        public Guid Id { get; set; }
        public Guid ChampionId { get; set; }
        public string AppUserId { get; set; }
        public DateTime BetDate { get; set; }
        public int BetPoints { get; set; }
    }
}