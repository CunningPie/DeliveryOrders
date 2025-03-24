import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate(); 

  const handleGoHome = () => {
    navigate("/orders"); 
  };

  return (
    <Container className="mt-5 text-center">
      <Card>
        <Card.Body>
          <Card.Title>404 - Страница не найдена</Card.Title>
          <Card.Text>
            Запрашиваемая страница не существует.
          </Card.Text>
          <Button variant="primary" onClick={handleGoHome}>
            Вернуться на главную
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PageNotFound;