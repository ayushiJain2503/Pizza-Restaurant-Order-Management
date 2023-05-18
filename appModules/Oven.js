export const Oven = class {
    constructor() {
      this.busy = false;
    }
  
    cookPizza(pizza) {
      this.busy = true;
      console.log('Cooking pizza for order:', pizza.order);
  
      setTimeout(() => {
        this.busy = false;
        this.servePizza(pizza);
      }, 10000);
    }
  
    servePizza(pizza) {
      const waiter = pizza.order.restaurant.getAvailableWaiter();
      if (waiter) {
        console.log('Serving pizza for order:', pizza.order);
        waiter.servePizza(pizza);
      } else {
        console.log('No available waiters. Pizza will be served later.');
      }
    }
  
    isBusy() {
      return this.busy;
    }
  }