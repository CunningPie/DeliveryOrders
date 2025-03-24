using Backend.Database;
using DeliveryOrders.Repos;
using Microsoft.EntityFrameworkCore;

public interface IUnitOfWork
{
    AppDbContext appContext{ get; set; }
    OrderRepository OrderRepository { get; set;}
}