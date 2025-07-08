(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{6141:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(3232)}])},8199:function(e,t){"use strict";var n,r,o,i;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_FAST_REFRESH:function(){return s},ACTION_NAVIGATE:function(){return a},ACTION_PREFETCH:function(){return d},ACTION_REFRESH:function(){return l},ACTION_RESTORE:function(){return u},ACTION_SERVER_ACTION:function(){return f},ACTION_SERVER_PATCH:function(){return c},PrefetchCacheEntryStatus:function(){return r},PrefetchKind:function(){return n},isThenable:function(){return p}});let l="refresh",a="navigate",u="restore",c="server-patch",d="prefetch",s="fast-refresh",f="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=n||(n={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",(i=r||(r={})).fresh="fresh",i.reusable="reusable",i.expired="expired",i.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7195:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(8337),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let r=n(8754),o=n(5893),i=r._(n(7294)),l=n(6075),a=n(3955),u=n(8041),c=n(9903),d=n(5490),s=n(1928),f=n(257),p=n(4229),h=n(7195),m=n(9470),y=n(8199),g=new Set;function b(e,t,n,r,o,i){if(i||(0,a.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(g.has(o))return;g.add(o)}(async()=>i?e.prefetch(t,o):e.prefetch(t,n,r))().catch(e=>{})}}function x(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let _=i.default.forwardRef(function(e,t){let n,r;let{href:u,as:g,children:_,prefetch:v=null,passHref:C,replace:j,shallow:w,scroll:E,locale:O,onClick:P,onMouseEnter:k,onTouchStart:T,legacyBehavior:A=!1,...M}=e;n=_,A&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let R=i.default.useContext(s.RouterContext),S=i.default.useContext(f.AppRouterContext),I=null!=R?R:S,N=!R,L=!1!==v,z=null===v?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:H,as:U}=i.default.useMemo(()=>{if(!R){let e=x(u);return{href:e,as:g?x(g):e}}let[e,t]=(0,l.resolveHref)(R,u,!0);return{href:e,as:g?(0,l.resolveHref)(R,g):t||e}},[R,u,g]),F=i.default.useRef(H),K=i.default.useRef(U);A&&(r=i.default.Children.only(n));let Z=A?r&&"object"==typeof r&&r.ref:t,[q,D,G]=(0,p.useIntersection)({rootMargin:"200px"}),V=i.default.useCallback(e=>{(K.current!==U||F.current!==H)&&(G(),K.current=U,F.current=H),q(e),Z&&("function"==typeof Z?Z(e):"object"==typeof Z&&(Z.current=e))},[U,Z,H,G,q]);i.default.useEffect(()=>{I&&D&&L&&b(I,H,U,{locale:O},{kind:z},N)},[U,H,D,O,L,null==R?void 0:R.locale,I,N,z]);let Y={ref:V,onClick(e){A||"function"!=typeof P||P(e),A&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,o,l,u,c,d){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!d&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let f=()=>{let e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:c,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};d?i.default.startTransition(f):f()}(e,I,H,U,j,w,E,O,N)},onMouseEnter(e){A||"function"!=typeof k||k(e),A&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(L||!N)&&b(I,H,U,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:z},N)},onTouchStart:function(e){A||"function"!=typeof T||T(e),A&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(L||!N)&&b(I,H,U,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:z},N)}};if((0,c.isAbsoluteUrl)(U))Y.href=U;else if(!A||C||"a"===r.type&&!("href"in r.props)){let e=void 0!==O?O:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,h.getDomainLocale)(U,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);Y.href=t||(0,m.addBasePath)((0,d.addLocale)(U,e,null==R?void 0:R.defaultLocale))}return A?i.default.cloneElement(r,Y):(0,o.jsx)("a",{...M,...Y,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let r=n(7294),o=n(4474),i="function"==typeof IntersectionObserver,l=new Map,a=[];function u(e){let{rootRef:t,rootMargin:n,disabled:u}=e,c=u||!i,[d,s]=(0,r.useState)(!1),f=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{f.current=e},[]);return(0,r.useEffect)(()=>{if(i){if(c||d)return;let e=f.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},a.push(n),l.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!d){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,d,f.current]),[p,d,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3232:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),o=n(1664),i=n.n(o),l=n(1686),a=n(6950);let u=l.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background-color: #f9f9f9;
`,c=l.ZP.h1`
  font-size: 8rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(90deg, #3b7a57, #6b8e23);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 6rem;
  }

  @media (max-width: 480px) {
    font-size: 4rem;
  }
`,d=l.ZP.h2`
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 0 2rem;
  color: #2d3748;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,s=l.ZP.p`
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 600px;
  margin-bottom: 2.5rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,f=l.ZP.a`
  background: linear-gradient(90deg, #3b7a57, #6b8e23);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(59, 122, 87, 0.25);
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: linear-gradient(90deg, #346c4d, #5c7a1e);
    box-shadow: 0 8px 20px rgba(59, 122, 87, 0.35);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 8px rgba(59, 122, 87, 0.25);
  }
`;function p(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{title:"404 - Страница не найдена | Гранум",description:"Запрашиваемая страница не найдена. Вернитесь на главную страницу сайта Гранум."}),(0,r.jsxs)(u,{children:[(0,r.jsx)(c,{children:"404"}),(0,r.jsx)(d,{children:"Страница не найдена"}),(0,r.jsx)(s,{children:"Извините, но страница, которую вы ищете, не существует или была перемещена. Пожалуйста, вернитесь на главную страницу."}),(0,r.jsx)(i(),{href:"/",passHref:!0,children:(0,r.jsx)(f,{children:"Вернуться на главную"})})]})]})}},6950:function(e,t,n){"use strict";var r=n(7294);t.Z=e=>{let{title:t="Купить гранит и мрамор от производителя Гранум в Челябинске | Выгодные цены",description:n="Производство и продажа изделий из гранита и мрамора в Челябинске, Еманжелинске и во всех других регионах России от 'Гранум'. Заказать изделия из камня по выгодным ценам. Столешницы, ступени, подоконники, бордюры, балясины, толстомеры. Выгодные цены, доставка. Каталог и контакты.",keywords:o="натуральный камень Челябинск, гранит, мрамор, купить камень, изделия из камня, производство изделий из камня, Гранум Челябинск, столешницы из камня, подоконники из камня, ступени из камня, облицовка камнем, бордюры гранитные, балясины из камня, толстомеры гранитные, камень от производителя, продажа камня, доставка камня, контакты Гранум, слэб, гранитные полосы, тактильные плиты",ogImage:i="https://storage.yandexcloud.net/ilia/IMG_5153-min.jpg",canonicalUrl:l}=e;return(0,r.useEffect)(()=>{document.title=t;let e=document.querySelector('meta[name="description"]');if(e)e.setAttribute("content",n);else{let e=document.createElement("meta");e.name="description",e.content=n,document.head.appendChild(e)}let r=document.querySelector('meta[name="keywords"]');if(r)r.setAttribute("content",o);else{let e=document.createElement("meta");e.name="keywords",e.content=o,document.head.appendChild(e)}let a=l||window.location.origin;[{property:"og:type",content:"website"},{property:"og:url",content:a},{property:"og:title",content:t},{property:"og:description",content:n},{property:"og:image",content:i},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:url",content:a},{property:"twitter:title",content:t},{property:"twitter:description",content:n},{property:"twitter:image",content:i}].forEach(e=>{let t=document.querySelector(`meta[property="${e.property}"]`);if(t)t.setAttribute("content",e.content);else{let t=document.createElement("meta");t.setAttribute("property",e.property),t.setAttribute("content",e.content),document.head.appendChild(t)}});let u=document.querySelector('link[rel="canonical"]');if(u)u.setAttribute("href",a);else{let e=document.createElement("link");e.rel="canonical",e.href=a,document.head.appendChild(e)}let c=document.querySelector('script[type="application/ld+json"]');c&&document.head.removeChild(c);let d=document.createElement("script");d.type="application/ld+json",d.textContent=JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"Гранум",url:a,logo:i,description:n,address:{"@type":"PostalAddress",addressLocality:"Челябинск",addressRegion:"Челябинская область",addressCountry:"Россия"},contactPoint:{"@type":"ContactPoint",telephone:"+7 912 790 26 95",email:"Alulianov@yandex.ru",contactType:"customer service"},priceRange:"₽₽₽",geo:{"@type":"GeoCoordinates",latitude:"54.7518",longitude:"61.3215"},openingHoursSpecification:{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"09:00",closes:"18:00"}}),document.head.appendChild(d)},[t,n,o,i,l]),null}},1664:function(e,t,n){e.exports=n(8342)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=6141)}),_N_E=e.O()}]);