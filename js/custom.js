// Setting For Web
let titleName = 'Corp Vision[2024]';
document.title = titleName;
// Code Navbar Active Link
let allActive = document.querySelectorAll('.navbar-nav .nav-link');
allActive.forEach(function (el) {
  el.onclick = function () {
    allActive.forEach(function (el) {
      el.classList.remove('active');
    });
    el.classList.add('active');
  };
});

// Show And Hide Search Inbox
let iconSearch = document.querySelector('.search');
let boxSearch = document.querySelector('.search-input');
let xMark = document.querySelector('.x');
// Show Box Search
iconSearch.onclick = function () {
  boxSearch.style.display = 'flex';
}
// Hide Box Search
xMark.onclick = function () {
  boxSearch.style.display = 'none';
}

// Code ScrollTop
let moveScroll = document.querySelector('.up');
// On Scroll
window.onscroll = function () {
  if (this.scrollY >= 1500) {
    moveScroll.classList.add('show');
  } else {
    moveScroll.classList.remove('show');
  }
};
// On Click
moveScroll.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};