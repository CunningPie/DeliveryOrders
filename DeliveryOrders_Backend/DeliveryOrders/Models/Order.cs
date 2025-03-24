namespace DeliveryOrders.Models
{
    public class Order
    {
        public int Id { get; set; }
        public required string SenderCity { get; set; }
        public required string SenderAddress { get; set; }
        public required string ReceiverCity { get; set; }
        public required string ReceiverAddress { get; set; }
        public required double Weight { get; set; }
        private DateTime _ReceiptDate;

        public required DateTime ReceiptDate { 
            get => _ReceiptDate; 
            set => _ReceiptDate = value.ToUniversalTime();
        }
    }
}
