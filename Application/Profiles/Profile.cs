using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Bets;
using Application.ChampionBets;
using Application.TopScorerBets;
using Domain;

namespace Application.Profiles
{
    public class Profile
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string Bio { get; set; }
        public string Image { get; set; }
        public ChampionBetDto ChampionBet { get; set; }
        public TopScorerBetDto TopScorerBet { get; set; }
        public int Points 
        { 
            get {return setPoints(Bets, TopScorerBet, ChampionBet);} 
            set {setPoints(Bets, TopScorerBet, ChampionBet);} 
        }
        public ICollection<Photo> Photos { get; set; }
        public ICollection<BetDto> Bets { get; set; }

        private int setPoints(ICollection<BetDto> bets, TopScorerBetDto topScorer, ChampionBetDto champion)
        {
            int points = 0;
            foreach (var bet in bets)
            {
                points += bet.BetPoints;
            }
            if(topScorer != null)
                points += topScorer.BetPoints;
            if(champion != null)
            points += champion.BetPoints;
            return points;
        }
    }
}