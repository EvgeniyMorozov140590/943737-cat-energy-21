var navMenuButton = document.querySelector('#nav-menu-button');

navMenuButton.classList.toggle('menu-button--hide', false);

navMenuButton.addEventListener('click', function() {
  var menuOpened = this.classList.contains('menu-button--menu-opened');
  var menu = document.querySelector('#nav-menu');

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

navMenuButton.dispatchEvent(new Event('click'));
