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

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
           => optionsBuilder
               .UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=Database2;Trusted_Connection=True;ConnectRetryCount=0");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region FaqSeed
            modelBuilder.Entity<Faq>().HasData(new Faq { Id = 1, Question = "How can I change my account info?", Answer = "You can currently not change this yourself, please contact an admin." });
            modelBuilder.Entity<Faq>().HasData(new Faq { Id = 2, Question = "When will you update your inventory?", Answer = "We are working with major movie studios, stay tuned!" });
            modelBuilder.Entity<Faq>().HasData(new Faq { Id = 3, Question = "Are you hiring?", Answer = "Yes! Contact mail@cinemacity.com" });
            modelBuilder.Entity<Faq>().HasData(new Faq { Id = 4, Question = "My movies are not downloading!", Answer = "Make sure you have enough space on your computer and that CinemaCity isn't blocked." });
            modelBuilder.Entity<Faq>().HasData(new Faq { Id = 5, Question = "Where can I send tips?", Answer = "To mail@cinemacity.com :)" });
            modelBuilder.Entity<Faq>().HasData(new Faq { Id = 6, Question = "Cart always crashes!", Answer = "Please submit a detailed bug report to mail@cinemacity.com and we'll be on it immediately!" });
            #endregion
        }
    }
}
