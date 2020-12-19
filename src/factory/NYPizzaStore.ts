import { isTupleTypeNode } from "typescript";
import { PizzaType } from "../enum/pizzaTypes";
import { Pizza } from "../interfaces/Pizza";
import { PizzaStore } from "../interfaces/PizzaStore";
import { NYStyleCheesePizza } from "../pizas/NYStyle/NYStyleCheesePizza";
import { NYStyleClamPizza } from "../pizas/NYStyle/NYStyleClamPizza";

export class NYPizzaStore extends PizzaStore {
  constructor() {
    super();
  }
  protected createPizza(pizzaType: PizzaType): Pizza {
    if (pizzaType === PizzaType.Cheese) {
      return new NYStyleCheesePizza();
    } else if (pizzaType === PizzaType.Clam) {
      return new NYStyleClamPizza();
    }
  }
}
