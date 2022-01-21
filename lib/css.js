/**!
* tippy.js v6.3.7-esm.0
* (c) 2017-2022 atomiks
* MIT License
*/
function injectCSS(css) {
  var style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-tippy-stylesheet', '');
  var head = document.head;
  var firstStyleOrLinkTag = document.querySelector('head>style,head>link');

  if (firstStyleOrLinkTag) {
    head.insertBefore(style, firstStyleOrLinkTag);
  } else {
    head.appendChild(style);
  }
}

export { injectCSS };
//# sourceMappingURL=css.js.map
