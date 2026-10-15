(function(){
var D=window.SCREENS,$=function(s){return document.querySelector(s)},cur=0,im=[],tb=[],st=[];
var red=matchMedia('(prefers-reduced-motion:reduce)').matches;
document.documentElement.classList.add('js');
var scr=$('#scr'),tabs=$('#tabs'),steps=$('#steps'),cap=$('#cap'),cnt=$('#cnt');
D.forEach(function(s,i){
 var m=new Image();m.src=s.src;m.alt=s.alt;m.loading=i?'lazy':'eager';m.onload=function(){if(i==cur)ratio()};scr.appendChild(m);im.push(m);
 var b=document.createElement('button');b.type='button';b.textContent=(i+1)+'. '+s.tab;b.onclick=function(){set(i)};tabs.appendChild(b);tb.push(b);
 var a=document.createElement('article');a.innerHTML='<p class="n"></p><h3></h3><p></p>';a.children[0].textContent=(i+1)+' / '+D.length;a.children[1].textContent=s.title;a.children[2].textContent=s.text;steps.appendChild(a);st.push(a);
});
function ratio(){var m=im[cur];if(m.naturalWidth)scr.style.setProperty('--ar',m.naturalWidth/m.naturalHeight)}
function set(i){cur=(i+D.length)%D.length;im.forEach(function(m,j){m.classList.toggle('on',j==cur)});tb.forEach(function(b,j){b.setAttribute('aria-current',j==cur)});st.forEach(function(a,j){a.classList.toggle('on',j==cur)});
 ratio();cnt.textContent=(cur+1)+' / '+D.length;cap.innerHTML='<b></b><span></span>';cap.firstChild.textContent=D[cur].title;cap.lastChild.textContent=D[cur].text}
set(0);
$('#prev').onclick=function(){set(cur-1)};$('#next').onclick=function(){set(cur+1)};
if('IntersectionObserver'in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var i=st.indexOf(e.target);if(i>-1)set(i)}})},{rootMargin:'-45% 0px -45% 0px'});st.forEach(function(a){io.observe(a)});
 var rv=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');rv.unobserve(e.target)}})},{threshold:.15});document.querySelectorAll('.rv').forEach(function(x){rv.observe(x)})
}else document.querySelectorAll('.rv').forEach(function(x){x.classList.add('in')});
/* lightbox */
var lb=$('#lb'),li=$('#limg'),lc=$('#lcap'),opener,k=0;
function show(i){k=(i+D.length)%D.length;li.src=D[k].src;li.alt=D[k].alt;lc.textContent=(k+1)+' / '+D.length+' · '+D[k].title}
$('#open').onclick=function(){opener=this;show(cur);if(lb.showModal)lb.showModal();else lb.setAttribute('open','')};
$('#lx').onclick=function(){lb.close()};$('#lprev').onclick=function(){show(k-1)};$('#lnext').onclick=function(){show(k+1)};
lb.addEventListener('click',function(e){if(e.target===lb)lb.close()});
lb.addEventListener('keydown',function(e){if(e.key=='ArrowLeft')show(k-1);if(e.key=='ArrowRight')show(k+1)});
lb.addEventListener('close',function(){set(k);if(opener)opener.focus()});
/* hero parallax */
var fan=$('#fan'),t=0;
if(!red)addEventListener('scroll',function(){if(t)return;t=requestAnimationFrame(function(){t=0;fan.style.setProperty('--py',Math.min(scrollY,500)*.07)})},{passive:true});
})();
