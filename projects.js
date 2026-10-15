var P=[
 {id:"moki-mascot",n:"MOKI Mascot",c:"Illustration",bg:"#FDAEC7",o:"Give MOKI a face people remember.",d:"The mischievous pastel monster behind the brand.",f:"Vector mascot, animated intro, sticker-ready poses",live:1},
 {id:"pastel-ui-kit",n:"Pastel UI Kit",c:"UI/UX",bg:"#91D1FD",o:"A friendly, reusable design system.",d:"Soft, rounded interface components for apps and sites.",f:"Buttons, cards, forms, nav patterns"},
 {id:"sticker-pack-01",n:"Sticker Pack 01",c:"Stickers",bg:"#FED967",o:"Cute assets anyone can drop into their work.",d:"Chunky outlined stickers in the MOKI palette.",f:"Print and digital sizes"},
 {id:"poster-series",n:"Poster Series",c:"Posters",bg:"#FEF3D3",o:"Visuals that stop the scroll.",d:"Bold, colourful posters and social graphics.",f:"Poster, banner and story formats"},
 {id:"widget-pack",n:"Widget Pack",c:"Components",bg:"#FC6B8B",o:"Save builders hours.",d:"Reusable website widgets, ready to copy.",f:"Cards, hero blocks, creator credit"},
 {id:"book-cover-set",n:"Book Cover Set",c:"Book Covers",bg:"#91D1FD",o:"Stories deserve a good first look.",d:"Illustrated cover designs for indie authors.",f:"Front covers with editable layouts"}];

var ICON='<svg class="mi" viewBox="0 0 40 40" aria-hidden="true"><path d="M5 20C5 8 14 4 20 4s15 4 15 16z" fill="#FDAEC7" stroke="#1F0B0B" stroke-width="3" stroke-linejoin="round"/><path d="M3 21c4 3 6-2 10 0s6 2 10 0 6 2 10 0 4-1 4 0v5H3z" fill="#FEF3D3" stroke="#1F0B0B" stroke-width="3" stroke-linejoin="round"/><path d="M6 27c0 6 8 10 14 10s14-4 14-10z" fill="#FDAEC7" stroke="#1F0B0B" stroke-width="3" stroke-linejoin="round"/><circle cx="14" cy="14" r="2.4" fill="#1F0B0B"/><circle cx="26" cy="14" r="2.4" fill="#1F0B0B"/></svg>';

function card(p,i){
 return '<article class="pc" data-id="'+p.id+'" style="--c:'+p.bg+'">'
  +'<div class="pt">'
  +'<span class="pn">'+('0'+(i+1)).slice(-2)+'</span>'
  +'<span class="stk'+(p.live?'':' soon')+'">'+(p.live?'Free':'Soon')+'</span>'
  +ICON
  +'<span class="cat">'+p.c+'</span>'
  +'</div>'
  +'<div class="pb">'
  +'<h3>'+p.n+'</h3>'
  +'<p>'+p.d+'</p>'
  +'<div class="pf"><span class="lic2">'+(p.live?'Free download':'Coming soon')+'</span>'
  +'<button class="go" type="button">View &rarr;</button></div>'
  +'</div></article>';
}

function byId(id){for(var i=0;i<P.length;i++)if(P[i].id===id)return P[i];return null}

function renderCards(id,list){
 var el=document.getElementById(id);if(!el)return;
 el.innerHTML=list.map(card).join("");
 el.addEventListener("click",function(e){
  var c=e.target.closest(".pc");if(!c)return;
  location.href="project.html?id="+c.dataset.id;   /* Enter on the VIEW button bubbles here too */
 });
}

/* download counter — shared across the 3 pages, degrades to a no-op if storage is blocked */
function dlCount(){try{return +localStorage.getItem("moki-dl")||0}catch(e){return 0}}
function dlPaint(){var c=document.getElementById("cnt");if(c)c.textContent=dlCount()}
function dlAdd(){var n=dlCount()+1;try{localStorage.setItem("moki-dl",n)}catch(e){}dlPaint();return n}