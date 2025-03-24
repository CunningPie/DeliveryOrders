using DeliveryOrders.Models;

namespace DeliveryOrders.Repos
{
    public interface IOrderRepository
    {
        public Task<Order?> GetOrder(int id);
        public Task<IEnumerable<Order>> GetOrders();
        public Task CreateOrder(Order order);
    }
}
