let t=null;const e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");function o(){let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}e.addEventListener("click",(function(){e.setAttribute("disabled",""),t=setInterval(o,1e3)})),n.addEventListener("click",(function(){clearInterval(t),e.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.f15c9824.js.map
