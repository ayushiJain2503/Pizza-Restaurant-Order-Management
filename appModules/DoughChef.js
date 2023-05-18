export const DoughChef = class {
    constructor() {
      this.busy = false;
    }
  
    prepareDough(order) {
      this.busy = true;
      console.log('Preparing dough for order:', order);
  
      setTimeout(() => {
        this.busy = false;
        this.addToppings(order);
      }, 7000);
    }
  
    addToppings(order) {
      const toppingChefs = order.restaurant.getAvailableToppingChefs();
      if (toppingChefs.length >= order.toppings.length) {
        const pizza = {
          order: order,
          toppings: [],
        };
  
        for (let i = 0; i < order.toppings.length; i++) {
          const topping = order.toppings[i];
          const chef = toppingChefs[i];
          chef.addTopping(pizza, topping);
        }
      } else {
        console.log('Not enough available topping chefs for order:', order);
      }
    }
  
    isBusy() {
      return this.busy;
    }
}
