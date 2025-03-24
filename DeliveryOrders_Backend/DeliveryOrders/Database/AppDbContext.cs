using DeliveryOrders.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Database
{
    public class AppDbContext : DbContext
    {
        public DbSet<Order> Orders { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        {
            Database.EnsureCreated();
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>().UseTpcMappingStrategy();
        }
    }
}
