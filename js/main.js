(function(){
var $=function(s){return document.querySelector(s)},$$=function(s){return[].slice.call(document.querySelectorAll(s))};
var red=matchMedia('(prefers-reduced-motion:reduce)').matches;
document.documentElement.classList.add('js');
$('#yr').textContent=new Date().getFullYear();
/* menu */
var menu=$('#menu'),links=$('#links');
menu.onclick=function(){var o=links.classList.toggle('open');menu.setAttribute('aria-expanded',o)};
$$('#links a').forEach(function(a){a.onclick=function(){links.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
/* light/dark swap */
var fl=$('#flip');
if(localStorage.getItem('kh-flip')==='1')document.documentElement.setAttribute('data-flip','');
fl.onclick=function(){var d=document.documentElement,on=d.hasAttribute('data-flip');on?d.removeAttribute('data-flip'):d.setAttribute('data-flip','');localStorage.setItem('kh-flip',on?'0':'1')};
/* active link + reveal */
if('IntersectionObserver'in window){
 var L=$$('#links a');
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)L.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')=='#'+e.target.id)})})},{rootMargin:'-40% 0px -55% 0px'});
 $$('main section[id]').forEach(function(s){io.observe(s)});
 var rv=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');rv.unobserve(e.target)}})},{threshold:.12});
 $$('.wrap>*,.pbox,.card,.posts article,.tl li,.nti figure,.acard>*').forEach(function(x){x.classList.add('rv');rv.observe(x)});
}
/* hero parallax */
var t=0;if(!red)addEventListener('scroll',function(){if(t)return;t=requestAnimationFrame(function(){t=0;document.documentElement.style.setProperty('--py',Math.min(scrollY,700)*.12)})},{passive:true});
/* certificate viewer */
var C=[{s:'assets/cert-ieee.jpg',a:'IEEE Xtreme 19.0 Certificate of Participation for Kareem Hawash, team bangGOAT, signed by the IEEE President, 25 October 2025',c:'IEEE Xtreme 19.0 · Certificate of Participation · October 25, 2025'},
{s:'assets/cert-psu.jpg',a:'IEEE Xtreme 19.0 Certificate of Participation for Kareem Elsayed Hawash, hosted by IEEE PSU Student Branch, 31 October 2025. Participant ID hidden for privacy.',c:'IEEE Xtreme 19.0 · Hosted by IEEE PSU Student Branch · Participant ID hidden for privacy'}];
var lb=$('#lb'),li=$('#limg'),lc=$('#lcap'),k=0,op;
function show(i){k=(i+C.length)%C.length;li.src=C[k].s;li.alt=C[k].a;lc.textContent=(k+1)+' / '+C.length+' · '+C[k].c}
$$('.cert').forEach(function(b){b.onclick=function(){op=b;show(+b.dataset.i);lb.showModal?lb.showModal():lb.setAttribute('open','')}});
$('#lx').onclick=function(){lb.close()};$('#lp').onclick=function(){show(k-1)};$('#ln').onclick=function(){show(k+1)};
lb.addEventListener('click',function(e){if(e.target===lb)lb.close()});
lb.addEventListener('keydown',function(e){if(e.key=='ArrowLeft')show(k-1);if(e.key=='ArrowRight')show(k+1)});
lb.addEventListener('close',function(){if(op)op.focus()});
})();
