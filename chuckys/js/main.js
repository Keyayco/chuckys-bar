// CHUCKYS BAR — vanilla JS interactions
(function(){
  'use strict';

  // Loader
  window.addEventListener('load',()=>{
    const l=document.querySelector('.loader');
    if(l) setTimeout(()=>l.classList.add('hidden'),900);
  });

  // Nav scroll state
  const nav=document.querySelector('.nav');
  const onScroll=()=>{
    if(!nav) return;
    nav.classList.toggle('scrolled',window.scrollY>40);
  };
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  // Mobile menu
  const burger=document.querySelector('.hamburger');
  const mmenu=document.querySelector('.mobile-menu');
  if(burger&&mmenu){
    burger.addEventListener('click',()=>{
      burger.classList.toggle('open');
      mmenu.classList.toggle('open');
      document.body.style.overflow=mmenu.classList.contains('open')?'hidden':'';
    });
    mmenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      burger.classList.remove('open');mmenu.classList.remove('open');document.body.style.overflow='';
    }));
  }

  // Cursor glow
  const glow=document.querySelector('.cursor-glow');
  if(glow&&matchMedia('(hover:hover)').matches){
    let tx=0,ty=0,cx=0,cy=0;
    window.addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY});
    (function tick(){
      cx+=(tx-cx)*.12;cy+=(ty-cy)*.12;
      glow.style.transform=`translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      requestAnimationFrame(tick);
    })();
  }

  // Reveal on scroll
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
  },{threshold:.15,rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el=>io.observe(el));

  // Parallax hero image
  const heroImg=document.querySelector('.hero-media img');
  if(heroImg){
    window.addEventListener('scroll',()=>{
      const y=window.scrollY;
      if(y<window.innerHeight){
        heroImg.style.transform=`scale(1.1) translateY(${y*.25}px)`;
      }
    },{passive:true});
  }

  // Event card mouse-follow highlight
  document.querySelectorAll('.event').forEach(card=>{
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      card.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');
      card.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%');
    });
  });

  // Magnetic buttons
  document.querySelectorAll('.btn').forEach(btn=>{
    btn.addEventListener('mousemove',e=>{
      const r=btn.getBoundingClientRect();
      const x=(e.clientX-r.left-r.width/2)*.2;
      const y=(e.clientY-r.top-r.height/2)*.3;
      btn.style.transform=`translate(${x}px,${y}px)`;
    });
    btn.addEventListener('mouseleave',()=>{btn.style.transform=''});
  });

  // Highlight today's hours
  const today=new Date().getDay(); // 0=Sun..6=Sat
  const map={0:6,1:0,2:1,3:2,4:3,5:4,6:5}; // list rendered Mon-Sun
  const list=document.querySelectorAll('.hours-list li');
  if(list.length===7){list[map[today]].classList.add('today')}

  // Active nav link
  const path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const h=a.getAttribute('href');
    if(h===path||(path===''&&h==='index.html')) a.classList.add('active');
  });
})();
