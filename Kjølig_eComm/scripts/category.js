// submenu //
import Submenu, { SubmenuElement } from './modules/submenu.js';
new Submenu('show', 'active', new SubmenuElement('.products__new', '#newMenu'), new SubmenuElement('.products__filters', '#filtersMenu'));
let toTopButton = document.querySelector('#toTop');
toTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
