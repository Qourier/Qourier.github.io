import{e as ge,_ as me}from"./index.cdfb8998.js";const we=Symbol(),se=Object.getPrototypeOf,Z=new WeakMap,be=e=>e&&(Z.has(e)?Z.get(e):se(e)===Object.prototype||se(e)===Array.prototype),ve=e=>be(e)&&e[we]||null,ne=(e,t=!0)=>{Z.set(e,t)},Q=e=>typeof e=="object"&&e!==null,D=new WeakMap,F=new WeakSet,ye=(e=Object.is,t=(n,w)=>new Proxy(n,w),s=n=>Q(n)&&!F.has(n)&&(Array.isArray(n)||!(Symbol.iterator in n))&&!(n instanceof WeakMap)&&!(n instanceof WeakSet)&&!(n instanceof Error)&&!(n instanceof Number)&&!(n instanceof Date)&&!(n instanceof String)&&!(n instanceof RegExp)&&!(n instanceof ArrayBuffer),a=n=>{switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:throw n}},o=new WeakMap,c=(n,w,v=a)=>{const I=o.get(n);if((I==null?void 0:I[0])===w)return I[1];const O=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n));return ne(O,!0),o.set(n,[w,O]),Reflect.ownKeys(n).forEach(k=>{if(Object.getOwnPropertyDescriptor(O,k))return;const W=Reflect.get(n,k),_={value:W,enumerable:!0,configurable:!0};if(F.has(W))ne(W,!1);else if(W instanceof Promise)delete _.value,_.get=()=>v(W);else if(D.has(W)){const[C,G]=D.get(W);_.value=c(C,G(),v)}Object.defineProperty(O,k,_)}),O},u=new WeakMap,f=[1,1],E=n=>{if(!Q(n))throw new Error("object required");const w=u.get(n);if(w)return w;let v=f[0];const I=new Set,O=(l,i=++f[0])=>{v!==i&&(v=i,I.forEach(r=>r(l,i)))};let k=f[1];const W=(l=++f[1])=>(k!==l&&!I.size&&(k=l,C.forEach(([i])=>{const r=i[1](l);r>v&&(v=r)})),v),_=l=>(i,r)=>{const y=[...i];y[1]=[l,...y[1]],O(y,r)},C=new Map,G=(l,i)=>{if(({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&C.has(l))throw new Error("prop listener already exists");if(I.size){const r=i[3](_(l));C.set(l,[i,r])}else C.set(l,[i])},te=l=>{var i;const r=C.get(l);r&&(C.delete(l),(i=r[1])==null||i.call(r))},pe=l=>(I.add(l),I.size===1&&C.forEach(([r,y],T)=>{if(({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&y)throw new Error("remove already exists");const $=r[3](_(T));C.set(T,[r,$])}),()=>{I.delete(l),I.size===0&&C.forEach(([r,y],T)=>{y&&(y(),C.set(T,[r]))})}),q=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),K=t(q,{deleteProperty(l,i){const r=Reflect.get(l,i);te(i);const y=Reflect.deleteProperty(l,i);return y&&O(["delete",[i],r]),y},set(l,i,r,y){const T=Reflect.has(l,i),$=Reflect.get(l,i,y);if(T&&(e($,r)||u.has(r)&&e($,u.get(r))))return!0;te(i),Q(r)&&(r=ve(r)||r);let z=r;if(r instanceof Promise)r.then(P=>{r.status="fulfilled",r.value=P,O(["resolve",[i],P])}).catch(P=>{r.status="rejected",r.reason=P,O(["reject",[i],P])});else{!D.has(r)&&s(r)&&(z=E(r));const P=!F.has(z)&&D.get(z);P&&G(i,P)}return Reflect.set(l,i,z,y),O(["set",[i],r,$]),!0}});u.set(n,K);const he=[q,W,c,pe];return D.set(K,he),Reflect.ownKeys(n).forEach(l=>{const i=Object.getOwnPropertyDescriptor(n,l);"value"in i&&(K[l]=n[l],delete i.value,delete i.writable),Object.defineProperty(q,l,i)}),K})=>[E,D,F,e,t,s,a,o,c,u,f],[Ie]=ye();function A(e={}){return Ie(e)}function S(e,t,s){const a=D.get(e);({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!a&&console.warn("Please use proxy object");let o;const c=[],u=a[3];let f=!1;const n=u(w=>{if(c.push(w),s){t(c.splice(0));return}o||(o=Promise.resolve().then(()=>{o=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,n()}}function Ee(e,t){const s=D.get(e);({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!s&&console.warn("Please use proxy object");const[a,o,c]=s;return c(a,o(),t)}let X;const j={ethereumClient:void 0,setEthereumClient(e){X=e},client(){if(X)return X;throw new Error("ClientCtrl has no client set")}},p=A({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),R={state:p,subscribe(e){return S(p,()=>e(p))},push(e,t){e!==p.view&&(p.view=e,t&&(p.data=t),p.history.push(e))},reset(e){p.view=e,p.history=[e]},replace(e){p.history.length>1&&(p.history[p.history.length-1]=e,p.view=e)},goBack(){if(p.history.length>1){p.history.pop();const[e]=p.history.slice(-1);p.view=e}},setData(e){p.data=e}},m={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",W3M_VERSION:"W3M_VERSION",W3M_PREFER_INJECTED_URL_FLAG:"w3mPreferInjected",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return m.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return m.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(m.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let a=e;a.includes("://")||(a=e.replaceAll("/","").replaceAll(":",""),a=`${a}://`),this.setWalletConnectDeepLink(a,s);const o=encodeURIComponent(t);return`${a}wc?uri=${o}`},formatUniversalUrl(e,t,s){if(!m.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let a=e;e.endsWith("/")&&(a=e.slice(0,-1)),this.setWalletConnectDeepLink(a,s);const o=encodeURIComponent(t);return`${a}/wc?uri=${o}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink(e){const[t]=e.split("?");localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))},removeWalletConnectDeepLink(){localStorage.removeItem(m.WALLETCONNECT_DEEPLINK_CHOICE)},setWeb3ModalVersionInStorage(){typeof localStorage<"u"&&localStorage.setItem(m.W3M_VERSION,"2.4.2")},getWalletRouterData(){var e;const t=(e=R.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t},getSwitchNetworkRouterData(){var e;const t=(e=R.state.data)==null?void 0:e.SwitchNetwork;if(!t)throw new Error('Missing "SwitchNetwork" view data');return t},isPreferInjectedFlag(){return typeof location<"u"?new URLSearchParams(location.search).has(m.W3M_PREFER_INJECTED_URL_FLAG):!1}},Ce=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),b=A({enabled:Ce,userSessionId:"",events:[],connectedWalletId:void 0}),Le={state:b,subscribe(e){return S(b.events,()=>e(Ee(b.events[b.events.length-1])))},initialize(){b.enabled&&typeof crypto<"u"&&(b.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){b.connectedWalletId=e},click(e){if(b.enabled){const t={type:"CLICK",name:e.name,userSessionId:b.userSessionId,timestamp:Date.now(),data:e};b.events.push(t)}},track(e){if(b.enabled){const t={type:"TRACK",name:e.name,userSessionId:b.userSessionId,timestamp:Date.now(),data:e};b.events.push(t)}},view(e){if(b.enabled){const t={type:"VIEW",name:e.name,userSessionId:b.userSessionId,timestamp:Date.now(),data:e};b.events.push(t)}}},g=A({selectedChain:void 0,chains:void 0,standaloneChains:void 0,standaloneUri:void 0,isStandalone:!1,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,isPreferInjected:!1,walletConnectVersion:1}),h={state:g,subscribe(e){return S(g,()=>e(g))},setChains(e){g.chains=e},setStandaloneChains(e){g.standaloneChains=e},setStandaloneUri(e){g.standaloneUri=e},getSelectedChain(){const e=j.client().getNetwork().chain;return e&&(g.selectedChain=e),g.selectedChain},setSelectedChain(e){g.selectedChain=e},setIsStandalone(e){g.isStandalone=e},setIsCustomDesktop(e){g.isCustomDesktop=e},setIsCustomMobile(e){g.isCustomMobile=e},setIsDataLoaded(e){g.isDataLoaded=e},setIsUiLoaded(e){g.isUiLoaded=e},setWalletConnectVersion(e){g.walletConnectVersion=e},setIsPreferInjected(e){g.isPreferInjected=e},setIsAuth(e){g.isAuth=e}},H=A({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,tokenContracts:void 0,standaloneChains:void 0,enableStandaloneMode:!1,enableAuthMode:!1,enableNetworkView:!1,enableAccountView:!0,enableExplorer:!0,defaultChain:void 0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),U={state:H,subscribe(e){return S(H,()=>e(H))},setConfig(e){var t,s,a,o;Le.initialize(),h.setStandaloneChains(e.standaloneChains),h.setIsStandalone(!!((t=e.standaloneChains)!=null&&t.length)||!!e.enableStandaloneMode),h.setIsAuth(!!e.enableAuthMode),h.setIsCustomMobile(!!((s=e.mobileWallets)!=null&&s.length)),h.setIsCustomDesktop(!!((a=e.desktopWallets)!=null&&a.length)),h.setWalletConnectVersion((o=e.walletConnectVersion)!=null?o:1),h.state.isStandalone||(h.setChains(j.client().chains),h.setIsPreferInjected(j.client().isInjectedProviderInstalled()&&m.isPreferInjectedFlag())),e.defaultChain&&h.setSelectedChain(e.defaultChain),m.setWeb3ModalVersionInStorage(),Object.assign(H,e)}},d=A({address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1}),Oe={state:d,subscribe(e){return S(d,()=>e(d))},getAccount(){const e=j.client().getAccount();d.address=e.address,d.isConnected=e.isConnected},async fetchProfile(e,t){var s;try{d.profileLoading=!0;const a=t!=null?t:d.address,o=(s=h.state.chains)==null?void 0:s.find(c=>c.id===1);if(a&&o){const c=await j.client().fetchEnsName({address:a,chainId:1});if(c){const u=await j.client().fetchEnsAvatar({name:c,chainId:1});u&&await e(u),d.profileAvatar=u}d.profileName=c}}finally{d.profileLoading=!1}},async fetchBalance(e){try{const{chain:t}=j.client().getNetwork(),{tokenContracts:s}=U.state;let a;t&&s&&(a=s[t.id]),d.balanceLoading=!0;const o=e!=null?e:d.address;if(o){const c=await j.client().fetchBalance({address:o,token:a});d.balance={amount:c.formatted,symbol:c.symbol}}}finally{d.balanceLoading=!1}},setAddress(e){d.address=e},setIsConnected(e){d.isConnected=e},resetBalance(){d.balance=void 0},resetAccount(){d.address=void 0,d.isConnected=!1,d.profileName=void 0,d.profileAvatar=void 0,d.balance=void 0}},ee="https://explorer-api.walletconnect.com";async function J(e,t){const s=new URL(e,ee);return s.searchParams.append("projectId",U.state.projectId),Object.entries(t).forEach(([a,o])=>{o&&s.searchParams.append(a,String(o))}),(await fetch(s)).json()}const M={async getDesktopListings(e){return J("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return J("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return J("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return J("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${ee}/w3m/v1/getWalletImage/${e}?projectId=${U.state.projectId}`},getAssetImageUrl(e){return`${ee}/w3m/v1/getAssetImage/${e}?projectId=${U.state.projectId}`}};var Ae=Object.defineProperty,ae=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,re=(e,t,s)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Se=(e,t)=>{for(var s in t||(t={}))We.call(t,s)&&re(e,s,t[s]);if(ae)for(var s of ae(t))je.call(t,s)&&re(e,s,t[s]);return e};const oe=m.isMobile(),L=A({wallets:{listings:[],total:0,page:1},injectedWallets:[],search:{listings:[],total:0,page:1},recomendedWallets:[]}),xe={state:L,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=U.state;if(e==="NONE"||t==="ALL"&&!e)return L.recomendedWallets;if(m.isArray(e)){const s={recommendedIds:e.join(",")},{listings:a}=await M.getAllListings(s),o=Object.values(a);o.sort((c,u)=>{const f=e.indexOf(c.id),E=e.indexOf(u.id);return f-E}),L.recomendedWallets=o}else{const{standaloneChains:s,walletConnectVersion:a,isAuth:o}=h.state,c=s==null?void 0:s.join(","),u=m.isArray(t),f={page:1,sdks:o?"auth_v1":void 0,entries:m.RECOMMENDED_WALLET_AMOUNT,chains:c,version:a,excludedIds:u?t.join(","):void 0},{listings:E}=oe?await M.getMobileListings(f):await M.getDesktopListings(f);L.recomendedWallets=Object.values(E)}return L.recomendedWallets},async getWallets(e){const t=Se({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:a}=U.state,{recomendedWallets:o}=L;if(a==="ALL")return L.wallets;t.search||(o.length?t.excludedIds=o.map(v=>v.id).join(","):m.isArray(s)&&(t.excludedIds=s.join(","))),m.isArray(a)&&(t.excludedIds=[t.excludedIds,a].filter(Boolean).join(",")),h.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:u}=e,{listings:f,total:E}=oe?await M.getMobileListings(t):await M.getDesktopListings(t),n=Object.values(f),w=u?"search":"wallets";return L[w]={listings:[...L[w].listings,...n],total:E,page:c!=null?c:1},{listings:n,total:E}},async getInjectedWallets(){const{listings:e}=await M.getInjectedListings({}),t=Object.values(e);return L.injectedWallets=t,L.injectedWallets},getWalletImageUrl(e){return M.getWalletImageUrl(e)},getAssetImageUrl(e){return M.getAssetImageUrl(e)},resetSearch(){L.search={listings:[],total:0,page:1}}},B=A({pairingUri:"",pairingError:!1}),ie={state:B,subscribe(e){return S(B,()=>e(B))},setPairingUri(e){B.pairingUri=e},setPairingError(e){B.pairingError=e}},V=A({open:!1}),Y={state:V,subscribe(e){return S(V,()=>e(V))},async open(e){return new Promise(t=>{const{isStandalone:s,isUiLoaded:a,isDataLoaded:o,isPreferInjected:c,selectedChain:u}=h.state,{isConnected:f}=Oe.state,{enableNetworkView:E}=U.state;if(s)h.setStandaloneUri(e==null?void 0:e.uri),h.setStandaloneChains(e==null?void 0:e.standaloneChains),R.reset("ConnectWallet");else if(e!=null&&e.route)R.reset(e.route);else if(f)R.reset("Account");else if(E)R.reset("SelectNetwork");else if(c){j.client().connectConnector("injected",u==null?void 0:u.id).catch(w=>console.error(w)),t();return}else R.reset("ConnectWallet");const{pairingUri:n}=ie.state;if(a&&o&&(s||n||f))V.open=!0,t();else{const w=setInterval(()=>{const v=h.state,I=ie.state;v.isUiLoaded&&v.isDataLoaded&&(v.isStandalone||I.pairingUri||f)&&(clearInterval(w),V.open=!0,t())},200)}})},close(){V.open=!1}};var Pe=Object.defineProperty,le=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,ce=(e,t,s)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ue=(e,t)=>{for(var s in t||(t={}))Me.call(t,s)&&ce(e,s,t[s]);if(le)for(var s of le(t))De.call(t,s)&&ce(e,s,t[s]);return e};function _e(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const x=A({themeMode:_e()?"dark":"light"}),de={state:x,subscribe(e){return S(x,()=>e(x))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(x.themeMode=t),s&&(x.themeVariables=Ue({},s))}},N=A({open:!1,message:"",variant:"success"}),Ke={state:N,subscribe(e){return S(N,()=>e(N))},openToast(e,t){N.open=!0,N.message=e,N.variant=t},closeToast(){N.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=ge.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}));var Ne=Object.defineProperty,ue=Object.getOwnPropertySymbols,Re=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable,fe=(e,t,s)=>t in e?Ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Te=(e,t)=>{for(var s in t||(t={}))Re.call(t,s)&&fe(e,s,t[s]);if(ue)for(var s of ue(t))ke.call(t,s)&&fe(e,s,t[s]);return e};class Ve{constructor(t){this.openModal=Y.open,this.closeModal=Y.close,this.subscribeModal=Y.subscribe,this.setTheme=de.setThemeConfig,de.setThemeConfig(t),U.setConfig(Te({enableStandaloneMode:!0},t)),this.initUi()}async initUi(){if(typeof window<"u"){await me(()=>import("./index.es.9ad95944.js"),["assets/index.es.9ad95944.js","assets/index.cdfb8998.js"]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),h.setIsUiLoaded(!0)}}}const ze=Object.freeze(Object.defineProperty({__proto__:null,Web3Modal:Ve},Symbol.toStringTag,{value:"Module"}));export{j as C,Le as H,Oe as K,ie as _,de as a,R as b,m as c,h as d,ze as i,xe as n,Ke as o,Y as s,U as y};
