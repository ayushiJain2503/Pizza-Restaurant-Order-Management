import { PizzaRestaurant } from './PizzaRestaurant';
import { v4 as uuidv4 } from 'uuid';

const http = require('http');
const { WebSocketServer } = require('ws');

const server = http.createServer((request, response) => { 
});

const wsServer = new WebSocketServer({ server });

const pizzaRestaurant = new PizzaRestaurant();

const orders = {};

wsServer.on('connection', function(connection) {
  
  const orderId = uuidv4();
  console.log(`Recieved a new connection.`);

  // Store the new connection and handle messages
  orders[orderId] = connection;
});

function broadcastMessage(json) {
    const data = JSON.stringify(json);
    for(let id in orders) {
      let client = orders[id];
      if(client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    };
  }

wsServer.on('request', (request) => {
  const connection = request.accept(null, request.origin);

  connection.on('message', (message) => {
    if (message.type === 'utf8') {
      const data = JSON.parse(message.utf8Data);
      
      // Process the received order
      const order = {
        toppings: data.toppings,
        restaurant: pizzaRestaurant,
      };
      pizzaRestaurant.addOrder(order);
    }
  });

  // Start processing orders when the connection is established
  pizzaRestaurant.startProcessing();
});

// Start the server
const port = 8080;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

