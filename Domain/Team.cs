using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Team
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        [NotMapped]
        public List<string> Players { get; set; }
    }
}