using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactFinal.Models
{
    public class DomainFaq
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
    }
    public class DomainQuestion
    {
        public int Id { get; set; }
        public string Header { get; set; }
        public string Text { get; set; }
        public int Rating { get; set; }
    }
}
