(function(){var g=document&&document.currentScript&&document.currentScript.src;(window.webpackJsonpruntime=window.webpackJsonpruntime||[]).push([[20],{aQKb:function(p,i,c){"use strict";c.r(i),c.d(i,"init",function(){return l});function l(){u(),m()}function u(){const t=document.querySelectorAll('.dmMobileBody [dmle_extension="onelinksmenu"] li.dmUDNavigationItem_dmMore > a');t.forEach(e=>e.removeEventListener("click",s)),t.forEach(e=>e.addEventListener("click",s))}function s(t){const e=t.target.closest("li.dmUDNavigationItem_dmMore");e.classList.add("hover"),document.body.addEventListener("click",()=>{e.classList.remove("hover")},{once:!0})}function m(){[...document.querySelectorAll(`.unifiednav:not([data-nav-structure='VERTICAL']) .unifiednav__container_sub-nav[data-depth="0"]`)].forEach(t=>{const e=t.querySelector(".unifiednav__container"),n=t.getBoundingClientRect();n.top+n.height<=window.innerHeight||(e?(t.style.transitionDuration="0.2s",t.addEventListener("wheel",o=>{o.preventDefault();const r=o.currentTarget,h=Number(r.dataset.scrollY||0),a=window._navScrollSpeed||35,v=o.deltaY>0?a:-a,f=n.height-window.innerHeight+n.top,d=Math.max(0,Math.min(h+v,f));r.dataset.scrollY=d,r.style.transform=`translate(0, -${d}px)`})):(t.style.maxHeight="65vh",t.style.overflow="auto"))})}}}])})();
