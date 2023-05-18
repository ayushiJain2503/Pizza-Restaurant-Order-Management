export const Waiter = class {
    constructor() {
      this.busy = false;
    }
  
    servePizza(pizza) {
      this.busy = true;
      console.log('Serving pizza for order:', pizza.order);
  
      setTimeout(() => {
        this.busy = false;
        console.log('Pizza served for order:', pizza.order);
      }, 5000);
    }
  
    isBusy() {
      return this.busy;
    }
  }