using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Championship
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Country { get; set; }
        public Guid WinnerId { get; set; }
        public Team Winner { get; set; }
        public Guid TopScorerId { get; set; }
        public Player TopScorer { get; set; }

    }
}