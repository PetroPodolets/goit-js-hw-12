import{a as q,i as f,S as x}from"./assets/vendor-df7371bc.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const E="43158866-7219a8d3eb05541ec3ccbc26d",k="https://pixabay.com/api/";async function y(s,e,r){return await(await q.get(`${k}?key=${E}&q=${s}&page=${e}&per_page=${r}`)).data}const h="/goit-js-hw-12/assets/error-d9947029.svg";function g(){f.show({message:"Sorry, there are no images matching your search query. Please, try again!",maxWidth:"340px",iconUrl:h,backgroundColor:"#ef4040",theme:"dark",color:"#fafafb",timeout:3e3,position:"topRight"})}function C(){f.show({message:"We're sorry, but you've reached the end of search results.",maxWidth:"340px",iconUrl:h,backgroundColor:"#ef4040",theme:"dark",color:"#fafafb",timeout:3e3,position:"topRight"})}function O(){f.show({message:"Sorry, you have an empty string",maxWidth:"340px",iconUrl:h,backgroundColor:"#ef4040",theme:"dark",color:"#fafafb",timeout:3e3,position:"topRight"})}function b(s,e){const r=e.map(({webformatURL:i,largeImageURL:t,tags:o,likes:n,views:P,comments:$,downloads:S})=>`<li class="li-img">
      <a href="${t}">
        <img class="img-descr" src="${i}" alt="${o}">
      </a>
      <ul class="info-photo">
        <li class="descr">
          <h2 class="descr-h2">Likes</h2>
          <p class="descr-p">${n}</p>
        </li>
        <li>
          <h2 class="descr-h2">Views</h2>
          <p class="descr-p">${P}</p>
        </li>
        <li>
          <h2 class="descr-h2">Comments</h2>
          <p class="descr-p">${$}</p>
        </li>
        <li>
          <h2 class="descr-h2">Downloads</h2>
          <p class="descr-p">${S}</p>
        </li>
      </ul>
    </li>`).join("");s.insertAdjacentHTML("beforeend",r)}const m=document.querySelector("form"),u=document.querySelector(".list"),w=document.querySelector(".loader"),a=document.querySelector(".loadBtn"),R=document.querySelector("#value");let c,d;const p=15,L=new x(".list li a",{captionDelay:300,captions:!0,captionsData:"alt",captionClass:"color-style"});function v(){w.style.display="block"}function l(){w.style.display="none"}function D(){let e=document.querySelector(".list li").getBoundingClientRect();window.scrollBy({top:2.25*e.height,behavior:"smooth"})}function H(){C(),a.style.display="none"}function M(s){p*c>=s?H():D()}l();m.addEventListener("submit",function(s){s.preventDefault(),v(),u.innerHTML="",a.style.display="none";const e=R.value.trim();if(!e){O(),l();return}c=1,y(e,c,p).then(r=>{if(r.hits.length===0)throw new Error("No images found");b(u,r.hits),L.refresh(),r.totalHits>15&&(a.style.display="block")}).catch(()=>{g()}).finally(()=>{l()}),d=e,m.reset()});a.addEventListener("click",s=>{s.preventDefault(),v(),c++,console.log(d),y(d,c,p).then(e=>{b(u,e.hits),L.refresh();const r=e.totalHits;M(r)}).catch(()=>{g()}).finally(()=>{l()})});
//# sourceMappingURL=commonHelpers.js.map
