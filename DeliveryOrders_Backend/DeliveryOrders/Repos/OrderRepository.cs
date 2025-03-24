using Backend.Database;
using DeliveryOrders.Models;
using Microsoft.EntityFrameworkCore;

namespace DeliveryOrders.Repos
{
    public class OrderRepository
    {
        private AppDbContext _dbContext;

        public OrderRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Order?> GetOrder(int id)
        {
            return await _dbContext.Orders.FindAsync(id);
        }

        public async Task<IEnumerable<Order>> GetOrders()
        {
            return await _dbContext.Orders.ToListAsync();
        }

        public async Task CreateOrder(Order order)
        {
            _dbContext.Add(order);
            await _dbContext.SaveChangesAsync();
        }
    }
}
