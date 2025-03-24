import Container from 'react-bootstrap/Container'
import { useParams } from "react-router-dom";
import Order from '../../components/Order/Order';

const DetailedOrderPage = () => {
  const { id } = useParams();

  return (
    <Container className="mt-5 text-center">
      <Order id={id}/>
    </Container>
  );
};

export default DetailedOrderPage;