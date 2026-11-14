import { useEffect, useRef, useState } from 'react';
import projects from './data/gallery.json';
import './App.css';
import Icon from './components/Icon.jsx';
const asset = src => `./${src.split('/').map(encodeURIComponent).join('/')}`;
function youtubeEmbedUrl(value) {
 if (!value) return '';
 try {
  const url = new URL(value);
  if (url.hostname === 'youtu.be') return `https://www.youtube-nocookie.com/embed/${url.pathname.slice(1)}`;
  const queryId = url.searchParams.get('v');
  if (queryId) return `https://www.youtube-nocookie.com/embed/${queryId}`;
  const parts = url.pathname.split('/').filter(Boolean);
  const marker = parts.findIndex(part => ['shorts', 'embed', 'live'].includes(part));
  return `https://www.youtube-nocookie.com/embed/${marker >= 0 ? parts[marker + 1] : parts.at(-1)}`;
 } catch { return `https://www.youtube-nocookie.com/embed/${value}`; }
}
const details = {
 'Event logo designs': ['Nocturne', 'Event identity', 'A dramatic event identity built around expressive lettering, metallic texture, and a restrained red palette.'],
 '3 klean services - Business Card': ['3 Klean Services', 'Business card design', 'A coordinated front and back layout, balancing brand colour, contact information, and a scannable QR code.'],
 'Wrist Band Designs': ['MITians', 'Merchandise design', 'One identity, explored across three wristband colourways. Typography and contrast keep the message clear at a small scale.'],
 'Document cover designs': ['TEDx UoK', 'Editorial cover design', 'A proposal cover using bold scale, red-on-black contrast, and a clear typographic hierarchy.'],
 'Sahasra ticket design': ['Sahasra', 'Ticket design', 'Three ticket artboards exploring a bold event identity and a clear, print-ready layout.'],
 'Graduation Photography': ['Graduation portraits', 'Photo editing & colour', 'A portrait series exploring natural colour, soft backgrounds, and selective colour to draw attention to the moment.'],
 'Self portrait edit': ['A study in light', 'Portrait editing', 'A personal portrait edit with warm highlights, deep shadows, and a considered colour treatment.'],
 'Needs Campus Student Portal launch video - SaaS project demonstration': ['Needs Campus', 'Product launch film', 'A launch video introducing a student portal through a product demonstration. An example of my video editing work for a software project.'],
 'THE MUSIC INSTITUTE OF TOMORROW': ['The Music Institute of Tomorrow', 'Campaign design', 'A bilingual campaign system for music classes, with instrument-led layouts, clear hierarchy, and a friendly visual language.'],
 'Tomorrow Band Packages': ['Tomorrow Music', 'Package campaign', 'A set of polished package cards for a live band, balancing artist photography, pricing, and a clear service structure.'],
 'Background loop created for GrandMaster': ['GrandMaster', 'Motion background', 'A looping visual treatment created for the GrandMaster programme.'],
 'Background loop created for GrandMaster (2)': ['GrandMaster', 'Motion background', 'A second looping visual treatment created for the GrandMaster programme.'],
 'GrandMaster contestant intro': ['GrandMaster', 'Contestant intro', 'A short contestant introduction edit with a broadcast-ready pace.'],
};
const chapters = [
 {id:'design',category:'Graphic design',title:'Graphic design',intro:'Identity, typography, and the details that bring a design together.',skills:'Event identities / Campaigns / Print layouts / Merchandise'},
 {id:'photography',category:'Photo editing',title:'Photo editing',intro:'A considered approach to colour, light, and the feeling of an image.',skills:'Portraits / Colour treatment / Selective colour'},
 {id:'motion',category:'Video editing',title:'Video editing',intro:'Turning a sequence of moments into a clear visual story.',skills:'Product demonstrations / Launch videos'},
 ...[...new Set(projects.map(p=>p.category))].filter(c=>!['Graphic design','Photo editing','Video editing'].includes(c)).map((c,i)=>({id:`other-${i}`,category:c,title:c,intro:'Further selected work.',skills:'Selected projects'})),
];
function createSlides(category) {
 return projects.filter(p=>p.category===category).flatMap(p=>{
  const [title,kind,description]=details[p.title]||[p.title,p.category,'A selection of my work.'];
  if(p.title==='THE MUSIC INSTITUTE OF TOMORROW'){
   const folders=new Map();
   p.files.forEach(file=>{
    const parts=file.src.split('/');
    const classPackagesIndex=parts.indexOf('Class packages');
    const folder=classPackagesIndex>=0?parts[classPackagesIndex+1]:'Selected designs';
    const group=folders.get(folder)||[];
    group.push(file);
    folders.set(folder,group);
   });
   const groups=[...folders.entries()];
   return groups.map(([folder,folderFiles],index)=>({title:folder,kind:`${title} · ${kind}`,description,files:folderFiles,part:index+1,total:groups.length}));
  }
  const files=p.title==='Graduation Photography'?[...p.files].sort((a,b)=>{
   const order=['_DSC3212','_DSC3236','_DSC3297','_DSC3039','_DSC3059','_DSC3208'];
   return order.indexOf(a.name)-order.indexOf(b.name);
  }):p.files;
  const pages=[];
  const size=3;
  for(let i=0;i<files.length;i+=size) pages.push({title,kind,description,files:files.slice(i,i+size),part:Math.floor(i/size)+1,total:Math.ceil(files.length/size)});
  return pages;
 });
}
function blockAssetAction(event) {
 if (event.target.closest?.('[data-protected-asset]')) event.preventDefault();
}
function ProtectedImage({file, alt}) {
 return <img data-protected-asset draggable="false" src={asset(file.src)} alt={alt} loading="lazy" decoding="async" />;
}
function ProtectedVideo({file, title}) {
 if (!file.youtubeId) return <div className="video-placeholder" data-protected-asset><strong>{title}</strong><span>Video coming soon on YouTube.</span></div>;
 return <div className="youtube-frame"><iframe src={`${youtubeEmbedUrl(file.youtubeId)}?rel=0`} title={`${title} video`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>;
}
function Chapter({chapter}) {
 const slides=createSlides(chapter.category);
 const [index,setIndex]=useState(0);
 const touch=useRef(null);
 if(!slides.length)return null;
 const slide=slides[index];
 const move=delta=>setIndex(current=>(current+delta+slides.length)%slides.length);
 return <section className="chapter" id={chapter.id} aria-labelledby={`${chapter.id}-title`}>
  <h2 className="sr-only" id={`${chapter.id}-title`}>{chapter.title}</h2>
  <div className="carousel" role="region" aria-roledescription="carousel" aria-label={`${chapter.title} collection`}>
   <div className={`stage ${chapter.id} count-${slide.files.length} ${slide.files[0].type}`} tabIndex={slides.length>1?0:undefined} aria-label={`${slide.title}. ${slides.length>1?'Use left and right arrow keys to browse.':''}`}
    onKeyDown={e=>{if(e.target!==e.currentTarget)return;if(e.key==='ArrowRight'){e.preventDefault();move(1);}if(e.key==='ArrowLeft'){e.preventDefault();move(-1);}}}
    onTouchStart={e=>{if(e.target.closest('video,a,button'))return;touch.current={x:e.touches[0].clientX,y:e.touches[0].clientY};}}
    onTouchEnd={e=>{if(!touch.current)return;const dx=e.changedTouches[0].clientX-touch.current.x;const dy=e.changedTouches[0].clientY-touch.current.y;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy))move(dx<0?1:-1);touch.current=null;}}>
    <div className="slide-media" key={index} role="group" aria-roledescription="slide" aria-label={`${index+1} of ${slides.length}: ${slide.title}`}>
     {slide.files.map(f=>f.type==='image'?<ProtectedImage key={f.src} file={f} alt={`${slide.title} — ${f.name}`}/>:f.type==='video'?<ProtectedVideo key={f.src} file={f} title={slide.title}/>:<div className="document-slide" data-protected-asset key={f.src}><span className="overline">Print design / PDF</span><strong>{slide.title}</strong><span className="protected-note">Protected preview · source file not downloadable</span></div>)}
    </div>
   </div>
   <div className="slide-details"><div className="slide-copy" aria-live="polite" aria-atomic="true"><p className="overline">{slide.kind}{slide.total>1?` · Series ${slide.part}/${slide.total}`:''}</p><h3>{slide.title}</h3><p className="description">{slide.description}</p></div><div className="slide-controls"><span className="counter">{String(index+1).padStart(2,'0')} <span>/ {String(slides.length).padStart(2,'0')}</span></span>{slides.length>1&&<div className="arrows"><button onClick={()=>move(-1)} aria-label={`Previous ${chapter.title.toLowerCase()} slide`}><Icon name="previous" /></button><button onClick={()=>move(1)} aria-label={`Next ${chapter.title.toLowerCase()} slide`}><Icon name="next" /></button></div>}</div></div>
   {slides.length>1&&<div className="slide-progress" aria-label={`Choose ${chapter.title.toLowerCase()} slide`}>{slides.map((s,i)=><button key={`${s.title}-${s.part}`} onClick={()=>setIndex(i)} aria-label={`Show ${s.title}${s.total>1?` series ${s.part}`:''}`} aria-current={i===index?'true':undefined}><span/></button>)}</div>}
  </div><p className="chapter-skills">{chapter.skills}</p>
 </section>;
}
export default function App(){
 const [active,setActive]=useState(chapters[0].id);
 const chapter=chapters.find(c=>c.id===active);
 useEffect(()=>{
  document.addEventListener('contextmenu',blockAssetAction);
  document.addEventListener('dragstart',blockAssetAction);
  return ()=>{
   document.removeEventListener('contextmenu',blockAssetAction);
   document.removeEventListener('dragstart',blockAssetAction);
  };
 },[]);
 const portrait={src:'profile.png'};
 function selectTab(event,index){
  const keys={ArrowRight:1,ArrowLeft:-1};
  let next;
  if(event.key in keys) next=(index+keys[event.key]+chapters.length)%chapters.length;
  else if(event.key==='Home')next=0;
  else if(event.key==='End')next=chapters.length-1;
  else return;
  event.preventDefault();setActive(chapters[next].id);
  event.currentTarget.parentElement.children[next].focus();
 }
 return <><a className="skip" href="#work">Skip to portfolio</a><div className="workspace">
 <aside className="profile"><div className="profile-top"><span className="monogram">nd<span>.</span></span><span className="overline">Creative portfolio</span></div>
 <div className="profile-intro"><div className="portrait-scene">{portrait&&<img data-protected-asset draggable="false" className="avatar" src={asset(portrait.src)} alt="Nisala Dineth"/>}<span className="floating-tile tile-design" aria-hidden="true"><Icon name="design" /></span><span className="floating-tile tile-photo" aria-hidden="true"><Icon name="photography" /></span><span className="floating-tile tile-video" aria-hidden="true"><Icon name="motion" /></span></div><div className="specialties"><span>Design</span><span>Photo</span><span>Video</span></div><h1>Nisala <br/>Dineth<span>.</span></h1><p className="role">Designer. Editor.<br/>Visual storyteller.</p><p className="bio">I shape identities, refine images, and bring stories into motion.</p></div>
 <div className="profile-bottom"><p className="overline">Have a project in mind?</p><a className="contact" href="https://mail.google.com/mail/?view=cm&fs=1&to=nisaladineth2001%40gmail.com" target="_blank" rel="noreferrer"><Icon name="mail" /> Let’s collaborate <Icon name="arrow" /></a><a className="email" href="https://mail.google.com/mail/?view=cm&fs=1&to=nisaladineth2001%40gmail.com" target="_blank" rel="noreferrer">nisaladineth2001@gmail.com</a><a className="email" href="https://wa.me/94781279894" target="_blank" rel="noreferrer">WhatsApp: 0781279894</a></div>
 </aside>
 <main className="work-panel" id="work"><header className="work-header"><div><p className="overline">A selection of what I do</p><h2>Selected <span>work.</span></h2></div><span className="edition">2026 <span>©</span></span></header>
 <div className="collection-bar"><div role="tablist" aria-label="Work disciplines">{chapters.map((c,i)=><button key={c.id} id={`tab-${c.id}`} role="tab" aria-selected={active===c.id} aria-controls={`panel-${c.id}`} tabIndex={active===c.id?0:-1} onClick={()=>setActive(c.id)} onKeyDown={e=>selectTab(e,i)}><Icon name={c.id} />{c.id==='design'?'Design':c.id==='photography'?'Photo':c.id==='motion'?'Video':c.title}<span>{String(projects.filter(p=>p.category===c.category).length).padStart(2,'0')}</span></button>)}</div></div>
 <div id={`panel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`}><Chapter key={active} chapter={chapter}/></div>
 <footer><span>Thoughtfully made. Personally selected.</span><span>Design / Image / Motion</span></footer>
 </main></div></>;
}


