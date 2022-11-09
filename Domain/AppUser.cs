using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
        public Guid? ChampionBetId { get; set; }
        public Guid? TopScorerBetId { get; set; }
        public ChampionBet ChampionBet { get; set; }
        public TopScorerBet TopScorerBet { get; set; }
        public ICollection<Bet> Bets { get; set; } = new List<Bet>();
        public ICollection<Photo> Photos { get; set; }
    }
}