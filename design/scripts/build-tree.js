const fs=require('fs');const p=process.argv[2];let s=fs.readFileSync(p,'utf8');
const br=[["Rent",-30,62,190,"f",5,1],["Utilities",-150,62,190,"f",4,0],["Phone",-55,48,150,"f",3,1],["Insurance",-125,48,150,"",0,0],["Streaming",-15,38,112,"l",7,0],["Dining out",-165,38,112,"l",6,0],["Shopping",-90,36,85,"",0,0]];
const f=n=>n.toFixed(0),rad=d=>d*Math.PI/180,P=[],T=[];
const flower=(x,y)=>`<g transform="translate(${f(x)} ${f(y)})">`+[0,1.26,2.51,3.77,5.03].map(a=>`<circle cx="${(4.2*Math.cos(a)).toFixed(1)}" cy="${(4.2*Math.sin(a)).toFixed(1)}" r="3.4" fill="#f28fb0"/>`).join('')+`<circle r="2.2" fill="#F5A524"/></g>`;
for(const [n,ang,ln,y0,ty,k,fr] of br){const r=rad(ang),x1=160+Math.cos(r)*ln*2,y1=y0+Math.sin(r)*ln*2,on=!!ty;
P.push(`<path d="M160 ${y0} L${f(x1)} ${f(y1)}" stroke="${on?'#8a6a4a':'#cfc6bb'}" stroke-width="${on?5:3}" stroke-linecap="round"${on?'':' stroke-dasharray="5 5"'}/>`);
T.push(`<text x="${f(160+Math.cos(r)*(ln*2+20))}" y="${f(y1+Math.sin(r)*20+4)}" text-anchor="middle" fill="${on?'#6b6f86':'#a0a4bb'}">${n}</text>`);
for(let j=0;j<k;j++){const t=.32+.68*j/k,px=160+Math.cos(r)*ln*2*t,py=y0+Math.sin(r)*ln*2*t,sd=j%2?1:-1,x=px+sd*7*Math.sin(r),y=py-sd*7*Math.cos(r);
P.push(ty=="f"?flower(x,y):`<ellipse cx="${f(x)}" cy="${f(y)}" rx="7" ry="3.6" fill="${j%3?'#2bb37d':'#1f9d6b'}" transform="rotate(${f(ang+sd*35)} ${f(x)} ${f(y)})"/>`)}
if(fr)P.push(`<circle cx="${f(x1)}" cy="${f(y1)}" r="7.5" fill="#F5A524"/><path d="M${f(x1)} ${f(y1-7)} q2 -4 5 -4" stroke="#1f9d6b" stroke-width="2" fill="none"/>`);
if(!on)P.push(`<circle cx="${f(x1)}" cy="${f(y1)}" r="9" fill="none" stroke="#a0a4bb" stroke-width="1.5" stroke-dasharray="3 3"/><text x="${f(x1)}" y="${f(y1+4)}" text-anchor="middle" font-size="12" fill="#4C5FD5">+</text>`);}
const roots=`<line x1="40" y1="236" x2="280" y2="236" stroke="#c9b9a6" stroke-width="1.5"/><g stroke="#a88a6a" stroke-width="3.5" stroke-linecap="round" fill="none"><path d="M160 236 C150 252 120 262 92 270"/><path d="M160 236 C170 252 200 262 228 270"/></g><path d="M160 236 C160 256 162 266 160 282" stroke="#cfc6bb" stroke-width="3" stroke-dasharray="5 5" fill="none"/><g font-size="9.5" fill="#8a6a4a" text-anchor="middle"><text x="78" y="286">Chequing</text><text x="242" y="286">Savings acct</text><text x="160" y="298" fill="#a0a4bb">+ Income</text></g>`;
const card=`<div class="card"><div style="display:flex;justify-content:space-between;align-items:baseline"><h3 style="margin:0">Care for your tree</h3><span class="pill p-ok">Sapling</span></div>
<svg width="100%" viewBox="0 0 320 304" aria-label="trust tree"><path d="M160 236 L160 80" stroke="#8a6a4a" stroke-width="11" stroke-linecap="round"/>${P.join('')}${roots}<g font-family="Inter,sans-serif" font-size="10" font-weight="600">${T.join('')}</g></svg>
<div class="legend"><span><i style="background:#f28fb0"></i>Essentials</span><span><i style="background:#2bb37d"></i>Everyday</span><span><i style="background:#F5A524"></i>Rewards</span><span><i style="background:#a88a6a;border-radius:2px"></i>Roots</span></div>
<details class="more"><summary>How your tree grows</summary><div class="m"><b>Roots</b> are the accounts you link. <b>Flowers</b> bloom on essentials paid on time: rent, utilities, phone. <b>Leaves</b> grow on everyday spending kept within your means. <b>Fruit</b> ripens after 12 on-time months and lowers your loan rate. A hard month is <b>winter</b>: growth pauses, nothing is cut down.</div></details></div>
</div>
`;
const a=s.indexOf('<div class="card"><div style="display:flex;justify-content:space-between;align-items:center"><h3 style="margin:0">Your trust tree</h3>'),b=s.indexOf('<div class="nav"><span class="on">');
if(a<0||b<0)throw 'markers';s=s.slice(0,a)+card+s.slice(b);fs.writeFileSync(p,s);
