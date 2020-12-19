import { PizzaType } from "./enum/pizzaTypes";
import { NYPizzaStore } from "./factory/NYPizzaStore";
import { Pizza } from "./interfaces/Pizza";
import { PizzaStore } from "./interfaces/PizzaStore";

console.log(
  "Hello, welcome to Factory Method design pattern...using TypeScript"
);

let nyPizzaStore: PizzaStore = new NYPizzaStore();
let pizza: Pizza = nyPizzaStore.orderPizza(PizzaType.Cheese);
