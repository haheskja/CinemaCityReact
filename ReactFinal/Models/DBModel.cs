using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace ReactFinal.Models
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options){ }

        public DbSet<Faq> Faq { get; set; }
        public DbSet<Question> Question { get; set; }
    }

    public class Faq
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
    }
    public class Question
    {
        public int Id { get; set; }
        public string Header { get; set; }
        public string Text { get; set; }
        public int Rating { get; set; }
    }
}
