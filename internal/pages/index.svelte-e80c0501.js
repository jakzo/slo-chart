import{S as Le,i as He,s as Oe,e as w,t as j,k as U,c as y,a as p,h as J,d as b,m as Y,b as f,f as B,g as P,J as v,j as fe,L as Lt,M as nt,u as Ht,N as st,O as Bt,l as ae,P as ee,Q as te,R as Ce,T as Ot,U as ge,w as Ue,x as Ye,y as Ge,q as pe,o as Ee,B as We,n as Ut,p as Yt,V as Gt,W as me,X as Vt,K as Nt}from"../chunks/vendor-eca618dc.js";var le=(n=>(n.SECOND="second",n.MINUTE="minute",n.HOUR="hour",n.DAY="day",n.MONTH="month",n.YEAR="year",n))(le||{}),we=(n=>(n.BREACH="breach",n.BURN="burn",n.CUSTOM="custom",n))(we||{});const Wt={[le.YEAR]:["getFullYear","setFullYear"],[le.MONTH]:["getMonth","setMonth"],[le.DAY]:["getDate","setDate"],[le.HOUR]:["getHours","setHours"],[le.MINUTE]:["getMinutes","setMinutes"],[le.SECOND]:["getSeconds","setSeconds"]},Re=(n,e,t)=>{const[l,s]=Wt[e];n[s](n[l]()+t)};function Ft(n){let e,t,l=n[2][0].toLocaleString(void 0,{dateStyle:"medium"})+"",s,o,a,d,h,u,i,c,k=n[2][3].toFixed(1)+"",D,V,N,M,G,W,L,H,E=n[2][1]+"",Z,C,S,I,ne,ie,X,z=n[2][2]+"",se,$,R;return{c(){e=w("div"),t=w("h3"),s=j(l),o=U(),a=w("table"),d=w("tr"),h=w("td"),u=j("Error budget:"),i=U(),c=w("td"),D=j(k),V=j("%"),N=U(),M=w("tr"),G=w("td"),W=j("Good events:"),L=U(),H=w("td"),Z=j(E),C=U(),S=w("tr"),I=w("td"),ne=j("Bad events:"),ie=U(),X=w("td"),se=j(z),this.h()},l(_){e=y(_,"DIV",{class:!0});var T=p(e);t=y(T,"H3",{class:!0});var F=p(t);s=J(F,l),F.forEach(b),o=Y(T),a=y(T,"TABLE",{class:!0});var x=p(a);d=y(x,"TR",{});var ce=p(d);h=y(ce,"TD",{});var ve=p(h);u=J(ve,"Error budget:"),ve.forEach(b),i=Y(ce),c=y(ce,"TD",{});var K=p(c);D=J(K,k),V=J(K,"%"),K.forEach(b),ce.forEach(b),N=Y(x),M=y(x,"TR",{});var _e=p(M);G=y(_e,"TD",{});var be=p(G);W=J(be,"Good events:"),be.forEach(b),L=Y(_e),H=y(_e,"TD",{});var ue=p(H);Z=J(ue,E),ue.forEach(b),_e.forEach(b),C=Y(x),S=y(x,"TR",{});var he=p(S);I=y(he,"TD",{});var ye=p(I);ne=J(ye,"Bad events:"),ye.forEach(b),ie=Y(he),X=y(he,"TD",{});var oe=p(X);se=J(oe,z),oe.forEach(b),he.forEach(b),x.forEach(b),T.forEach(b),this.h()},h(){f(t,"class","text-lg"),f(a,"class","text-sm"),f(e,"class","absolute top-0 bg-black/80 text-white p-2 rounded pointer-events-none"),B(e,"right",n[3]?"unset":`${100-n[0]}%`,!1),B(e,"left",n[3]?`${n[0]+n[1]}%`:"unset",!1)},m(_,T){P(_,e,T),v(e,t),v(t,s),v(e,o),v(e,a),v(a,d),v(d,h),v(h,u),v(d,i),v(d,c),v(c,D),v(c,V),v(a,N),v(a,M),v(M,G),v(G,W),v(M,L),v(M,H),v(H,Z),v(a,C),v(a,S),v(S,I),v(I,ne),v(S,ie),v(S,X),v(X,se),n[6](e),R=!0},p(_,[T]){(!R||T&4)&&l!==(l=_[2][0].toLocaleString(void 0,{dateStyle:"medium"})+"")&&fe(s,l),(!R||T&4)&&k!==(k=_[2][3].toFixed(1)+"")&&fe(D,k),(!R||T&4)&&E!==(E=_[2][1]+"")&&fe(Z,E),(!R||T&4)&&z!==(z=_[2][2]+"")&&fe(se,z),T&9&&B(e,"right",_[3]?"unset":`${100-_[0]}%`,!1),T&11&&B(e,"left",_[3]?`${_[0]+_[1]}%`:"unset",!1)},i(_){R||(Lt(()=>{$||($=nt(e,st,{duration:200,y:50},!0)),$.run(1)}),R=!0)},o(_){$||($=nt(e,st,{duration:200,y:50},!1)),$.run(0),R=!1},d(_){_&&b(e),n[6](null),_&&$&&$.end()}}}function jt(n,e,t){let{itemLeft:l}=e,{itemWidth:s}=e,{container:o}=e,{data:a}=e,d=!1,h;Ht(()=>{t(3,d=o!==void 0&&l-h.offsetWidth/o.offsetWidth*100<0)});function u(i){Bt[i?"unshift":"push"](()=>{h=i,t(4,h)})}return n.$$set=i=>{"itemLeft"in i&&t(0,l=i.itemLeft),"itemWidth"in i&&t(1,s=i.itemWidth),"container"in i&&t(5,o=i.container),"data"in i&&t(2,a=i.data)},[l,s,a,d,h,o,u]}class Jt extends Le{constructor(e){super();He(this,e,jt,Ft,Oe,{itemLeft:0,itemWidth:1,container:5,data:2})}}const ot=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Pt=.8,Xt=100,rt=(...n)=>{const e=Math.max(0,...n.map(l=>l.length)),t=[];for(let l=0;l<e;l++)t.push(n.map(s=>s[l]));return t},qt=(n,e=new Date)=>{const t=new Date(e);return t.setDate(t.getDate()+n),t},zt=n=>{const e=Math.min(...n.map(s=>{if(s===0)return 1/0;let o=0;for(;s%10===0;)o++,s/=10;return o}));if(e<3)return n.map(String);const[t,l]=e<6?[1e3,"k"]:e<9?[1e6,"m"]:[1e9,"b"];return n.map(s=>`${Math.round(s/t)}${l}`)},Kt=n=>n.map(e=>`${e}%`),at=(n,e={})=>{var k,D,V;const t=(k=e.min)!=null?k:Math.min(...n,...e.suggestedMin!==void 0?[e.suggestedMin]:[]),l=(D=e.max)!=null?D:Math.max(...n,...e.suggestedMax!==void 0?[e.suggestedMax]:[]),s=(V=e.maxTicks)!=null?V:10,o=(N,M)=>{const G=10**Math.floor(Math.log10(N)),W=N/G,L=M?1.5:1;return(W<1*L?1:W<2*L?2:W<5*L?5:10)*G},a=o(l-t,!1),d=o(a/(s-1),!0),h=Math.floor(t/d)*d,u=Math.ceil(l/d)*d,i=[];let c=h;for(;c<=u;)(e.min===void 0||c>=e.min)&&(e.max===void 0||c<=e.max)&&i.push(c),c+=d;for(l>u&&i.push(c);t<i[0];)i.unshift(i[0]-d);return i},De=(n,e,t)=>(t-n)/(e-n)*100,Q=(n,e,t)=>100-De(n,e,t),Ct=(n,e)=>100/n*(e+.5),Qt=(n,e,t,l,s)=>{const o=[...n].sort((c,k)=>c.ts-k.ts),a=t.getTime();let d=0;const h=new Date(e);Re(h,l,s);let u=[];const i=[];for(;h<t;){const c=o[d++];for(;(!c||c.ts>=h.getTime())&&h.getTime()<a;)i.push(u),u=[],Re(h,l,s);c&&u.push(c)}return i.push(u),i},Rt=(n,e,t)=>{const l=[0,0];return e.map((s,o)=>{var a,d;return l[0]+=s-((a=e[o-n.windowDays])!=null?a:0),l[1]+=t[o]-((d=t[o-n.windowDays])!=null?d:0),(1-l[1]/(l[0]+l[1])/(1-n.threshold/100))*100})};function it(n,e,t){const l=n.slice();return l[30]=e[t],l[32]=t,l}function ut(n,e,t){const l=n.slice();l[33]=e[t][0],l[34]=e[t][1],l[37]=t;const s=l[30].reduce((o,a)=>o+(a.type===l[33]?1:0),0);return l[35]=s,l}function ft(n,e,t){const l=n.slice();return l[38]=e[t][0],l[39]=e[t][1],l}function ct(n,e,t){const l=n.slice();return l[38]=e[t][0],l[39]=e[t][1],l}function ht(n,e,t){const l=n.slice();l[44]=e[t][0],l[32]=t;const s=l[3]*l[32];return l[45]=s,l}function dt(n,e,t){const l=n.slice();l[47]=e[t][0],l[48]=e[t][1],l[49]=e[t][2],l[50]=e[t][3],l[32]=t;const s=Ct(l[2].length,l[32]);l[51]=s;const o=Q(l[4],l[5],l[50]);return l[52]=o,l}function _t(n,e,t){const l=n.slice();l[44]=e[t][0],l[0]=e[t][1],l[1]=e[t][2],l[50]=e[t][3],l[32]=t;const s=l[3]*l[32];l[45]=s;const o=l[45]+(l[3]-l[10])/2;return l[54]=o,l}function gt(n,e,t){const l=n.slice();l[38]=e[t][0],l[32]=t;const s=Q(l[4],l[5],l[38]);return l[52]=s,l}function mt(n){let e,t,l;return{c(){e=ee("line"),this.h()},l(s){e=te(s,"line",{class:!0,x1:!0,x2:!0,y1:!0,y2:!0}),p(e).forEach(b),this.h()},h(){f(e,"class","stroke-gray-300 stroke-2 [stroke-dasharray:5_5] pointer-events-none svelte-u4cctl"),f(e,"x1",0),f(e,"x2",100),f(e,"y1",t=n[52]),f(e,"y2",l=n[52])},m(s,o){P(s,e,o)},p(s,o){o[0]&16432&&t!==(t=s[52])&&f(e,"y1",t),o[0]&16432&&l!==(l=s[52])&&f(e,"y2",l)},d(s){s&&b(e)}}}function vt(n,e){let t,l,s=e[38]!==0&&mt(e);return{key:n,first:null,c(){t=ae(),s&&s.c(),l=ae(),this.h()},l(o){t=ae(),s&&s.l(o),l=ae(),this.h()},h(){this.first=t},m(o,a){P(o,t,a),s&&s.m(o,a),P(o,l,a)},p(o,a){e=o,e[38]!==0?s?s.p(e,a):(s=mt(e),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null)},d(o){o&&b(t),s&&s.d(o),o&&b(l)}}}function bt(n,e){let t,l,s,o,a,d,h,u,i,c,k,D,V,N;function M(){return e[24](e[32])}function G(){return e[25](e[32])}function W(){return e[26](e[32])}function L(){return e[27](e[32])}return{key:n,first:null,c(){t=ee("g"),l=ee("rect"),o=ee("rect"),u=ee("rect"),this.h()},l(H){t=te(H,"g",{role:!0,"aria-roledescription":!0,tabindex:!0,class:!0,"aria-label":!0});var E=p(t);l=te(E,"rect",{class:!0,x:!0,y:!0,width:!0,height:!0}),p(l).forEach(b),o=te(E,"rect",{class:!0,x:!0,y:!0,width:!0,height:!0}),p(o).forEach(b),u=te(E,"rect",{class:!0,x:!0,y:!0,width:!0,height:!0}),p(u).forEach(b),E.forEach(b),this.h()},h(){f(l,"class","group-hover:fill-gray-500/10 group-focus:fill-[#66c]/20 fill-transparent"),f(l,"x",s=e[45]),f(l,"y",0),f(l,"width",e[3]),f(l,"height",100),f(o,"class","fill-[#f66]/80"),f(o,"x",a=e[54]),f(o,"y",d=Q(e[12],e[13],e[1])),f(o,"width",e[10]),f(o,"height",h=De(e[12],e[13],e[1])),f(u,"class","fill-[#beb]/80"),f(u,"x",i=e[54]),f(u,"y",c=Q(e[12],e[13],e[1]+e[0])),f(u,"width",e[10]),f(u,"height",k=De(e[12],e[13],e[0])),f(t,"role","graphics-symbol"),f(t,"aria-roledescription","bar"),f(t,"tabindex",e[9]),f(t,"class","group focus:outline-none"),f(t,"aria-label",D=e[44].toLocaleString(void 0,{dateStyle:"medium"})+`,
Error budget: `+e[50].toFixed(1)+`%,
Good events: `+e[0]+`,
Bad events: `+e[1]),this.first=t},m(H,E){P(H,t,E),v(t,l),v(t,o),v(t,u),V||(N=[Ce(t,"mousemove",M),Ce(t,"focus",G),Ce(t,"mouseleave",W),Ce(t,"blur",L)],V=!0)},p(H,E){e=H,E[0]&12&&s!==(s=e[45])&&f(l,"x",s),E[0]&8&&f(l,"width",e[3]),E[0]&1036&&a!==(a=e[54])&&f(o,"x",a),E[0]&12292&&d!==(d=Q(e[12],e[13],e[1]))&&f(o,"y",d),E[0]&1024&&f(o,"width",e[10]),E[0]&12292&&h!==(h=De(e[12],e[13],e[1]))&&f(o,"height",h),E[0]&1036&&i!==(i=e[54])&&f(u,"x",i),E[0]&12292&&c!==(c=Q(e[12],e[13],e[1]+e[0]))&&f(u,"y",c),E[0]&1024&&f(u,"width",e[10]),E[0]&12292&&k!==(k=De(e[12],e[13],e[0]))&&f(u,"height",k),E[0]&512&&f(t,"tabindex",e[9]),E[0]&4&&D!==(D=e[44].toLocaleString(void 0,{dateStyle:"medium"})+`,
Error budget: `+e[50].toFixed(1)+`%,
Good events: `+e[0]+`,
Bad events: `+e[1])&&f(t,"aria-label",D)},d(H){H&&b(t),V=!1,Ot(N)}}}function kt(n,e){let t,l=`${e[51]}%`,s=`${e[52]}%`;return{key:n,first:null,c(){t=w("div"),this.h()},l(o){t=y(o,"DIV",{class:!0}),p(t).forEach(b),this.h()},h(){f(t,"class","absolute bg-slate-800 dark:bg-slate-200 rounded-full border-white dark:border-slate-800 border-2 w-[12px] h-[12px] translate-x-[-50%] translate-y-[-50%] pointer-events-none animation-chart-load origin-center svelte-u4cctl"),B(t,"left",l,!1),B(t,"top",s,!1),this.first=t},m(o,a){P(o,t,a)},p(o,a){e=o,a[0]&4&&l!==(l=`${e[51]}%`)&&B(t,"left",l,!1),a[0]&52&&s!==(s=`${e[52]}%`)&&B(t,"top",s,!1)},d(o){o&&b(t)}}}function pt(n){let e=ot[n[44].getMonth()]+"",t,l=" ",s;return{c(){t=j(e),s=j(l)},l(o){t=J(o,e),s=J(o,l)},m(o,a){P(o,t,a),P(o,s,a)},p(o,a){a[0]&4&&e!==(e=ot[o[44].getMonth()]+"")&&fe(t,e)},d(o){o&&b(t),o&&b(s)}}}function Dt(n,e){let t,l,s=e[32]===0||e[44].getDate()===1,o,a=e[44].getDate()+"",d,h,u=`${e[45]+e[3]/2}%`,i=s&&pt(e);return{key:n,first:null,c(){t=w("div"),l=w("div"),i&&i.c(),o=U(),d=j(a),h=U(),this.h()},l(c){t=y(c,"DIV",{class:!0});var k=p(t);l=y(k,"DIV",{class:!0});var D=p(l);i&&i.l(D),o=Y(D),d=J(D,a),D.forEach(b),h=Y(k),k.forEach(b),this.h()},h(){f(l,"class","float-right"),f(t,"class","tick translate-x-[-4px] translate-y-[20px] rotate-[-45deg] top-full svelte-u4cctl"),B(t,"left",u,!1),this.first=t},m(c,k){P(c,t,k),v(t,l),i&&i.m(l,null),v(l,o),v(l,d),v(t,h)},p(c,k){e=c,k[0]&4&&(s=e[32]===0||e[44].getDate()===1),s?i?i.p(e,k):(i=pt(e),i.c(),i.m(l,o)):i&&(i.d(1),i=null),k[0]&4&&a!==(a=e[44].getDate()+"")&&fe(d,a),k[0]&12&&u!==(u=`${e[45]+e[3]/2}%`)&&B(t,"left",u,!1)},d(c){c&&b(t),i&&i.d()}}}function Et(n,e){let t,l=e[39]+"",s,o,a=`${Q(e[12],e[13],e[38])}%`;return{key:n,first:null,c(){t=w("div"),s=j(l),o=U(),this.h()},l(d){t=y(d,"DIV",{class:!0});var h=p(t);s=J(h,l),o=Y(h),h.forEach(b),this.h()},h(){f(t,"class","tick translate-x-[1rem] left-full svelte-u4cctl"),B(t,"top",a,!1),this.first=t},m(d,h){P(d,t,h),v(t,s),v(t,o)},p(d,h){e=d,h[0]&2048&&l!==(l=e[39]+"")&&fe(s,l),h[0]&14336&&a!==(a=`${Q(e[12],e[13],e[38])}%`)&&B(t,"top",a,!1)},d(d){d&&b(t)}}}function wt(n,e){let t,l,s=e[39]+"",o,a,d=`${Q(e[4],e[5],e[38])}%`;return{key:n,first:null,c(){t=w("div"),l=w("div"),o=j(s),a=U(),this.h()},l(h){t=y(h,"DIV",{class:!0});var u=p(t);l=y(u,"DIV",{class:!0});var i=p(l);o=J(i,s),i.forEach(b),a=Y(u),u.forEach(b),this.h()},h(){f(l,"class","float-right"),f(t,"class","tick translate-x-[-1rem] right-full svelte-u4cctl"),B(t,"top",d,!1),this.first=t},m(h,u){P(h,t,u),v(t,l),v(l,o),v(t,a)},p(h,u){e=h,u[0]&16384&&s!==(s=e[39]+"")&&fe(o,s),u[0]&16432&&d!==(d=`${Q(e[4],e[5],e[38])}%`)&&B(t,"top",d,!1)},d(h){h&&b(t)}}}function yt(n){let e,t=[],l=new Map,s,o=`${n[3]*(n[32]+.5)}%`,a=`${Q(n[4],n[5],n[2][n[32]][3])}%`,d=n[17];const h=u=>u[37];for(let u=0;u<d.length;u+=1){let i=ut(n,d,u),c=h(i);l.set(c,t[u]=Tt(c,i))}return{c(){e=w("div");for(let u=0;u<t.length;u+=1)t[u].c();s=U(),this.h()},l(u){e=y(u,"DIV",{class:!0});var i=p(e);for(let c=0;c<t.length;c+=1)t[c].l(i);s=Y(i),i.forEach(b),this.h()},h(){f(e,"class","absolute mt-2 flex flex-col items-center justify-center pointer-events-none"),B(e,"left",o,!1),B(e,"top",a,!1)},m(u,i){P(u,e,i);for(let c=0;c<t.length;c+=1)t[c].m(e,null);v(e,s)},p(u,i){i[0]&131328&&(d=u[17],t=ge(t,i,h,1,u,d,l,e,me,Tt,s,ut)),i[0]&8&&o!==(o=`${u[3]*(u[32]+.5)}%`)&&B(e,"left",o,!1),i[0]&52&&a!==(a=`${Q(u[4],u[5],u[2][u[32]][3])}%`)&&B(e,"top",a,!1)},d(u){u&&b(e);for(let i=0;i<t.length;i+=1)t[i].d()}}}function Mt(n){let e,t=n[35]+"",l,s;return{c(){e=w("div"),l=j(t),this.h()},l(o){e=y(o,"DIV",{class:!0});var a=p(e);l=J(a,t),a.forEach(b),this.h()},h(){f(e,"class",s="min-w-[1.25rem] h-5 mt-3 rounded-full flex items-center justify-center translate-x-[-50%] translate-y-[-50%] text-xs "+n[34]+" text-white animation-chart-load origin-center svelte-u4cctl")},m(o,a){P(o,e,a),v(e,l)},p(o,a){a[0]&256&&t!==(t=o[35]+"")&&fe(l,t)},d(o){o&&b(e)}}}function Tt(n,e){let t,l,s=e[35]>0&&Mt(e);return{key:n,first:null,c(){t=ae(),s&&s.c(),l=ae(),this.h()},l(o){t=ae(),s&&s.l(o),l=ae(),this.h()},h(){this.first=t},m(o,a){P(o,t,a),s&&s.m(o,a),P(o,l,a)},p(o,a){e=o,e[35]>0?s?s.p(e,a):(s=Mt(e),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null)},d(o){o&&b(t),s&&s.d(o),o&&b(l)}}}function At(n){let e,t=n[30].length>0&&yt(n);return{c(){t&&t.c(),e=ae()},l(l){t&&t.l(l),e=ae()},m(l,s){t&&t.m(l,s),P(l,e,s)},p(l,s){l[30].length>0?t?t.p(l,s):(t=yt(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&b(e)}}}function It(n){let e,t;return e=new Jt({props:{itemLeft:n[3]*n[6],itemWidth:n[3],container:n[16],data:n[2][n[6]]}}),{c(){Ue(e.$$.fragment)},l(l){Ye(e.$$.fragment,l)},m(l,s){Ge(e,l,s),t=!0},p(l,s){const o={};s[0]&72&&(o.itemLeft=l[3]*l[6]),s[0]&8&&(o.itemWidth=l[3]),s[0]&65536&&(o.container=l[16]),s[0]&68&&(o.data=l[2][l[6]]),e.$set(o)},i(l){t||(pe(e.$$.fragment,l),t=!0)},o(l){Ee(e.$$.fragment,l),t=!1},d(l){We(e,l)}}}function Zt(n){let e,t,l,s,o=[],a=new Map,d,h=[],u=new Map,i,c,k,D,V,N,M=[],G=new Map,W,L,H,E=`${Q(n[4],n[5],0)}%`,Z,C,S,I=[],ne=new Map,ie,X,z,se,$,R=[],_=new Map,T,F,x,ce,ve,K=[],_e=new Map,be,ue,he,ye=`calc(100% - ${el} - ${St})`,oe,Me=n[14];const Fe=r=>r[32];for(let r=0;r<Me.length;r+=1){let g=gt(n,Me,r),m=Fe(g);a.set(m,o[r]=vt(m,g))}let Te=n[2];const je=r=>r[32];for(let r=0;r<Te.length;r+=1){let g=_t(n,Te,r),m=je(g);u.set(m,h[r]=bt(m,g))}let Ae=n[2];const Je=r=>r[32];for(let r=0;r<Ae.length;r+=1){let g=dt(n,Ae,r),m=Je(g);G.set(m,M[r]=kt(m,g))}let Ie=n[2];const Pe=r=>r[44].getTime();for(let r=0;r<Ie.length;r+=1){let g=ht(n,Ie,r),m=Pe(g);ne.set(m,I[r]=Dt(m,g))}let Se=n[11];const Xe=r=>r[38];for(let r=0;r<Se.length;r+=1){let g=ct(n,Se,r),m=Xe(g);_.set(m,R[r]=Et(m,g))}let Be=n[14];const qe=r=>r[38];for(let r=0;r<Be.length;r+=1){let g=ft(n,Be,r),m=qe(g);_e.set(m,K[r]=wt(m,g))}let ke=n[8],q=[];for(let r=0;r<ke.length;r+=1)q[r]=At(it(n,ke,r));let O=n[6]!==void 0&&It(n);return{c(){e=w("div"),t=w("div"),l=ee("svg"),s=ee("g");for(let r=0;r<o.length;r+=1)o[r].c();d=ee("g");for(let r=0;r<h.length;r+=1)h[r].c();i=ee("line"),c=ee("g"),k=ee("path"),V=U(),N=w("div");for(let r=0;r<M.length;r+=1)M[r].c();W=U(),L=w("div"),H=j("Budget Empty"),Z=U(),C=w("div"),S=w("div");for(let r=0;r<I.length;r+=1)I[r].c();ie=U(),X=w("div"),z=w("div"),se=j("Budget"),$=U();for(let r=0;r<R.length;r+=1)R[r].c();T=U(),F=w("div"),x=w("div"),ce=j("Counts"),ve=U();for(let r=0;r<K.length;r+=1)K[r].c();be=U(),ue=w("div");for(let r=0;r<q.length;r+=1)q[r].c();he=U(),O&&O.c(),this.h()},l(r){e=y(r,"DIV",{class:!0,role:!0});var g=p(e);t=y(g,"DIV",{class:!0});var m=p(t);l=te(m,"svg",{version:!0,viewBox:!0,preserveAspectRatio:!0,width:!0,height:!0,class:!0});var de=p(l);s=te(de,"g",{});var ze=p(s);for(let A=0;A<o.length;A+=1)o[A].l(ze);ze.forEach(b),d=te(de,"g",{class:!0,role:!0});var Ke=p(d);for(let A=0;A<h.length;A+=1)h[A].l(Ke);Ke.forEach(b),i=te(de,"line",{class:!0,x1:!0,x2:!0,y1:!0,y2:!0}),p(i).forEach(b),c=te(de,"g",{class:!0,role:!0,"aria-roledescription":!0});var Qe=p(c);k=te(Qe,"path",{class:!0,d:!0}),p(k).forEach(b),Qe.forEach(b),de.forEach(b),V=Y(m),N=y(m,"DIV",{});var Ze=p(N);for(let A=0;A<M.length;A+=1)M[A].l(Ze);Ze.forEach(b),W=Y(m),L=y(m,"DIV",{class:!0});var $e=p(L);H=J($e,"Budget Empty"),$e.forEach(b),Z=Y(m),C=y(m,"DIV",{"aria-hidden":!0});var re=p(C);S=y(re,"DIV",{});var xe=p(S);for(let A=0;A<I.length;A+=1)I[A].l(xe);xe.forEach(b),ie=Y(re),X=y(re,"DIV",{});var Ve=p(X);z=y(Ve,"DIV",{class:!0,"aria-hidden":!0});var et=p(z);se=J(et,"Budget"),et.forEach(b),$=Y(Ve);for(let A=0;A<R.length;A+=1)R[A].l(Ve);Ve.forEach(b),T=Y(re),F=y(re,"DIV",{});var Ne=p(F);x=y(Ne,"DIV",{class:!0,"aria-hidden":!0});var tt=p(x);ce=J(tt,"Counts"),tt.forEach(b),ve=Y(Ne);for(let A=0;A<K.length;A+=1)K[A].l(Ne);Ne.forEach(b),be=Y(re),ue=y(re,"DIV",{});var lt=p(ue);for(let A=0;A<q.length;A+=1)q[A].l(lt);lt.forEach(b),he=Y(re),O&&O.l(re),re.forEach(b),m.forEach(b),g.forEach(b),this.h()},h(){f(d,"class","animation-chart-load origin-bottom svelte-u4cctl"),f(d,"role","graphics-object"),f(i,"class","stroke-red-400 stroke-[3] [stroke-dasharray:10_10] pointer-events-none svelte-u4cctl"),f(i,"x1",0),f(i,"x2",100),f(i,"y1",n[15]),f(i,"y2",n[15]),f(k,"class","fill-[none] stroke-slate-800 dark:stroke-slate-200 [stroke-linecap:round] stroke-[4] svelte-u4cctl"),f(k,"d",D="M"+n[2].map(n[28]).join("L")),f(c,"class","animation-chart-load origin-top pointer-events-none svelte-u4cctl"),f(c,"role","graphics-symbol"),f(c,"aria-roledescription","line"),f(l,"version","1.1"),f(l,"viewBox","0 0 100 100"),f(l,"preserveAspectRatio","none"),f(l,"width","100%"),f(l,"height","100%"),f(l,"class","overflow-visible"),f(L,"class","absolute left-0 ml-2 mt-1 text-red-400 uppercase"),B(L,"top",E,!1),f(z,"class","absolute text-right mb-3 mr-4 bottom-full right-full"),f(z,"aria-hidden",!0),f(x,"class","absolute right-0 mb-3 ml-4 bottom-full left-full"),f(x,"aria-hidden",!0),f(C,"aria-hidden",!0),f(t,"class","relative"),B(t,"margin-left",$t,!1),B(t,"margin-right",xt,!1),B(t,"margin-top",St,!1),B(t,"height",ye,!1),f(e,"class","h-full w-full overflow-hidden"),f(e,"role","graphics-document")},m(r,g){P(r,e,g),v(e,t),v(t,l),v(l,s);for(let m=0;m<o.length;m+=1)o[m].m(s,null);v(l,d);for(let m=0;m<h.length;m+=1)h[m].m(d,null);v(l,i),v(l,c),v(c,k),v(t,V),v(t,N);for(let m=0;m<M.length;m+=1)M[m].m(N,null);v(t,W),v(t,L),v(L,H),v(t,Z),v(t,C),v(C,S);for(let m=0;m<I.length;m+=1)I[m].m(S,null);v(C,ie),v(C,X),v(X,z),v(z,se),v(X,$);for(let m=0;m<R.length;m+=1)R[m].m(X,null);v(C,T),v(C,F),v(F,x),v(x,ce),v(F,ve);for(let m=0;m<K.length;m+=1)K[m].m(F,null);v(C,be),v(C,ue);for(let m=0;m<q.length;m+=1)q[m].m(ue,null);v(C,he),O&&O.m(C,null),n[29](t),oe=!0},p(r,g){if(g[0]&16432&&(Me=r[14],o=ge(o,g,Fe,1,r,Me,a,s,me,vt,null,gt)),g[0]&14028&&(Te=r[2],h=ge(h,g,je,1,r,Te,u,d,me,bt,null,_t)),(!oe||g[0]&32768)&&f(i,"y1",r[15]),(!oe||g[0]&32768)&&f(i,"y2",r[15]),(!oe||g[0]&52&&D!==(D="M"+r[2].map(r[28]).join("L")))&&f(k,"d",D),g[0]&52&&(Ae=r[2],M=ge(M,g,Je,1,r,Ae,G,N,me,kt,null,dt)),g[0]&48&&E!==(E=`${Q(r[4],r[5],0)}%`)&&B(L,"top",E,!1),g[0]&12&&(Ie=r[2],I=ge(I,g,Pe,1,r,Ie,ne,S,me,Dt,null,ht)),g[0]&14336&&(Se=r[11],R=ge(R,g,Xe,1,r,Se,_,X,me,Et,null,ct)),g[0]&16432&&(Be=r[14],K=ge(K,g,qe,1,r,Be,_e,F,me,wt,null,ft)),g[0]&131388){ke=r[8];let m;for(m=0;m<ke.length;m+=1){const de=it(r,ke,m);q[m]?q[m].p(de,g):(q[m]=At(de),q[m].c(),q[m].m(ue,null))}for(;m<q.length;m+=1)q[m].d(1);q.length=ke.length}r[6]!==void 0?O?(O.p(r,g),g[0]&64&&pe(O,1)):(O=It(r),O.c(),pe(O,1),O.m(C,null)):O&&(Ut(),Ee(O,1,1,()=>{O=null}),Yt())},i(r){oe||(pe(O),oe=!0)},o(r){Ee(O),oe=!1},d(r){r&&b(e);for(let g=0;g<o.length;g+=1)o[g].d();for(let g=0;g<h.length;g+=1)h[g].d();for(let g=0;g<M.length;g+=1)M[g].d();for(let g=0;g<I.length;g+=1)I[g].d();for(let g=0;g<R.length;g+=1)R[g].d();for(let g=0;g<K.length;g+=1)K[g].d();Gt(q,r),O&&O.d(),n[29](null)}}}const $t="6rem",xt="6rem",St="3rem",el="4rem";function tl(n,e,t){let{slo:l}=e,{startDate:s}=e,{good:o}=e,{bad:a}=e,{events:d}=e,{resolutionUnit:h}=e,{resolutionAmount:u}=e;const i=[[we.BREACH,"bg-red-500"],[we.BURN,"bg-yellow-500"]];let c,{isMainChart:k=!1}=e,D,V,N,M,G,W,L,H,E,Z,C,S,I=0,ne;const ie=_=>{S!==_&&t(6,S=_)},X=_=>{S!==_&&t(6,S=_)},z=_=>{if(S!==_)return;const T=I;setTimeout(()=>{T===I&&t(6,S=void 0)},0)},se=_=>{if(S!==_)return;const T=I;setTimeout(()=>{T===I&&t(6,S=void 0)},0)},$=([,,,_],T)=>`${Ct(V.length,T)},${Q(E,Z,_)}`;function R(_){Bt[_?"unshift":"push"](()=>{ne=_,t(16,ne)})}return n.$$set=_=>{"slo"in _&&t(18,l=_.slo),"startDate"in _&&t(19,s=_.startDate),"good"in _&&t(0,o=_.good),"bad"in _&&t(1,a=_.bad),"events"in _&&t(20,d=_.events),"resolutionUnit"in _&&t(21,h=_.resolutionUnit),"resolutionAmount"in _&&t(22,u=_.resolutionAmount),"isMainChart"in _&&t(23,k=_.isMainChart)},n.$$.update=()=>{if(n.$$.dirty[0]&8126465){const _=new Date(s);Re(_,h,u*o.length),t(8,c=Qt(d,s,_,le.DAY,1).slice(-l.windowDays))}if(n.$$.dirty[0]&8388608&&t(9,D=k?0:void 0),n.$$.dirty[0]&786435){const _=Rt(l,o,a);t(2,V=o.map((T,F)=>[qt(F,s),T,a[F],_[F]]).slice(-l.windowDays))}if(n.$$.dirty[0]&4&&t(3,N=100/V.length),n.$$.dirty[0]&8&&t(10,M=N*Pt),n.$$.dirty[0]&4){const _=at(V.map(([,T,F])=>T+F),{min:0});t(11,G=rt(_,zt(_))),t(12,W=Math.min(..._)),t(13,L=Math.max(..._))}if(n.$$.dirty[0]&4){const _=at(V.map(([,,,T])=>T),{max:Xt,suggestedMin:0});t(14,H=rt(_,Kt(_))),t(4,E=Math.min(..._)),t(5,Z=Math.max(..._))}n.$$.dirty[0]&48&&t(15,C=Z/(Z-E)*100),n.$$.dirty[0]&192&&t(7,I++,I)},[o,a,V,N,E,Z,S,I,c,D,M,G,W,L,H,C,ne,i,l,s,d,h,u,k,ie,X,z,se,$,R]}class ll extends Le{constructor(e){super();He(this,e,tl,Zt,Oe,{slo:18,startDate:19,good:0,bad:1,events:20,resolutionUnit:21,resolutionAmount:22,isMainChart:23},null,[-1,-1])}}const nl=1e3*60*60*24,sl=n=>{const e=Vt(n),t="0123456789abcdef",l=s=>{let o="";for(let a=0;a<s;a++)o+=t[Math.floor(e()*t.length)];return o};return`${l(8)}-${l(4)}-${l(4)}-${l(4)}-${l(12)}`},ol=n=>{const e=(c,k=new Date)=>{const D=new Date(k);return D.setDate(D.getDate()+c),D},t=[400,1e3,1100,1100,1100,1e3,400],l={id:sl(`${n}-uuid`),windowDays:30,threshold:99},s=new Date;s.setDate(s.getDate()-l.windowDays*2+1),s.setHours(0,0,0,0);const o=[...new Array(l.windowDays*2)].map((c,k)=>{const D=e(k-l.windowDays*2),V=Vt(`${n}-${D.getTime()}`),N=(G,W)=>G+V()*(W-G),M=t[D.getDay()];return[Math.floor(N(1,1.3)*M),Math.floor(N(0,.3*Math.sin(D.getTime()/nl/3)/2+.5)**4*M)]}),a=Rt(l,o.map(c=>c[0]),o.map(c=>c[1])),d=le.DAY,h=new Date(s);let u=!1;const i=[];for(const[c,[k,D]]of o.entries())c>0&&a[c]<0&&a[c-1]>=0&&i.push({ts:h.getTime(),type:we.BREACH}),k/(k+D)*100<l.threshold?u||(i.push({ts:h.getTime(),type:we.BURN}),u=!0):u=!1,Re(h,d,1);return{slo:l,startDate:s,resolutionUnit:d,resolutionAmount:1,good:o.map(c=>c[0]),bad:o.map(c=>c[1]),events:i}},rl=(n=10,e="sample-seed")=>{const t={},l={};for(let s=0;s<n;s++){const{slo:o,startDate:a,resolutionUnit:d,good:h,bad:u,events:i}=ol(`${e}-${s}`),{id:c=""}=o;t[c]=o,l[c]={events:i,segments:{[d]:[{start:a,good:h,bad:u}]}}}return{slos:t,data:l}};function al(n){let e,t;return e=new ll({props:{isMainChart:!0,slo:n[0],events:n[1],resolutionUnit:n[2],resolutionAmount:il,startDate:n[3],good:n[4],bad:n[5]}}),{c(){Ue(e.$$.fragment)},l(l){Ye(e.$$.fragment,l)},m(l,s){Ge(e,l,s),t=!0},p:Nt,i(l){t||(pe(e.$$.fragment,l),t=!0)},o(l){Ee(e.$$.fragment,l),t=!1},d(l){We(e,l)}}}const il=1;function ul(n){const e=rl(),t=Object.keys(e.slos)[0],l=e.slos[t],{events:s,segments:o}=e.data[t],a=le.DAY,{start:d,good:h,bad:u}=o[le.DAY][0];return[l,s,a,d,h,u]}class fl extends Le{constructor(e){super();He(this,e,ul,al,Oe,{})}}function cl(n){let e,t;return e=new fl({}),{c(){Ue(e.$$.fragment)},l(l){Ye(e.$$.fragment,l)},m(l,s){Ge(e,l,s),t=!0},p:Nt,i(l){t||(pe(e.$$.fragment,l),t=!0)},o(l){Ee(e.$$.fragment,l),t=!1},d(l){We(e,l)}}}class dl extends Le{constructor(e){super();He(this,e,null,cl,Oe,{})}}export{dl as default};
