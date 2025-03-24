import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import OrderTable from '../../components/OrderTable/OrderTable';

const OrdersPage = () => {
  const navigate = useNavigate(); 

  const navigateToCreateOrder = () => {
    navigate("/orders/create"); 
  };

  return (
    <Container className="mt-5 text-center">
      <Button variant="primary" onClick={navigateToCreateOrder}>
        Создать заказ
      </Button>
      <OrderTable/>
    </Container>
  );
};

export default OrdersPage;