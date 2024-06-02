import { renderPizzas } from "./modules/renderPizzas";
import { toppingsToogle } from "./modules/toppingToogle";
import { renderToppings } from "./modules/renderToppings";



const init = () => {
    toppingsToogle();

    renderPizzas();
};

init();