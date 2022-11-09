using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class ChampionBet
    {
        public Guid Id { get; set; }
        public AppUser AppUser { get; set; }
        public Guid ChampionId { get; set; }
        public Team Champion { get; set; }
        public DateTime BetDate { get; set; }
        public int Points { get; set; }
    }
}