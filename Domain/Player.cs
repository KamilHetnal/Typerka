using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Player
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Position { get; set; } // public Positions Position { get; set; }
        public int Goals { get; set; }
        public Guid TeamId { get; set; }
        public Team Team { get; set; }

        // public enum Positons
        // {
        //     Bramkarz,
        //     Obrońca,
        //     Pomocnik,
        //     Napastnik
        // }
    }
}