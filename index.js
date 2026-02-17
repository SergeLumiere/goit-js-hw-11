import{a as d,S as f,i as n}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p=d.create({baseURL:"https://pixabay.com/api/",params:{key:"54679610-8cb3c8a86ad83c3b54957649e",image_type:"photo",orientation:"horizontal",safesearch:!0}});function g(o){return p.get("",{params:{q:o}}).then(r=>r.data)}const c=document.querySelector(".gallery"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const r=o.map(({webformatURL:a,largeImageURL:i,tags:e,likes:t,views:s,comments:u,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img class="gallery-image" src="${a}" alt="${e}" loading="lazy" />
        </a>

        <div class="info">
          <p class="info-item"><b>Likes</b> ${t}</p>
          <p class="info-item"><b>Views</b> ${s}</p>
          <p class="info-item"><b>Comments</b> ${u}</p>
          <p class="info-item"><b>Downloads</b> ${m}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function b(){c.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("is-hidden")}function S(){document.querySelector(".loader").classList.add("is-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",q);function q(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query!",position:"topRight"});return}b(),L(),g(r).then(a=>{const i=a.hits;if(!i.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(i)}).catch(()=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{S(),l.reset()})}
//# sourceMappingURL=index.js.map
