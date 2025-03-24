import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateOrder = () => {
  console.log('CreateOrder')
  const [formData, setFormData] = useState({
    senderCity: "",
    senderAddress: "",
    receiverCity: "",
    receiverAddress: "",
    orderWeight: 0,
    receiptDate: "",
  });

  const [message, setMessage] = useState({
    text: "",
    type: "", 
  });

  const navigate = useNavigate(); 

  const handleGoToOrdersPage = () => {
    navigate("/orders"); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post("/api/orders/", formData);

      setMessage({ text: "Данные успешно отправлены!", type: "success" });
      console.log("Ответ сервера:", response.data);
      handleGoToOrdersPage();
    } catch (error) {
      setMessage({
        text: "Ошибка при отправке данных. Попробуйте снова.",
        type: "error",
      });
      console.error("Ошибка:", error);
    }
  };

  return (
    <Container className="mt-5">
      {message.text && (
        <Alert variant={message.type === "success" ? "success" : "danger"}>
          {message.text}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>      
        <Form.Group className="mb-3" controlId="orderCity">
          <Form.Label>Город отправителя</Form.Label>
          <Form.Control 
            type="text"
            name="senderCity"
            placeholder="Введите город отправителя.."
            value={formData.senderCity}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="orderSenderAddress">
          <Form.Label>Адрес отправителя</Form.Label>
          <Form.Control
            type="text"
            name="senderAddress"
            placeholder="Введите адрес отправителя.."
            value={formData.senderAddress}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="orderReceiverCity">
          <Form.Label>Город получателя</Form.Label>
          <Form.Control 
            type="text"
            name="receiverCity"
            placeholder="Введите город получателя"
            value={formData.receiverCity}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="orderReceiverAddress">
          <Form.Label>Адрес получателя</Form.Label>
          <Form.Control 
            type="text"
            name="receiverAddress"
            placeholder="Введите адрес получателя.."
            value={formData.receiverAddress}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="orderWeight">
          <Form.Label>Вес груза</Form.Label>
          <Form.Control 
            type="number"
            name="weight"
            placeholder="Введите вес груза.."
            value={formData.weight}
            min="0"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="orderReceiptDate">
          <Form.Label>Дата забора груза</Form.Label>
          <Form.Control
            type="date"
            name="receiptDate"
            placeholder="Введите дату получения.."
            value={formData.receiptDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" onClick={handleGoToOrdersPage}>
          Отмена
        </Button>

        <Button variant="primary" type="submit">
          Создать
        </Button>
      </Form>
    </Container>
  )
}

export default CreateOrder