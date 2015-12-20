(function (){
  var btnMenu = document.getElementById('btnMenu');
  var navbarMenu = document.getElementById('navbarMenu');
  var headerElem = document.querySelector('.header');

  loadCSS('https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css');
  loadCSS('https://fonts.googleapis.com/css?family=Lato|Montserrat')
  btnMenu.addEventListener('click', onclickMenu);
  function onclickMenu(){
    navbarMenu.classList.toggle("header-menu-list--show");
  }

  function loadCSS (url){
    var elem = document.createElement('link');
    elem.rel = 'stylesheet';
    elem.href = url;
    document.head.appendChild(elem);
  }
}());
