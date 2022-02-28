// accordion //
import Accordion from './modules/accord.js';
/* Attention,
  the display property for inactive accordion elements
  does not allow them to be hidden.
  If you need to use it, set it via the active element class.
*/
let productAccrod = new Accordion('.product-block__accord-btn', '.product-content', 200);
productAccrod.buttonsActiveClass = 'active';
productAccrod.contentActiveClass = 'active';
