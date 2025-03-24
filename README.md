# Описание

В данном проекте реализован сайт с возможностью посмотреть список заказов, открыть детальный заказ по клику на строку в таблице заказов и создать новый заказ.

Через docker-compose создаются 3 контейнера: frontend, backend и database:

- frontend - фронтенд часть проекта написаная на reactjs
- backend - WebApi на .Net
- database - Postgresql БД с хранием данных на локальном хосте

### Добавлены 3 адреса на странице:
- https://localhost:5173/orders - список всех товаров
- https://localhost5173/orders/id, где id номер заказа - страница конкретного заказа
- https://localhost5173/orders/create - страница создания заказа


### Настройки портов: 
- frontend: https://localhost:5173 или https://frontend:5173 - в сети докера
- backend: http://localhost:9090 и https://localhost:9091 или http://backend:9090 и https://backend:9091 - в сети докера
- database: localhost:5434 или database:5432 - в сети докера

В database настроено сохранение данных на хост через volume.

# Стек

### Frontend
- React JS
- React Bootstrap
- React Router
- Axios
- Vite

### Backend

- .Net 9.0
- ASP.NET Core 9.0
- EF
- PostgresSQL


# Для запуска 

Вызвать из директории DeliveryOrders:

```
mkdir ./config/certs 

dotnet dev-certs https --format pem -ep ./config/certs/localhost.pem -p 1234

docker-compose up --build
```

Создается директория certs, в которую помещаются файлы сертифката localhost в формате pem с паролем 1234. Затем этот сертификат используется в контейнерах frontend и backend, через volume докера
