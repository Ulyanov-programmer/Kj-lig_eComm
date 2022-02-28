//? If you are making a multi-page site, i recommend dividing the contents of this file
//? into several parts and connecting them to each page separately.

//? Also, TSDoc is used here, so read the tips. Try hover on some constructor.

// fsnavmenu //
import FsNavmenu from './modules/fsNavmenu.js';

new FsNavmenu(
  '#burgerButton',
  '.fullscreen-navmenu',
  '.fs-element',
  true
)
FsNavmenu.fsNavmenuActiveClass = 'active'
FsNavmenu.burgerActiveClass = 'active'

// submenu //
import Submenu, { SubmenuElement } from './modules/submenu.js';

new Submenu(
  'show', 'active',
  new SubmenuElement(
    '#favorites',
    '#favoritesMenu',
  ),
  new SubmenuElement(
    '#card',
    '#cardMenu',
  ),
)
// modal window //
import ModalWindowMenu from './modules/modalWindow.js';

/*
  It works like this:
  Finds all elements that contain data-modal-link and .modal-closer.
  The first ones trigger the event of opening the modal window, the second ones close it.
  After clicking on one of these elements, 
  it looks for a block with a name inside data-modal-link and gives it the "active" class.

  Also, when pressed, turns off the scrolling page.
*/
new ModalWindowMenu(
  '[data-modal-link]', // i recommend this value.
  '.modal-closer',
  500,
  '.fullscreen-navmenu',
)

//? your scripts //
let toggleThemeButton = document.querySelector('#themeToggler')

toggleThemeButton.addEventListener('click', () => {
  document.querySelector('html').classList.toggle('dark')
})