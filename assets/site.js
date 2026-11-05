// Language switch: Vietnamese / English.
// Default follows the browser language; the choice is remembered in localStorage.
(function () {
  var KEY = 'taskring-lang';
  var root = document.documentElement;

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function detect() {
    var s = saved();
    if (s === 'vi' || s === 'en') return s;
    var langs = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < langs.length; i++) {
      var l = (langs[i] || '').toLowerCase();
      if (l.indexOf('vi') === 0) return 'vi';
      if (l) return 'en';
    }
    return 'vi';
  }
  function apply(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang);
    var t = root.getAttribute('data-title-' + lang);
    if (t) document.title = t;
  }

  apply(detect());

  document.addEventListener('DOMContentLoaded', function () {
    var btns = document.querySelectorAll('[data-lang-toggle]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function (e) {
        e.preventDefault();
        var next = root.getAttribute('data-lang') === 'vi' ? 'en' : 'vi';
        apply(next);
        try { localStorage.setItem(KEY, next); } catch (e) {}
      });
    }
    var y = document.querySelectorAll('[data-year]');
    for (var j = 0; j < y.length; j++) y[j].textContent = new Date().getFullYear();
  });
})();
