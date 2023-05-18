import { DoughChef } from "./appModules/DoughChef";
import { ToppingChef } from "./appModules/ToppingChef";
import { Oven } from "./appModules/Oven";
import { Waiter } from "./appModules/Waiter";
import { v4 as uuidv4 } from 'uuid';

export const PizzaRestaurant = class {
    constructor() {
      this.orders = [];
      this.doughChefs = [];
      this.toppingChefs = [];
      this.oven = null;
      this.waiters = [];
    }
  
    addOrder(order) {
      this.orders.push(order);
    }
  
    startProcessing() {
      this.doughChefs.push(new DoughChef(), new DoughChef());
      this.toppingChefs.push(new ToppingChef(), new ToppingChef(), new ToppingChef());
      this.oven = new Oven();
      this.waiters.push(new Waiter(), new Waiter());
  
      this.processOrders();
    }
  
    processOrders() {
        setInterval(() => {
            const randomOrder = this.generateRandomOrder();
            this.addOrder(randomOrder);
        }, 5000);
    }

    generateRandomOrder() {
        const toppings = ['Pepperoni', 'Mushrooms', 'Onions', 'Bell Peppers', 'Olives', 'Bacon'];
        const randomToppings = [];
        const numToppings = Math.floor(Math.random() * 4) + 1;
    
        for (let i = 0; i < numToppings; i++) {
          const randomIndex = Math.floor(Math.random() * toppings.length);
          randomToppings.push(toppings[randomIndex]);
        }
    
        return {
            toppings: randomToppings,
            id: uuidv4(),
            userId: uuidv4(),
            description: 'Lorem Ipsum, Lorem Ipsum',
            time: Math.floor(Math.random() * (20 - 5 + 1) + 5) + 'minutes',
            restaurant: this,
        };
      }
  
    getAvailableDoughChef() {
      return this.doughChefs.find(chef => !chef.isBusy());
    }
  
    getAvailableToppingChefs() {
      return this.toppingChefs.filter(chef => !chef.isBusy());
    }
  
    getAvailableWaiter() {
      return this.waiters.find(waiter => !waiter.isBusy());
    }
}