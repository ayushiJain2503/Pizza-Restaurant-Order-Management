export const ToppingChef = class {
    constructor() {
      this.busy = false;
    }
  
    addTopping(pizza, topping) {
      this.busy = true;
      console.log('Adding', topping, 'topping to pizza for order:', pizza.order);
  
      setTimeout(() => {
        this.busy = false;
        pizza.toppings.push(topping);
        this.checkIfPizzaIsReady(pizza);
      }, 4000);
    }
  
    checkIfPizzaIsReady(pizza) {
      if (pizza.toppings.length === pizza.order.toppings.length) {
        this.bakePizza(pizza);
      }
    }
  
    bakePizza(pizza) {
      pizza.order.restaurant.oven.cookPizza(pizza);
    }
  
    isBusy() {
      return this.busy;
    }
  }