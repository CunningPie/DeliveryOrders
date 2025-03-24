import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom'

const Order = (props) => {
  const [order, setOrderData] = useState([]);

  useEffect(() => {
    axios.get(`/api/orders/?id=${props.id}`)
      .then(response => {
        setOrderData(response.data);
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }, [props.id]);

  const navigate = useNavigate(); 

  const handleGoToOrdersPage = () => {
    navigate("/orders"); 
  };

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Детали заказа</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Город отправителя:</strong> {order.senderCity}
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Адрес отправителя:</strong> {order.senderAddress}
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Город получателя:</strong> {order.receiverCity}
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Адрес получателя:</strong> {order.receiverAddress}
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Вес груза:</strong> {order.weight}
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Дата получения:</strong> {order.receiptDate}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Button variant="primary" onClick={handleGoToOrdersPage}>
          Вернуться к списку заказов
        </Button>
    </Container>
  )
}

export default Order