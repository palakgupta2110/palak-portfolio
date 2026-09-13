const words=["Data Analytics","AI / Machine Learning","Software Development","Problem Solving"];
let wi=0,ci=0,deleting=false;const typed=document.getElementById("typed");
function typeLoop(){const w=words[wi];typed.textContent=deleting?w.slice(0,ci--):w.slice(0,ci++);let d=deleting?42:78;if(!deleting&&ci>w.length){deleting=true;d=1250}else if(deleting&&ci<0){deleting=false;wi=(wi+1)%words.length;ci=0;d=300}setTimeout(typeLoop,d)}typeLoop();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const menu=document.querySelector(".menu-btn"),nav=document.querySelector("nav");menu.addEventListener("click",()=>nav.classList.toggle("open"));document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

document.querySelectorAll('a[href="#projects"]').forEach(link=>{
  link.addEventListener('click',()=>{
    setTimeout(()=>document.getElementById('projects')?.scrollIntoView({behavior:'smooth',block:'start'}),10);
  });
});
