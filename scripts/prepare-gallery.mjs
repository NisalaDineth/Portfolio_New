import { readdir, mkdir, copyFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { readFile } from 'node:fs/promises';
const root = path.resolve('Portfolio');
const groups = new Map();
const youtubeVideos = JSON.parse(await readFile('src/data/youtube-videos.json', 'utf8'));
const categories = { 'Graphic Designs': 'Graphic design', 'Photo Edits': 'Photo editing', 'Video Editings': 'Video editing' };
async function walk(directory) {
 for (const item of await readdir(directory, { withFileTypes: true })) {
  const file = path.join(directory, item.name);
  if (item.isDirectory()) { await walk(file); continue; }
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg','.jpeg','.png','.webp','.avif','.mp4','.webm','.pdf'].includes(ext)) continue;
  const relative = path.relative(root,file).split(path.sep).join('/');
  const parts = relative.split('/');
  const category = categories[parts[0]] || 'Other work';
  const title = parts.length > 2 ? parts[1] : path.basename(file,ext);
  const key = `${category}/${title}`;
  const safeSahasraSrc = `sahasra/${path.basename(file).replace(/[^a-zA-Z0-9._-]/g, '-')}`;
  if (['.mp4', '.webm'].includes(ext)) {
   const entry = groups.get(key) || { id:key,title,category,files:[] };
   entry.files.push({ src:null, name:path.basename(file,ext), type:'video', youtubeId:youtubeVideos[title] || '' });
   groups.set(key,entry);
   return;
  }
  let src = title === 'Sahasra ticket design' ? safeSahasraSrc : `previews/${relative}.jpg`;
  try { await access(path.join('public',src)); } catch {
   src = title === 'Sahasra ticket design' ? safeSahasraSrc : `work/${relative}`;
   await mkdir(path.dirname(path.join('public',src)), { recursive:true });
   await copyFile(file,path.join('public',src));
  }
  const entry = groups.get(key) || { id:key,title,category,files:[] };
  entry.files.push({src,name:path.basename(file,ext),type:['.mp4','.webm'].includes(ext)?'video':ext==='.pdf'?'pdf':'image'});
  groups.set(key,entry);
 }
}
await walk(root);
for (const [title,youtubeId] of Object.entries(youtubeVideos)) {
 const key = `Video editing/${title}`;
 if (!groups.has(key)) groups.set(key, { id:key,title,category:'Video editing',files:[{ src:null, name:title, type:'video', youtubeId }] });
}
const order=['Event logo designs','3 klean services - Business Card','Wrist Band Designs','Document cover designs','Graduation Photography','Self portrait edit'];
const entries=[...groups.values()].sort((a,b)=>(order.indexOf(a.title)<0?99:order.indexOf(a.title))-(order.indexOf(b.title)<0?99:order.indexOf(b.title)));
await writeFile('src/data/gallery.json',JSON.stringify(entries,null,2)+'\n');
console.log(`Prepared ${entries.length} projects.`);
