import { renderPizzas } from './modules/renderPizzas.js';
import { renderToppings } from './modules/renderToppings.js';
import { toppingsToogle } from './modules/toppingToogle.js';



const init = () => {
    renderPizzas();
    renderToppings();
    toppingsToogle();
};

init();