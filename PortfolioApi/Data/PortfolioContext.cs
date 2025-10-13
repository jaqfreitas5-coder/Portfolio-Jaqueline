using Microsoft.EntityFrameworkCore;
using PortfolioApi.Models; 

namespace PortfolioApi.Data
{       
    public class PortfolioContext : DbContext
    {
        public PortfolioContext(DbContextOptions<PortfolioContext> options) : base(options)
        {
        }

       
        public DbSet<Skill> Skills { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Experience> Experiences { get; set; }
        public DbSet<Formation> Formations { get; set; }
        public DbSet<Certification> Certifications { get; set; }
        public DbSet<ProfileInfo> ProfileInfo { get; set; }
    }
}
