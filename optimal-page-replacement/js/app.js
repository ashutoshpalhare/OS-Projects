const example="7,0,1,2,0,3,0,4,2,3,0,3,2";
const $=id=>document.getElementById(id);

function parseInput(){
  const raw=$("#referenceInput").value.trim().split(/[\s,]+/).filter(Boolean);
  const refs=raw.map(Number);
  const frames=Number($("#framesInput").value);
  if(!refs.length || !refs.every(x=>Number.isSafeInteger(x)&&x>=0)) throw new Error("Enter non-negative whole-number page references.");
  if(!Number.isInteger(frames)||frames<1||frames>10) throw new Error("Frames must be between 1 and 10.");
  return {refs,frames};
}

function simulateOptimal(refs, frameCount){
  const frames=Array(frameCount).fill(null), steps=[], decisions=[];
  let faults=0,hits=0;
  for(let i=0;i<refs.length;i++){
    const page=refs[i];
    let result="HIT", detail="Page "+page+" is already in memory.";
    let slot=frames.indexOf(page);
    if(slot===-1){
      result="FAULT"; faults++;
      slot=frames.indexOf(null);
      if(slot!==-1){
        frames[slot]=page;
        detail="Loaded page "+page+" into empty frame "+(slot+1)+".";
      }else{
        let victimIndex=-1, farthest=-1;
        frames.forEach((p,idx)=>{
          const next=refs.slice(i+1).indexOf(p);
          const nextAt=next===-1?Infinity:i+1+next;
          if(nextAt>farthest){farthest=nextAt;victimIndex=idx;}
        });
        const victim=frames[victimIndex], nextUse=farthest===Infinity?"never again":"position "+(farthest+1);
        frames[victimIndex]=page;
        detail="Replaced page "+victim+" because its next use is "+nextUse+".";
        decisions.push({step:i+1,page,victim,nextUse});
      }
    }else hits++;
    steps.push({step:i+1,page,frames:[...frames],result});
    if(result==="HIT") decisions.push({step:i+1,page,victim:null,nextUse:null,hit:true,detail});
  }
  return {steps,decisions,faults,hits};
}

function render(data){
  $("#faults").textContent=data.faults;
  $("#hits").textContent=data.hits;
  $("#faultRate").textContent=(data.faults/(data.faults+data.hits)*100).toFixed(2)+"%";
  $("#hitRate").textContent=(data.hits/(data.faults+data.hits)*100).toFixed(2)+"%";
  $("#status").textContent=data.faults+" faults · "+data.hits+" hits · "+(data.faults+data.hits)+" references";
  const rows=data.steps.map(s=>"<tr><td><b>"+s.step+"</b></td><td class=\"page-head\">"+s.page+"</td>"+s.frames.map(v=>"<td class=\"cell "+(s.result==="HIT"?"hit":"fault")+"\">"+(v===null?"—":v)+"</td>").join("")+"<td class=\""+(s.result==="HIT"?"hit":"fault")+"\"><b>"+s.result+"</b></td></tr>").join("");
  $("#visualization").className="table-wrap";
  $("#visualization").innerHTML="<table class=\"frame-table\"><thead><tr><th>Step</th><th>Page</th>"+data.steps[0].frames.map((_,i)=>"<th>Frame "+(i+1)+"</th>").join("")+"<th>Result</th></tr></thead><tbody>"+rows+"</tbody></table>";
  const decisions=data.decisions.map(d=>d.hit
    ?"<div class=\"decision\"><b>Step "+d.step+" · Page "+d.page+"</b><small>HIT — page already exists in a frame.</small></div>"
    :"<div class=\"decision\"><b>Step "+d.step+" · Page "+d.page+"</b><small>FAULT — replaced <strong>"+d.victim+"</strong>; next use: "+d.nextUse+".</small></div>"
  ).join("");
  $("#decisions").innerHTML=decisions||"<div class=\"empty-state\">No decisions to display.</div>";
}

function run(){try{const {refs,frames}=parseInput();render(simulateOptimal(refs,frames));}catch(e){alert(e.message);}}
$("#runBtn").addEventListener("click",run);
$("#exampleBtn").addEventListener("click",()=>{$("#referenceInput").value=example;$("#framesInput").value=3;run();});
$("#resetBtn").addEventListener("click",()=>{$("#referenceInput").value=example;$("#framesInput").value=3;$("#faults").textContent="—";$("#hits").textContent="—";$("#faultRate").textContent="—";$("#hitRate").textContent="—";$("#status").textContent="Run a simulation to view results.";$("#visualization").className="table-wrap empty";$("#visualization").innerHTML="<div class=\"empty-state\"><i data-lucide=\"layers-3\"></i><p>Your page replacement steps will appear here.</p></div>";$("#decisions").innerHTML="<div class=\"empty-state\"><i data-lucide=\"search\"></i><p>Run the simulation to see why each replacement was selected.</p></div>";lucide.createIcons();});
$("#themeBtn").addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("os-theme",document.body.classList.contains("dark")?"dark":"light");});
if(localStorage.getItem("os-theme")==="dark")document.body.classList.add("dark");