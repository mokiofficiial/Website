/* THE FAMILY — asli members daalne ke liye bas ye array edit karo.
   n = naam · r = role · c = accent colour · t = tags · d = ek line intro */
var F=[
 {id:"aarav",n:"Aarav Mehta",r:"Co-founder · Design",c:"#FDAEC7",t:["Brand","Illustration","Design Systems"],d:"Owns the MOKI look — every mascot, sticker and title graphic starts here."},
 {id:"diya",n:"Diya Nair",r:"Co-founder · Code",c:"#91D1FD",t:["Front-end","Motion","Tooling"],d:"Builds the sites, keeps the pages fast and the animation cheap."},
 {id:"rohan",n:"Rohan Verma",r:"Illustrator",c:"#FED967",t:["Characters","Stickers","Posters"],d:"Draws the cast. Turns rough ideas into sticker-ready vectors."},
 {id:"sana",n:"Sana Kapoor",r:"Product & Research",c:"#FEF3D3",t:["UX","Copy","Community"],d:"Decides what gets built and writes the words that explain it."}];

/* placeholder avatar — real photo dalne ke liye isko <img> se replace kar dena */
var AVA='<svg class="mi" viewBox="0 0 40 40" aria-hidden="true">'
 +'<circle cx="20" cy="21" r="15" fill="#FEF3D3" stroke="#1F0B0B" stroke-width="3"/>'
 +'<path d="M9 15c2-6 6-9 11-9s9 3 11 9" fill="#FDAEC7" stroke="#1F0B0B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
 +'<circle cx="15" cy="21" r="2.2" fill="#1F0B0B"/><circle cx="25" cy="21" r="2.2" fill="#1F0B0B"/>'
 +'<path d="M16 27c2.5 2 5.5 2 8 0" fill="none" stroke="#1F0B0B" stroke-width="2.6" stroke-linecap="round"/></svg>';

function famCard(m){
 return '<article class="fm" style="--c:'+m.c+'">'
  +'<div class="fmh">'+AVA+'<span class="fmr">'+m.r+'</span></div>'
  +'<div class="fmb"><h3>'+m.n+'</h3><p>'+m.d+'</p>'
  +'<div class="ftags">'+m.t.map(function(x){return '<span class="ftag">'+x+'</span>'}).join("")+'</div>'
  +'</div></article>';
}

function renderFamily(id){var el=document.getElementById(id);if(el)el.innerHTML=F.map(famCard).join("")}