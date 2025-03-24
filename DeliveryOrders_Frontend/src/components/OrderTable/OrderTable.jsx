import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination'
import { useNavigate} from 'react-router-dom';

const OrderTable = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get('/api/orders/list')
      .then(response => {
        setOrdersData(response.data);
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []);

  const handleRowClick = (id) => {
    navigate(`/orders/${id}`);
  }


  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = ordersData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>№</th>
            <th>Город отправителя</th>
            <th>Адрес отправителя</th>
            <th>Город получателя</th>
            <th>Адрес получателя</th>
            <th>Вес груза</th>
            <th>Дата забора груза</th>
          </tr>
        </thead>
        <tbody>
          {
            currentItems?.map((item, index) => 
              <tr key={index} onClick={() => handleRowClick(item.id)} >
                <td>{item.id}</td>
                <td>{item.senderCity}</td>
                <td>{item.senderAddress}</td>
                <td>{item.receiverCity}</td>
                <td>{item.receiverAddress}</td>
                <td>{item.weight}</td>
                <td>{item.receiptDate}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
      <Pagination>
        <Pagination.Prev
          onClick={() => setCurrentPage(prev => (prev > 1 ? prev - 1 : prev))}
          disabled={currentPage === 1}
        />
        {[...Array(Math.ceil(ordersData.length / pageSize)).keys()].map(number => (
          <Pagination.Item
            key={number + 1}
            active={number + 1 === currentPage}
            onClick={() => handlePageChange(number + 1)}
          >
            {number + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() =>
            setCurrentPage(prev =>
              prev < Math.ceil(ordersData.length / pageSize) ? prev + 1 : prev
            )
          }
          disabled={currentPage === Math.ceil(ordersData.length / pageSize)}
        />
      </Pagination>
    </div>
  ) 
}

export default OrderTable