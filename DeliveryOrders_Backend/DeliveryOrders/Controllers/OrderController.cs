using DeliveryOrders.Models;
using DeliveryOrders.Repos;
using Microsoft.AspNetCore.Mvc;

namespace DeliveryOrders.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly ILogger<OrderController> _logger;
        private IUnitOfWork _uow;

        public OrderController(ILogger<OrderController> logger, IUnitOfWork uow)
        {
            _logger = logger;
            _uow = uow;
        }

        [HttpGet]
        [Route("/orders")]
        public async Task<ActionResult<Order?>> Get(int id)
        {
            return await _uow.OrderRepository.GetOrder(id);
        }

        [HttpGet]
        [Route("/orders/list")]
        public async Task<ActionResult<IEnumerable<Order>>> GetAll()
        {
            var orders = await _uow.OrderRepository.GetOrders();
            return Ok(orders);
        }

        [HttpPost]
        [Route("/orders")]
        public async Task<ActionResult<Order>> CreateOrder(Order order)
        {
            await _uow.OrderRepository.CreateOrder(order);
            return CreatedAtAction(nameof(Get), new { id = order.Id }, order);
        }
    }
}
