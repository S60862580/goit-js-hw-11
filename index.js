import{a as d,S as p,i as a}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",g="54694924-0cbff3df35e5124e95f47eab6";async function h(i){const r={key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"};return(await d.get(m,{params:r})).data}const c=document.querySelector(".loader"),l=document.querySelector(".gallery");let y=new p(".gallery a");function L(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:f})=>`
    <li class="gallery-item">
        <a href="${n}">
            <img src="${o}" alt="${e}" ></img></a>
        <div class="infor">
     <p>${t}Likes</p>
            <p> ${s}Views</p>
            <p> ${u}Comments</p>
        <p> ${f}Downloads</p>
    </div>
     </li>
   `).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}function b(){l.innerHTML=""}function S(){c.classList.remove("is-hidden")}function w(){c.classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",v);function v(i){i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(r===""){a.warning({message:"Please enter a search query!",position:"topRight"});return}b(),S(),h(r).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(o=>{a.error({message:"Something went wrong. Try again later.",position:"topRight"}),console.log(o)}).finally(()=>{w()})}
//# sourceMappingURL=index.js.map
