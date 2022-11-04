using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Bets;
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
        public int Points 
        { 
            get {return setPoints(Bets);} 
            set {setPoints(Bets);} 
        }
        public ICollection<Photo> Photos { get; set; }
        public ICollection<BetDto> Bets { get; set; }

        private int setPoints(ICollection<BetDto> bets)
        {
            int points = 0;
            foreach (var bet in bets)
            {
                points += bet.BetPoints;
            }
            return points;
        }
    }
}