const body=document.body;
const segmentBody=document.getElementById('segmentBody');
const segCount=document.getElementById('segCount');
const validCountEl=document.getElementById('validCount');
const faultCountEl=document.getElementById('faultCount');
const physicalEl=document.getElementById('physical');
const result=document.getElementById('result');
const memoryMap=document.getElementById('memoryMap');
let validCount=0,faultCount=0,lastPhysical=null;
let segments=[];
const example=[
 {name:'Code',base:100,limit:120},
 {name:'Data',base:300,limit:80},
 {name:'Stack',base:500,limit:100},
 {name:'Heap',base:700,limit:150}
];
function render(){
 segmentBody.innerHTML=segments.map((s,i)=>`<tr><td>S${i}</td><td><input class="name" data-i="${i}" value="${s.name}"></td><td><input class="base" data-i="${i}" type="number" min="0" value="${s.base}"></td><td><input class="limit" data-i="${i}" type="number" min="1" value="${s.limit}"></td><td><button class="remove" data-i="${i}" title="Remove">×</button></td></tr>`).join('');
 [...segmentBody.querySelectorAll('input')].forEach(el=>el.addEventListener('input',()=>{const i=+el.dataset.i;const key=el.className;segments[i][key]=key==='name'?el.value:+el.value;drawMap()}));
 [...segmentBody.querySelectorAll('.remove')].forEach(b=>b.onclick=()=>{segments.splice(+b.dataset.i,1);render()});
 segCount.textContent=segments.length;drawMap();
}
function drawMap(){
 const max=Math.max(...segments.map(s=>s.base+s.limit),1);
 memoryMap.innerHTML=segments.length?segments.map((s,i)=>`<div class="memRow"><b>S${i} • ${s.name}</b><div class="bar"><span style="width:${Math.max(8,(s.limit/max)*100)}%">Base ${s.base} • Limit ${s.limit}</span></div><span>${s.base+s.limit}</span></div>`).join(''):'<span class="muted">No segments defined.</span>';
}
function setResult(type,title,msg,icon){
 result.className='result '+type;
 result.innerHTML=`<i data-lucide="${icon}"></i><div><strong>${title}</strong><span>${msg}</span></div>`;
 lucide.createIcons();
}
function translate(){
 const n=Number(document.getElementById('segNo').value),off=Number(document.getElementById('offset').value);
 if(!Number.isInteger(n)||n<0||!Number.isInteger(off)||off<0){setResult('error','Invalid address','Segment number and offset must be non-negative integers.','triangle-alert');return}
 const s=segments[n];
 if(!s){faultCount++;faultCountEl.textContent=faultCount;setResult('error','Invalid Segment','Segment S'+n+' does not exist in the segment table.','triangle-alert');return}
 if(off>=s.limit){faultCount++;faultCountEl.textContent=faultCount;setResult('error','Segmentation Fault',`Offset ${off} exceeds the limit ${s.limit} for S${n}. Address is invalid.`,'shield-alert');return}
 const pa=s.base+off;validCount++;lastPhysical=pa;validCountEl.textContent=validCount;physicalEl.textContent=pa;
 setResult('success','Translation Successful',`S${n} (${s.name}): Physical Address = Base ${s.base} + Offset ${off} = ${pa}`,'check-circle-2');
}
function loadExample(){segments=example.map(s=>({...s}));validCount=faultCount=0;lastPhysical=null;validCountEl.textContent=faultCountEl.textContent='0';physicalEl.textContent='—';document.getElementById('segNo').value=1;document.getElementById('offset').value=30;setResult('neutral','Ready for translation','Example segment table loaded.','circle-help');render()}
document.getElementById('addBtn').onclick=()=>{segments.push({name:'Segment '+segments.length,base:segments.length*200+100,limit:100});render()};
document.getElementById('translateBtn').onclick=translate;
document.getElementById('exampleBtn').onclick=loadExample;
document.getElementById('themeBtn').onclick=()=>{body.classList.toggle('dark');localStorage.setItem('os-theme',body.classList.contains('dark')?'dark':'light');lucide.createIcons()};
if(localStorage.getItem('os-theme')==='dark')body.classList.add('dark');
loadExample();
