import { PizzaType } from "../enum/pizzaTypes";
import { Pizza } from "../interfaces/Pizza";
import { PizzaStore } from "../interfaces/PizzaStore";
import { ChicagoStyleCheesePizza } from "../pizas/ChicagoStyle/ChicagoStyleCheesePizza";
import { ChicagoStyleClamPizza } from "../pizas/ChicagoStyle/ChicagoStyleClamPizza";

export class ChicagoPizzaStore extends PizzaStore {
  constructor() {
    super();
  }
  createPizza(pizzaType: PizzaType): Pizza {
    if (pizzaType === PizzaType.Cheese) {
      return new ChicagoStyleCheesePizza();
    } else if (pizzaType === PizzaType.Clam) {
      return new ChicagoStyleClamPizza();
    }
  }
}
