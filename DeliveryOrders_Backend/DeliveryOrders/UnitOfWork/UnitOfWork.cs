using Backend.Database;
using DeliveryOrders.Repos;
using Microsoft.EntityFrameworkCore;

public class UnitOfWork : IUnitOfWork
{
    public OrderRepository OrderRepository { get; set; }

    public AppDbContext appContext {get; set;}

    public UnitOfWork(AppDbContext context) {
      appContext = context;
      this.OrderRepository = new OrderRepository(appContext);
    }
}