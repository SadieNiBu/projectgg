(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[421,931,178],{2001:function(e,t,n){Promise.resolve().then(n.bind(n,3812)),Promise.resolve().then(n.bind(n,9791)),Promise.resolve().then(n.bind(n,9827)),Promise.resolve().then(n.bind(n,4147)),Promise.resolve().then(n.bind(n,2868)),Promise.resolve().then(n.bind(n,7026)),Promise.resolve().then(n.bind(n,1770)),Promise.resolve().then(n.bind(n,6451)),Promise.resolve().then(n.bind(n,8164)),Promise.resolve().then(n.bind(n,1632)),Promise.resolve().then(n.bind(n,3244)),Promise.resolve().then(n.bind(n,7985)),Promise.resolve().then(n.bind(n,7984)),Promise.resolve().then(n.t.bind(n,2972,23)),Promise.resolve().then(n.bind(n,3684))},3684:function(e,t,n){"use strict";n.d(t,{LatestPost:function(){return o}});var s=n(7437),r=n(2265),i=n(6290);function o(){let[e]=i.h.post.getLatest.useSuspenseQuery(),t=i.h.useUtils(),[n,o]=(0,r.useState)(""),l=i.h.post.create.useMutation({onSuccess:async()=>{await t.post.invalidate(),o("")}});return(0,s.jsxs)("div",{className:"w-full max-w-xs",children:[e?(0,s.jsxs)("p",{className:"truncate",children:["Your most recent post: ",e.name]}):(0,s.jsx)("p",{children:"You have no posts yet."}),(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),l.mutate({name:n})},className:"flex flex-col gap-2",children:[(0,s.jsx)("input",{type:"text",placeholder:"Title",value:n,onChange:e=>o(e.target.value),className:"w-full rounded-full px-4 py-2 text-black"}),(0,s.jsx)("button",{type:"submit",className:"rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20",disabled:l.isPending,children:l.isPending?"Submitting...":"Submit"})]})]})}},6290:function(e,t,n){"use strict";let s;n.d(t,{TRPCReactProvider:function(){return v},h:function(){return b}});var r=n(7437),i=n(9827),o=n(284),l=n(6368),a=n(2265),u=n(8080),d=n(4114),c=n(6085);let h=()=>new d.S({defaultOptions:{queries:{staleTime:3e4},dehydrate:{serializeData:u.ZP.serialize,shouldDehydrateQuery:e=>(0,c.d_)(e)||"pending"===e.state.status},hydrate:{deserializeData:u.ZP.deserialize}}});n(257);let m=()=>null!=s?s:s=h(),b=(0,l.ec)();function v(e){let t=m(),[n]=(0,a.useState)(()=>b.createClient({links:[(0,o.gb)({enabled:e=>"down"===e.direction&&e.result instanceof Error}),(0,o.Pq)({transformer:u.ZP,url:window.location.origin+"/api/trpc",headers:()=>{let e=new Headers;return e.set("x-trpc-source","nextjs-react"),e}})]}));return(0,r.jsx)(i.QueryClientProvider,{client:t,children:(0,r.jsx)(b.Provider,{client:n,queryClient:t,children:e.children})})}}},function(e){e.O(0,[264,593,971,117,744],function(){return e(e.s=2001)}),_N_E=e.O()}]);