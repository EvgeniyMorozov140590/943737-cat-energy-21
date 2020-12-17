const navMenuButton = document.querySelector('#nav-menu-button');

navMenuButton.addEventListener('click', function() {
  const menuOpened = this.classList.contains('menu-button--menu-opened');
  const menu = document.querySelector('#nav-menu');

  if (menuOpened) {
    this.classList.toggle('menu-button--menu-opened', false);
    this.classList.toggle('menu-button--menu-closed', true);
    menu.classList.toggle('page-nav--closed', true);
  } else {
    this.classList.toggle('menu-button--menu-opened', true);
    this.classList.toggle('menu-button--menu-closed', false);
    menu.classList.toggle('page-nav--closed', false);
  }
});
