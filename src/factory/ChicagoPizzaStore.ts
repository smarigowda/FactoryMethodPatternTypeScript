import { PizzaType } from "../enum/pizzaTypes";
import { Pizza } from "../interfaces/Pizza";
import { PizzaStore } from "../interfaces/PizzaStore";
import { ChicagoStyleCheesePizza } from "../pizas/ChicagoStyle/ChicagoStyleCheesePizza";

export class ChicagoPizzaStore extends PizzaStore {
  constructor() {
    super();
  }
  createPizza(pizzaType: PizzaType): Pizza {
    if (pizzaType === PizzaType.Cheese) {
      return new ChicagoStyleCheesePizza();
    }
  }
}
