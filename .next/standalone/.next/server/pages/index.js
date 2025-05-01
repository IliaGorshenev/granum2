(()=>{var e={};e.id=405,e.ids=[405,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,i){return i in t?t[i]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,i)):"function"==typeof t&&"default"===i?t:void 0}}})},1496:(e,t,i)=>{"use strict";i.a(e,async(e,r)=>{try{i.r(t),i.d(t,{config:()=>g,default:()=>p,getServerSideProps:()=>h,getStaticPaths:()=>m,getStaticProps:()=>x,reportWebVitals:()=>f,routeModule:()=>y,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>w,unstable_getStaticPaths:()=>u,unstable_getStaticProps:()=>b});var o=i(7093),a=i(5244),n=i(1323),s=i(7645),d=i(6814),l=i(6209),c=e([l]);l=(c.then?(await c)():c)[0];let p=(0,n.l)(l,"default"),x=(0,n.l)(l,"getStaticProps"),m=(0,n.l)(l,"getStaticPaths"),h=(0,n.l)(l,"getServerSideProps"),g=(0,n.l)(l,"config"),f=(0,n.l)(l,"reportWebVitals"),b=(0,n.l)(l,"unstable_getStaticProps"),u=(0,n.l)(l,"unstable_getStaticPaths"),w=(0,n.l)(l,"unstable_getStaticParams"),j=(0,n.l)(l,"unstable_getServerProps"),v=(0,n.l)(l,"unstable_getServerSideProps"),y=new o.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:d.default,Document:s.default},userland:l});r()}catch(e){r(e)}})},6814:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});var r=i(997),o=i(7518);i(2636),i(5833);let a=(0,o.createGlobalStyle)`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`,n={colors:{primary:"#3b7a57",secondary:"#6b8e23",background:"#f9f9f9",text:"#2d3748",lightText:"#4a5568"}};function s({Component:e,pageProps:t}){return console.log("_app.tsx rendering with pageProps:",t),(0,r.jsxs)(r.Fragment,{children:[r.jsx(a,{}),r.jsx(o.ThemeProvider,{theme:n,children:r.jsx(e,{...t})})]})}},7645:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});var r=i(997),o=i(6859),a=i.n(o),n=i(7518);class s extends a(){static async getInitialProps(e){console.log("_document.tsx: getInitialProps called");let t=new n.ServerStyleSheet,i=e.renderPage;try{e.renderPage=()=>i({enhanceApp:e=>i=>t.collectStyles(r.jsx(e,{...i}))});let o=await a().getInitialProps(e);return console.log("_document.tsx: initialProps generated"),{...o,styles:(0,r.jsxs)(r.Fragment,{children:[o.styles,t.getStyleElement()]})}}finally{t.seal()}}render(){return console.log("_document.tsx: render called"),(0,r.jsxs)(o.Html,{lang:"ru",children:[r.jsx(o.Head,{children:r.jsx("link",{rel:"preconnect",href:"https://storage.yandexcloud.net"})}),(0,r.jsxs)("body",{children:[r.jsx(o.Main,{}),r.jsx(o.NextScript,{})]})]})}}},6209:(e,t,i)=>{"use strict";i.a(e,async(e,r)=>{try{i.r(t),i.d(t,{default:()=>l,getStaticProps:()=>c});var o=i(997),a=i(968),n=i.n(a),s=i(9450),d=e([s]);function l({catalogData:e}){return console.log("Home component rendering with catalogData:",e?e.length:0,"items"),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n(),{children:[o.jsx("title",{children:"Гранум - Изделия из натурального камня"}),o.jsx("meta",{name:"description",content:"Премиальные решения с камнем - создайте пространство, которое восхищает"}),o.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),o.jsx("link",{rel:"icon",href:"/favicon.ico"})]}),o.jsx(s.Z,{initialCatalogData:e})]})}s=(d.then?(await d)():d)[0];let c=async()=>{console.log("getStaticProps started");try{let e="https://docs.google.com/spreadsheets/d/e/2PACX-1vQnfEBU2jZvGQOqDX0hgA0dQXM9br26tBVhoN7ctaa1W4ChbfQkUrX6afNums1ZGA/pub?gid=1474798808&single=true&output=csv";console.log("Fetching data from:",e);let t=await fetch(e);if(!t.ok)throw Error(`Failed to fetch file: ${t.status} ${t.statusText}`);let i=await t.text();console.log("CSV data received, length:",i.length);let r=i.split("\n").map(e=>{let t=[],i="",r=!1;for(let o=0;o<e.length;o++){let a=e[o];'"'===a?r=!r:","!==a||r?i+=a:(t.push(i),i="")}return t.push(i),t});console.log("CSV parsed into rows:",r.length);let o=r[0],a=r.slice(1).map(e=>{let t={};return o.forEach((i,r)=>{t[i.trim()]=e[r]?.trim()||""}),t});console.log("Raw data objects created:",a.length);let n=new Map;a.forEach(e=>{let t=parseInt(e.id);if(!t){console.warn("Row missing ID, skipping:",e);return}n.has(t)||n.set(t,{id:t,name:e.name||"",origin:e.origin||"",color:e.color||"",image:e.image||"",description:e.description||"",prices:[]});let i=n.get(t);i&&e.size&&e.price&&i.prices.push({size:e.size,price:e.price,additional:e.additional||""})});let s=Array.from(n.values());return console.log("Final catalog data processed:",s.length,"items"),{props:{catalogData:s},revalidate:86400}}catch(e){return console.error("Error fetching catalog data:",e),{props:{catalogData:[]},revalidate:86400}}};r()}catch(e){r(e)}})},9450:(e,t,i)=>{"use strict";i.a(e,async(e,r)=>{try{i.d(t,{Z:()=>w});var o=i(997),a=i(6689),n=i(7518),s=i.n(n),d=i(9536),l=i(6369),c=i(59),p=i(8944),x=i(6360),m=i(2203),h=i(581),g=i(4539),f=i(6893),b=e([g]);g=(b.then?(await b)():b)[0];let u=s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
`;s().h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1rem;
`,s().div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  margin: 2rem 0;
`,s().button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: #45a049;
  }
`;let w=function({initialCatalogData:e=[]}){let[t,i]=(0,a.useState)(null),[r,n]=(0,a.useState)(!1);return(0,o.jsxs)(u,{children:[o.jsx(f.Z,{}),o.jsx(x.Z,{}),o.jsx(h.Z,{slides:[{title:"Собственное производство",subtitle:"Качество, которое восхищает",imageSrc:"https://granum-stone.s3.regru.cloud/uploads/1746121312529-Stanki.mp4",type:"video"},{title:"Премиальные решения с камнем",subtitle:"Создайте пространство, которое восхищает",imageSrc:"https://storage.yandexcloud.net/ilia/IMG_5153-min.jpg"},{title:"Искусное мастерство",subtitle:"Неподвластное времени очарование и стиль",imageSrc:"https://storage.yandexcloud.net/ilia/11258999099890122_543e.jpg"},{title:"Беспрецедентное качество",subtitle:"Природная изящность, которая впечатляет",imageSrc:"https://storage.yandexcloud.net/ilia/Lez-4599-1-1536x1024.jpg"}],buttonText:"К каталогу",onButtonClick:()=>{let e=document.getElementById("catalog");e&&e.scrollIntoView({behavior:"smooth"})}}),o.jsx(l.Z,{initialData:e}),o.jsx(g.Z,{works:[{id:1,title:"Плита терм. гр.Мансуровский 600х300х30",imageSrc:"https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0.jpg"},{id:2,title:"Подоконники полированные гр.Дымовский 1200х450х50.",imageSrc:"https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%BF%D0%BE%D0%B4%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA.jpg",additionalImages:["https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%BF%D0%BE%D0%B4%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA%D0%B83.jpg"]},{id:3,title:"Входная группа: Южно-Султаевский гранит",imageSrc:"https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%B2%D1%85%D0%BE%D0%B43.jpg",additionalImages:["https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%B2%D1%85%D0%BE%D0%B41.jpg","https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%B2%D1%85%D0%BE%D0%B42.jpg"]},{id:4,title:"Входная группа: Дымовский гранит (обработан пропиткой с эффектом мокрого камня)",imageSrc:"https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA4.jpg",additionalImages:["https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA3.jpg","https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA1.jpg"]},{id:5,title:"Входная группа: Дымовский гранит (обработан пропиткой с эффектом мокрого камня)",imageSrc:"https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA5.jpg",additionalImages:["https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA6.jpg"]},{id:5,title:"Входная группа: Габбро(Карелия)",imageSrc:" https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA7.jpg"}],onWorkClick:e=>{i(e),n(!0)}}),r&&t&&o.jsx(m.Z,{isOpen:r,onClose:()=>n(!1),product:t}),o.jsx(d.Z,{}),o.jsx(c.ZP,{telegramBotToken:"7694051593:AAGBls3mX5vQwvn4s95-gdOZHD9_96aNC7U"}),o.jsx(p.Z,{})]})};r()}catch(e){r(e)}})},6893:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var r=i(6689);let o=({title:e="Гранум - Изделия из натурального камня в Челябинске | Собственное производство",description:t="Премиальные решения из натурального камня. Собственное производство изделий из гранита, мрамора и других натуральных камней. Качество, которое восхищает.",keywords:i="натуральный камень Челябинск, гранит, мрамор, изделия из камня, столешницы, подоконники, ступени, облицовка, производство изделий из камня",ogImage:o="https://storage.yandexcloud.net/ilia/IMG_5153-min.jpg",canonicalUrl:a})=>((0,r.useEffect)(()=>{document.title=e;let r=document.querySelector('meta[name="description"]');if(r)r.setAttribute("content",t);else{let e=document.createElement("meta");e.name="description",e.content=t,document.head.appendChild(e)}let n=document.querySelector('meta[name="keywords"]');if(n)n.setAttribute("content",i);else{let e=document.createElement("meta");e.name="keywords",e.content=i,document.head.appendChild(e)}let s=a||window.location.origin;[{property:"og:type",content:"website"},{property:"og:url",content:s},{property:"og:title",content:e},{property:"og:description",content:t},{property:"og:image",content:o},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:url",content:s},{property:"twitter:title",content:e},{property:"twitter:description",content:t},{property:"twitter:image",content:o}].forEach(e=>{let t=document.querySelector(`meta[property="${e.property}"]`);if(t)t.setAttribute("content",e.content);else{let t=document.createElement("meta");t.setAttribute("property",e.property),t.setAttribute("content",e.content),document.head.appendChild(t)}});let d=document.querySelector('link[rel="canonical"]');if(d)d.setAttribute("href",s);else{let e=document.createElement("link");e.rel="canonical",e.href=s,document.head.appendChild(e)}let l=document.querySelector('script[type="application/ld+json"]');l&&document.head.removeChild(l);let c=document.createElement("script");c.type="application/ld+json",c.textContent=JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"Гранум",url:s,logo:o,description:t,address:{"@type":"PostalAddress",addressLocality:"Челябинск",addressRegion:"Челябинская область",addressCountry:"Россия"},contactPoint:{"@type":"ContactPoint",telephone:"+7 912 790 26 95",email:"Alulianov@yandex.ru",contactType:"customer service"},priceRange:"₽₽₽",geo:{"@type":"GeoCoordinates",latitude:"54.7518",longitude:"61.3215"},openingHoursSpecification:{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"09:00",closes:"18:00"}}),document.head.appendChild(c)},[e,t,i,o,a]),null)},9536:(e,t,i)=>{"use strict";i.d(t,{Z:()=>D});var r=i(997),o=i(6689),a=i(7518),n=i.n(a);let s=(0,a.keyframes)`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,d=(0,a.keyframes)`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`,l=n().section`
  padding: 4rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${s} 0.8s ease-out forwards;
`,c=n().h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  color: #333;
  font-weight: 700;

  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3b7a57, #6a994e);
    border-radius: 2px;
  }
`,p=n().div`
  border: none;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  background-color: white;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    transform: translateY(-3px);
  }
`,x=n().div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.5rem;
  background: white;
  cursor: pointer;
  border-left: 4px solid #3b7a57;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, #3b7a57, transparent);
    opacity: 0.2;
  }

  h3 {
    margin: 0;
    font-size: 1.3rem;
    font-weight: 600;
    color: #2d3748;
    transition: color 0.3s ease;
  }

  &:hover {
    background-color: #f9f9f9;

    h3 {
      color: #3b7a57;
    }
  }
`,m=n().div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${e=>e.isOpen?"#3b7a57":"#f0f0f0"};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${e=>e.isOpen?"#346c4d":"#e0e0e0"};
    transform: scale(1.05);
  }

  .icon-line {
    position: absolute;
    background-color: ${e=>e.isOpen?"white":"#333"};
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .horizontal {
    width: 14px;
    height: 2px;
  }

  .vertical {
    width: 2px;
    height: 14px;
    transform: ${e=>e.isOpen?"scaleY(0)":"scaleY(1)"};
  }
`,h=n().div`
  padding: ${e=>e.isOpen?"1.8rem 1.8rem":"0 1.8rem"};
  max-height: ${e=>e.isOpen?"2000px":"0"};
  opacity: ${e=>e.isOpen?1:0};
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1.7;
  color: #4a5568;
  background-color: white;

  p {
    margin-bottom: 1.2rem;
    font-size: 1.05rem;
  }

  ul {
    padding-left: 1.5rem;
    margin-bottom: 1.2rem;

    li {
      margin-bottom: 0.7rem;
      position: relative;

      &::before {
        content: '•';
        color: #3b7a57;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
      }
    }
  }

  strong {
    color: #2d3748;
    font-weight: 600;
  }
`,g=n().div`
  margin: 2rem 0;
  text-align: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  position: relative;
`,f=n().img`
  max-width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;

  ${g}:hover & {
    transform: scale(1.03);
  }
`;n().p`
  font-style: italic;
  text-align: center;
  padding: 1rem;
  margin: 0;
  color: #4a5568;
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(5px);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;let b=n().div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  background: linear-gradient(to right, #f8f9fa, #ffffff);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
  }
`;n().div`
  flex: 1;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));

    @media (min-width: 768px) {
      background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.7s ease;

    ${b}:hover & {
      transform: scale(1.05);
    }
  }

  @media (max-width: 767px) {
    height: 300px;
  }
`,n().div`
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #2d3748;
    position: relative;
    padding-bottom: 0.8rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #3b7a57, #6a994e);
      border-radius: 1.5px;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.2rem;
    color: #4a5568;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;let u=n().div`
  margin-top: 2rem;
`,w=n().span`
  background: linear-gradient(120deg, rgba(59, 122, 87, 0.2) 0%, rgba(106, 153, 78, 0.2) 100%);
  padding: 0.2em 0.1em;
  border-radius: 3px;
  font-weight: 500;
`,j=n().div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.03;
  background-image: url('/images/stone-texture.jpg');
  background-size: cover;
  pointer-events: none;
  z-index: -1;
`,v=n().div`
  height: 2px;
  width: 100%;
  margin: 3rem 0;
  background: linear-gradient(90deg, transparent, rgba(59, 122, 87, 0.2), rgba(106, 153, 78, 0.2), rgba(59, 122, 87, 0.2), transparent);
  background-size: 200% 100%;
  animation: ${d} 3s infinite linear;
`;n().div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 3px solid #3b7a57;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`;let y=n().div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem auto;
  max-width: 500px;

  .years-number {
    font-size: 5rem;
    font-weight: 700;
    color: #3b7a57;
    line-height: 1;
    margin-right: 1.5rem;
    position: relative;

    &::after {
      content: '+';
      position: absolute;
      top: 0;
      right: -20px;
      font-size: 2.5rem;
      color: #6a994e;
    }
  }

  .years-text {
    font-size: 1.2rem;
    line-height: 1.5;
    color: #4a5568;
  }
`,k=n().ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: '•';
      color: #3b7a57; /* Use your theme color */
      font-size: 1.5rem;
      position: absolute;
      left: 0;
      top: -0.2rem;
    }

    strong {
      display: block;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: #2d3748;
    }

    p {
      margin: 0;
      color: #4a5568;
      line-height: 1.5;
    }
  }
`,z=({title:e,children:t,isOpen:i,onClick:o})=>(0,r.jsxs)(p,{children:[(0,r.jsxs)(x,{onClick:o,children:[r.jsx("h3",{children:e}),(0,r.jsxs)(m,{isOpen:i,children:[r.jsx("span",{className:"icon-line horizontal"}),r.jsx("span",{className:"icon-line vertical"})]})]}),r.jsx(h,{isOpen:i,children:t})]}),D=()=>{let[e,t]=(0,o.useState)(null),i=i=>{t(e===i?null:i)};return(0,r.jsxs)(l,{id:"about",children:[r.jsx(j,{}),r.jsx(c,{children:"О компании"})," ",(0,r.jsxs)(y,{children:[r.jsx("div",{className:"years-number",children:"10"}),r.jsx("div",{className:"years-text",children:"лет опыта в обработке натурального камня и создании уникальных изделий"})]}),r.jsx(v,{}),(0,r.jsxs)(u,{children:[(0,r.jsxs)(z,{title:"Наша история",isOpen:0===e,onClick:()=>i(0),children:[(0,r.jsxs)("p",{children:["Компания ",r.jsx(w,{children:'"Гранум"'})," и ее команда профессионалов имеет многолетний опыт работы в камнеобрабатывающей отрасли. За годы работы мы выросли из небольшой мастерской в современное производство, оснащенное передовым оборудованием."]}),r.jsx(g,{children:r.jsx(f,{src:"https://granum-stone.s3.regru.cloud/uploads/1746124324853-DSC02321.jpg",alt:"Оборудование компании Гранум"})})]}),(0,r.jsxs)(z,{title:"Наше производство",isOpen:1===e,onClick:()=>i(1),children:[r.jsx("p",{children:"У нас есть собственный цех с современным оборудованием. Мы делаем всё сами: от распила камня до финальной полировки."}),r.jsx(g,{children:r.jsx(f,{src:"https://granum-stone.s3.regru.cloud/uploads/1746123736646-DSC02266.jpg",alt:"Оборудование компании Гранум"})}),r.jsx("p",{children:"В нашем цехе есть:"}),(0,r.jsxs)("ul",{children:[r.jsx("li",{children:"Станки для распила камня"}),r.jsx("li",{children:"Линия для шлифовки и полировки"}),r.jsx("li",{children:"Канатная машина для фигурной резки"}),r.jsx("li",{children:"Участок для термообработки камня"})]})]}),(0,r.jsxs)(z,{title:"Наши материалы",isOpen:2===e,onClick:()=>i(2),children:[r.jsx("p",{children:"Мы работаем с различными видами натурального камня, преимущественно с гранитом из разных месторождений России и ближнего зарубежья. Примеры гранита, с которым мы работаем:"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[r.jsx(w,{children:"Гранит Южно-Султаевский"})," (Челябинская область)"]}),(0,r.jsxs)("li",{children:[r.jsx(w,{children:"Гранит Мансуровский"})," (республика Башкортостан)"]}),(0,r.jsxs)("li",{children:[r.jsx(w,{children:"Гранит Камбулатовский"})," (Челябинская область)"]}),(0,r.jsxs)("li",{children:[r.jsx(w,{children:"Гранит Томирис II (Куртинский)"})," (Алматинская область)"]}),(0,r.jsxs)("li",{children:[r.jsx(w,{children:"Гранит Жельтау-2"})," (Жамбыльская область)"]}),(0,r.jsxs)("li",{children:[r.jsx(w,{children:"Гранит Авангард"})," (Урал, Челябинская область)"]}),(0,r.jsxs)("li",{children:[r.jsx(w,{children:"Гранит Исетский"})," (возможно изготовление)"]}),(0,r.jsxs)("li",{children:[r.jsx(w,{children:"Гранит Габбро Другорецкого"})," (возможно изготовление)"]})]}),r.jsx("p",{children:"Весь камень проходит проверку качества и радиационную безопасность."})]}),(0,r.jsxs)(z,{title:"Наши проекты",isOpen:3===e,onClick:()=>i(3),children:[(0,r.jsxs)("p",{children:["За 10+ лет компания ",r.jsx(w,{children:'"Гранум"'})," сделала сотни проектов — от домашних интерьеров до больших общественных зданий."]}),r.jsx(g,{children:r.jsx(f,{src:"https://granum-stone.s3.regru.cloud/uploads/1746123747543-DSC02338.jpg",alt:"Проект компании Гранум"})}),r.jsx("p",{children:"Каждый проект особенный и учитывает пожелания заказчика. Многие клиенты возвращаются к нам снова и советуют нас друзьям."}),r.jsx("p",{children:"Мы беремся за любые задачи — от простых столешниц до сложных фасадов и интерьеров."})]}),r.jsx(z,{title:"Наши преимущества",isOpen:4===e,onClick:()=>i(4),children:(0,r.jsxs)(k,{children:[(0,r.jsxs)("li",{children:[r.jsx("strong",{children:"Своё производство"}),r.jsx("p",{children:"Контролируем качество на всех этапах — от выбора камня до готового изделия."})]}),(0,r.jsxs)("li",{children:[r.jsx("strong",{children:"Опытные мастера"}),r.jsx("p",{children:"Наши специалисты знают и любят камень, имеют большой опыт работы."})]}),(0,r.jsxs)("li",{children:[r.jsx("strong",{children:"Индивидуальный подход"}),r.jsx("p",{children:"Создаём решения под ваши задачи, учитывая все пожелания."})]}),(0,r.jsxs)("li",{children:[r.jsx("strong",{children:"Сопровождение проекта"}),r.jsx("p",{children:"Помогаем на всех этапах: от консультации и выбора материала до замеров, изготовления и монтажа."})]}),(0,r.jsxs)("li",{children:[r.jsx("strong",{children:"Гарантия качества"}),r.jsx("p",{children:"Даём гарантию на все наши работы."})]}),(0,r.jsxs)("li",{children:[r.jsx("strong",{children:"Хорошие цены"}),r.jsx("p",{children:"Работаем без посредников, поэтому цены ниже при высоком качестве."})]})]})})]}),r.jsx(v,{})]})}},6369:(e,t,i)=>{"use strict";i.d(t,{Z:()=>N});var r=i(997),o=i(6689),a=i(7518),n=i.n(a);require("xlsx");let s=n().div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,d=n().div`
  width: 50px;
  height: 50px;
  border: 5px solid #ffffff;
  border-top: 5px solid #000000;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,l=n().p`
  margin-left: 20px;
  font-size: 1.2rem;
  color: #000000;
  font-weight: 600;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`,c=({text:e="Loading..."})=>(0,r.jsxs)(s,{children:[r.jsx(d,{}),r.jsx(l,{children:e})]}),p=n().div`
  max-width: 1400px;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 15px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 10px;
  }
`,x=n().h2`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 3.5rem;
  color: #2d3748;
  position: relative;
  font-weight: 600;
  width: 100%;
  letter-spacing: -0.5px;

  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #3b7a57, #6b8e23);
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`,m=n().div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.8rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,h=n().button`
  background-color: black;
  color: white;
  border: none;
  padding: 0.9rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.05rem;
  width: 100%;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: auto;

  &:hover {
    background-color: #333;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  }
`,g=n().img`
  width: 24px;
  height: 24px;
`,f=n().div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #3b7a57, #6b8e23);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }

  &:hover:before {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    &:active {
      transform: translateY(-8px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }

    &:active:before {
      transform: scaleX(1);
    }
  }
`,b=n().div`
  height: 240px;
  background-image: url(${e=>e.bgImage});
  background-size: cover;
  background-position: center;
  transition: transform 1s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.3) 100%);
  }

  ${f}:hover & {
    transform: scale(1.08);
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`,u=n().div`
  padding: 2rem;
  min-height: auto;
  display: flex;
  flex-direction: column;
  flex: 4;
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,w=n().h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #2d3748;
  font-weight: 600;
  transition: color 0.3s ease;
  line-height: 1.3;
  margin: 0;
  margin-bottom: auto;

  ${f}:hover & {
    color: #3b7a57;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`,j=n().p`
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  font-weight: 500;
`,v=n().div`
  display: flex;
  align-items: center;
  margin-bottom: 1.8rem;
`,y=n().span`
  font-size: 1rem;
  color: #4a5568;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  font-weight: 500;
`,k=n().div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${e=>{switch(e.color.toLowerCase()){case"коричневый":return"#8B4513";case"серый":return"#808080";default:return"#CCCCCC"}}};
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  border: 2px solid white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.3);
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
  }
`;n().button`
  background: linear-gradient(90deg, #3b7a57, #6b8e23);
  color: white;
  border: none;
  padding: 0.9rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.05rem;
  width: 100%;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(59, 122, 87, 0.25);
  letter-spacing: 0.5px;

  &:hover {
    background: linear-gradient(90deg, #346c4d, #5c7a1e);
    box-shadow: 0 8px 20px rgba(59, 122, 87, 0.35);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 8px rgba(59, 122, 87, 0.25);
  }
`;let z=n().div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  animation: fadeIn 0.4s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,D=n().div`
  background-color: white;
  border-radius: 20px;
  max-width: 1250px;
  width: 92%;
  max-height: 92vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
  animation: slideUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c5c5c5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }

  @media (max-width: 768px) {
    width: 95%;
    max-height: 95vh;
  }

  @media (max-width: 480px) {
    width: 98%;
    max-height: 98vh;
    border-radius: 15px;
  }
`,S=n().div`
  padding: 2rem 2.5rem;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
  border-radius: 20px 20px 0 0;

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
    border-radius: 15px 15px 0 0;
  }
`,B=n().h2`
  font-size: 2rem;
  color: #2d3748;
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,C=n().button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #718096;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    color: #2d3748;
    background-color: #f7fafc;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1.8rem;
  }
`,E=n().div`
  padding: 2.5rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,$=n().div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 1269px) {
    flex-direction: column;
  }
`,P=n().img`
  width: 50%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.6s ease, box-shadow 0.6s ease;
  margin-bottom: 2.5rem;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1269px) {
    width: 100%;
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 220px;
    margin-bottom: 1.5rem;
    border-radius: 10px;
  }
`,A=n().p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  margin: 0;
  margin-bottom: 2.5rem;
  text-align: justify;
  letter-spacing: 0.2px;
  width: 50%;

  @media (max-width: 1269px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`,Y=n().div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2.5rem;
  background-color: #f7fafc;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    gap: 1rem;
    margin-bottom: 1.5rem;
    border-radius: 10px;
  }
`,I=n().div`
  flex: 1;
  min-width: 220px;

  @media (max-width: 480px) {
    min-width: 100%;
  }
`,L=n().h4`
  font-size: 1.1rem;
  color: #718096;
  margin-bottom: 0.5rem;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
`,F=n().p`
  font-size: 1.2rem;
  color: #2d3748;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;

  ${k} {
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`,O=n().table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 1rem;
    border-radius: 8px;
  }
`,Z=n().th`
  background-color: #f1f5f9;
  padding: 1.2rem 1.5rem;
  text-align: left;
  font-weight: 600;
  color: #475569;
  font-size: 1.1rem;
  border-bottom: 2px solid #e2e8f0;

  &:first-child {
    border-top-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.2rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
`,M=n().td`
  padding: 1.2rem 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  color: #334155;
  font-size: 1.05rem;
  transition: background-color 0.2s ease;

  tr:last-child & {
    border-bottom: none;
  }

  tr:hover & {
    background-color: #f8fafc;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.2rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 0.85rem;
  }
`,_=(0,a.keyframes)`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }

  
`,V=n()(f)`
  opacity: 0;
  animation: ${_} 0.6s ease-out forwards;
  animation-delay: ${e=>e.delay}s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,N=({initialData:e=[]})=>{let[t,i]=(0,o.useState)(e),[a,n]=(0,o.useState)(null),[s,d]=(0,o.useState)(0===e.length),[l,f]=(0,o.useState)(null);(0,o.useEffect)(()=>{if(e.length>0){i(e),d(!1);return}(async()=>{try{d(!0);let e="https://docs.google.com/spreadsheets/d/e/2PACX-1vQnfEBU2jZvGQOqDX0hgA0dQXM9br26tBVhoN7ctaa1W4ChbfQkUrX6afNums1ZGA/pub?gid=1474798808&single=true&output=csv";console.log("Fetching from URL:",e);let t=await fetch(e);if(!t.ok)throw Error(`Failed to fetch file: ${t.status} ${t.statusText}`);let r=(await t.text()).split("\n").map(e=>{let t=[],i="",r=!1;for(let o=0;o<e.length;o++){let a=e[o];'"'===a?r=!r:","!==a||r?i+=a:(t.push(i),i="")}return t.push(i),t}),o=r[0],a=r.slice(1).map(e=>{let t={};return o.forEach((i,r)=>{t[i.trim()]=e[r]?.trim()||""}),t});console.log("Raw CSV data:",a);let n=new Map;a.forEach(e=>{let t=parseInt(e.id);if(!t){console.warn("Row missing ID, skipping:",e);return}n.has(t)||n.set(t,{id:t,name:e.name||"",origin:e.origin||"",color:e.color||"",image:e.image||"",description:e.description||"",prices:[]});let i=n.get(t);i&&e.size&&e.price&&i.prices.push({size:e.size,price:e.price,additional:e.additional||""})});let s=Array.from(n.values());console.log("Processed catalog data:",s),i(s),d(!1)}catch(e){console.error("Error loading CSV file:",e),f(`Failed to load catalog data: ${e instanceof Error?e.message:String(e)}`),d(!1)}})()},[e]);let _=e=>{n(e)},N=()=>{n(null)};return s?r.jsx(c,{text:"Загружаем данные"}):l?(0,r.jsxs)("div",{children:["Error: ",l]}):(0,r.jsxs)(p,{children:[r.jsx(x,{id:"catalog",children:"Каталог гранитных плит"}),r.jsx(m,{children:t.map((e,t)=>(0,r.jsxs)(V,{onClick:()=>_(e),delay:.1*t,children:[r.jsx(b,{bgImage:e.image}),(0,r.jsxs)(u,{children:[r.jsx(w,{children:e.name}),(0,r.jsxs)(j,{children:["Происхождение: ",e.origin]}),(0,r.jsxs)(v,{children:[r.jsx(y,{children:"Цвет:"}),r.jsx(k,{color:e.color})]}),(0,r.jsxs)(h,{children:[r.jsx(g,{src:"https://storage.yandexcloud.net/ilia/2025-03-17%2015.36.35%20(2)%20(2).png",alt:"Button icon"}),"Подробнее"]})]})]},e.id))}),a&&r.jsx(z,{onClick:N,children:(0,r.jsxs)(D,{onClick:e=>e.stopPropagation(),children:[(0,r.jsxs)(S,{children:[r.jsx(B,{children:a.name}),r.jsx(C,{onClick:N,children:"\xd7"})]}),(0,r.jsxs)(E,{children:[(0,r.jsxs)($,{children:[r.jsx(P,{src:a.image,alt:a.name}),r.jsx(A,{children:a.description})]}),(0,r.jsxs)(Y,{children:[(0,r.jsxs)(I,{children:[r.jsx(L,{children:"Происхождение:"}),r.jsx(F,{children:a.origin})]}),(0,r.jsxs)(I,{children:[r.jsx(L,{children:"Цвет:"}),(0,r.jsxs)(F,{children:[a.color," ",r.jsx(k,{color:a.color})]})]})]}),r.jsx("h3",{children:"Цены"}),(0,r.jsxs)(O,{children:[r.jsx("thead",{children:(0,r.jsxs)("tr",{children:[r.jsx(Z,{children:"Размер"}),r.jsx(Z,{children:"Цена"}),r.jsx(Z,{children:"Дополнительно"})]})}),r.jsx("tbody",{children:a.prices.map((e,t)=>(0,r.jsxs)("tr",{children:[r.jsx(M,{children:e.size}),r.jsx(M,{children:e.price}),r.jsx(M,{children:e.additional})]},t))})]})]})]})})]})}},59:(e,t,i)=>{"use strict";i.d(t,{ZP:()=>y});var r=i(997),o=i(6689),a=i(7518),n=i.n(a);let s=n().div`
  width: 50%;
  max-width: 600px;
  margin: 0;
  margin-right: auto;
  margin-left: 9.5rem;
  padding: 2.5rem;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
  backdrop-filter: blur(5px);

  @media (max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
    order: 1;
  }
  
  @media (max-width: 768px) {
    width: 90%;
    padding: 1.5rem;
    margin: 0 auto;
  }
  
  @media (max-width: 480px) {
    width: 83%;
    padding: 1rem;
  }
`,d=n().h2`
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: #4caf50;
    margin: 0.8rem auto 0;
  }


  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,l=n().form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,c=n().div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,p=n().label`
  font-weight: 500;
  color: #444;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
    color: #4caf50;
  }
`,x=n().input`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s;
  background-color: rgba(255, 255, 255, 0.9);

  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
    background-color: #fff;
  }

  &::placeholder {
    color: #aaa;
  }


  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem;
    font-size: 0.9rem;
  }
`,m=n().textarea`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 140px;
  resize: vertical;
  transition: all 0.3s;
  background-color: rgba(255, 255, 255, 0.9);

  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
    background-color: #fff;
  }

  &::placeholder {
    color: #aaa;
  }


  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.95rem;
    min-height: 120px;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem;
    font-size: 0.9rem;
    min-height: 100px;
  }
`,h=n().button`
  background-color: #000;
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s;
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.6s;
  }

  &:hover {
    background-color: #222;
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    background-color: #333;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    opacity: 0.7;

    &::before {
      display: none;
    }
  }

  svg {
    margin-right: 0.5rem;
    fill: white;
  }


  @media (max-width: 768px) {
    padding: 0.9rem 1.2rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
  }
`,g=n().div`
  padding: 1rem;
  margin-top: 1.5rem;
  border-radius: 6px;
  text-align: center;
  background-color: ${e=>e.isError?"#ffebee":"#e8f5e9"};
  color: ${e=>e.isError?"#c62828":"#2e7d32"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }


  @media (max-width: 768px) {
    padding: 0.8rem;
    margin-top: 1.2rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem;
    margin-top: 1rem;
    font-size: 0.85rem;
    
    svg {
      margin-right: 0.3rem;
      font-size: 1rem;
    }
  }
`,f=n().span`
  color: #e53935;
  margin-left: 4px;
`,b=n().div`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
`,u=n().div`
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  & > * {
    flex: 1;
  }


  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
 
`;n().a`
  display: flex;
  align-items: center;
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  }
`,n().span`
  margin-right: 8px;
  display: flex;
  align-items: center;
`,n().div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${e=>e.backgroundImage?`url(${e.backgroundImage})`:"none"};
  background-size: cover;
  background-position: center;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
    z-index: 1;
  }
`;let w=n().section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
  box-sizing: border-box;
 
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 4rem 1rem;
    min-height: auto;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0.25rem;
  }
`;n().div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  width: 40%;
  max-width: 500px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 3;
  backdrop-filter: blur(5px);

  @media (max-width: 1024px) {
    position: relative;
    width: 80%;
    left: 0;
    bottom: 0;
    margin: 2rem auto 0;
  }
  
  @media (max-width: 768px) {
    width: 90%;
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    width: 95%;
    padding: 1rem;
  }
`,n().div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`,n().div`
  color: #4caf50;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,n().h4`
  margin: 0 0 0.3rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`,n().p`
  margin: 0;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.4;
`;let j=n().div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
  
  @media (max-width: 1024px) {
    position: relative;
    height: 400px;
    margin-top: 2rem;
    order: 2;
  }
  
  @media (max-width: 768px) {
    height: 350px;
  }
  
  @media (max-width: 480px) {
    height: 300px;
  }
`,v=n().div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
  }
  
  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
  }
`,y=({telegramBotToken:e,backgroundImage:t="https://storage.yandexcloud.net/ilia/1679098994_vsegda-pomnim-com-p-gabbro-norit-foto-53.jpg"})=>{let[i,a]=(0,o.useState)(""),[n,y]=(0,o.useState)(""),[k,z]=(0,o.useState)(""),[D,S]=(0,o.useState)(""),[B,C]=(0,o.useState)(null),[E,$]=(0,o.useState)(!1),P=async t=>{if(t.preventDefault(),!i||!D||!n&&!k){C({message:"Please fill in your name, message, and either email or phone.",isError:!0});return}$(!0),C(null);try{let t=`
  Поступила новая заявка с сайта
  
  Имя: ${i}
  ${n?`Почта: ${n}`:""}
  ${k?`Телефон: ${k}`:""}
  
  💬 Сообщение:
  ${D}
      `,r=await fetch(`https://api.telegram.org/bot${e}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:-4767436757,text:t,parse_mode:"HTML"})}),o=await r.json();if(o.ok)C({message:"Спасибо! Заявка успешно отправлена.",isError:!1}),a(""),y(""),z(""),S("");else throw Error(o.description||"Ошибка при отправке заявки")}catch(e){console.error("Error sending feedback:",e),C({message:"Произошла ошибка при отправке заявки. Попробуйте заново.",isError:!0})}finally{$(!1)}};return(0,r.jsxs)(w,{id:"contact",children:[(0,r.jsxs)(j,{children:[r.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?um=constructor%3A1&source=constructor&ll=61.332730%2C54.763927&z=16&pt=61.332730%2C54.763927&mode=search",width:"100%",height:"100%",frameBorder:"0",title:"Yandex Map",allow:"geolocation"}),r.jsx(v,{})]}),(0,r.jsxs)(s,{children:[r.jsx(d,{children:"Свяжитесь с нами"}),(0,r.jsxs)(l,{onSubmit:P,children:[(0,r.jsxs)(c,{children:[(0,r.jsxs)(p,{htmlFor:"name",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#000",viewBox:"0 0 16 16",children:r.jsx("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})}),"Имя ",r.jsx(f,{children:"*"})]}),r.jsx(x,{id:"name",type:"text",value:i,onChange:e=>a(e.target.value),placeholder:"Ваше полное имя",required:!0})]}),(0,r.jsxs)(u,{children:[(0,r.jsxs)(c,{children:[(0,r.jsxs)(p,{htmlFor:"email",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#000",viewBox:"0 0 16 16",children:r.jsx("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"})}),"Электронная почта"]}),r.jsx(x,{id:"email",type:"email",value:n,onChange:e=>y(e.target.value),placeholder:"Ваш адрес электронной почты"})]}),(0,r.jsxs)(c,{children:[(0,r.jsxs)(p,{htmlFor:"phone",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#000",viewBox:"0 0 16 16",children:r.jsx("path",{fillRule:"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"})}),"Телефон"]}),r.jsx(x,{id:"phone",type:"tel",value:k,onChange:e=>z(e.target.value),placeholder:"Ваш номер телефона"})]})]}),(0,r.jsxs)(c,{children:[(0,r.jsxs)(p,{htmlFor:"message",children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#000",viewBox:"0 0 16 16",children:[r.jsx("path",{d:"M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),r.jsx("path",{d:"M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"})]}),"Сообщение ",r.jsx(f,{children:"*"})]}),r.jsx(m,{id:"message",value:D,onChange:e=>S(e.target.value),placeholder:"Как мы можем помочь? Расскажите о вашем проекте или запросе...",required:!0})]}),r.jsx(h,{type:"submit",disabled:E,children:E?(0,r.jsxs)(r.Fragment,{children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"white",className:"bi bi-hourglass-split",viewBox:"0 0 16 16",children:r.jsx("path",{d:"M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"})}),"Отправка..."]}):(0,r.jsxs)(r.Fragment,{children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"white",className:"bi bi-send",viewBox:"0 0 16 16",children:r.jsx("path",{d:"M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"})}),"Отправить сообщение"]})}),B&&(0,r.jsxs)(g,{isError:B.isError,children:[B.isError?(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#000",className:"bi bi-exclamation-triangle",viewBox:"0 0 16 16",children:[r.jsx("path",{d:"M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"}),r.jsx("path",{d:"M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"})]}):(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#000",className:"bi bi-check-circle",viewBox:"0 0 16 16",children:[r.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),r.jsx("path",{d:"M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"})]}),B.message]})]}),r.jsx(b,{children:"Мы ценим вашу конфиденциальность. Ваша информация будет использоваться только для ответа на ваш запрос."})]})]})}},8944:(e,t,i)=>{"use strict";i.d(t,{Z:()=>u});var r=i(997);i(6689);var o=i(7518),a=i.n(o);let n=a().footer`
  background-color: #1a1a1a;
  color: #fff;
  padding: 5rem 2rem 3rem;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #4caf50, #2e7d32, #4caf50);
    background-size: 200% 100%;
    animation: gradient 8s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`,s=a().div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
`,d=a().div`
  display: flex;
  flex-direction: column;
`,l=a().h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.8rem;
  position: relative;
  color: #ffffff;
  letter-spacing: 0.5px;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.8rem;
    width: 40px;
    height: 3px;
    background-color: #4caf50;
    transition: width 0.3s ease;
  }

  ${d}:hover &:after {
    width: 60px;
  }
`,c=a().a`
  color: #b0b0b0;
  text-decoration: none;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
  display: inline-block;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 1px;
    background-color: #4caf50;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    padding-left: 5px;

    &:before {
      width: 100%;
    }
  }
`,p=a().p`
  color: #b0b0b0;
  margin-bottom: 1.2rem;
  line-height: 1.7;
  font-size: 0.95rem;
`;a().div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1.5rem;
`,a().a`
  color: #b0b0b0;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);

  &:hover {
    color: #ffffff;
    background-color: #4caf50;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
  }
`;let x=a().div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,m=a().p`
  color: #808080;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
`,h=a().div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`,g=a().a`
  color: #808080;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    height: 1px;
    background-color: #4caf50;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffffff;

    &:after {
      width: 100%;
    }
  }
`,f=a().div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.3rem;
`,b=a().span`
  margin-right: 10px;
  color: #4caf50;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
`;a().form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,a().input`
  padding: 12px 15px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4caf50;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: #808080;
  }
`,a().button`
  padding: 12px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;

  &:hover {
    background-color: #3d8b40;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(76, 175, 80, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;let u=()=>{let e=new Date().getFullYear();return(0,r.jsxs)(n,{children:[(0,r.jsxs)(s,{children:[(0,r.jsxs)(d,{children:[r.jsx(l,{children:"О компании Гранум"}),r.jsx(p,{children:'ООО "Гранум" - это качественный и надежный сервис, который помогает людям претворять идеи в реальность.'})]}),(0,r.jsxs)(d,{children:[r.jsx(l,{children:"Быстрые ссылки"}),r.jsx(c,{href:"#catalog",children:"Каталог"}),r.jsx(c,{href:"#works",children:"Портфолио"}),r.jsx(c,{href:"#about",children:"О нас"}),r.jsx(c,{href:"#contact",children:"Контакты"})]}),(0,r.jsxs)(d,{children:[r.jsx(l,{children:"Свяжитесь с нами"}),(0,r.jsxs)(f,{children:[r.jsx(b,{children:r.jsx("i",{className:"fas fa-map-marker-alt"})}),(0,r.jsxs)(p,{children:["456581, Челябинская область, м.р-н Еманжелинский,",r.jsx("br",{}),"г.п. Еманжелинское, г Еманжелинск, ул Советская, дом 11Б"]})]}),(0,r.jsxs)(f,{children:[r.jsx(b,{children:r.jsx("i",{className:"fas fa-phone-alt"})}),r.jsx(p,{children:"+7 912 790 26 95"})]}),(0,r.jsxs)(f,{children:[r.jsx(b,{children:r.jsx("i",{className:"fas fa-envelope"})}),r.jsx(p,{children:"Alulianov@yandex.ru"})]}),(0,r.jsxs)(f,{children:[r.jsx(b,{children:r.jsx("i",{className:"fas fa-clock"})}),r.jsx(p,{children:"Пн-Пт 8:00-19:00"})]})]})]}),(0,r.jsxs)(x,{children:[(0,r.jsxs)(m,{children:["\xa9 ",e,' ООО "Гранум". Все права защищены.']}),(0,r.jsxs)(h,{children:[r.jsx(g,{href:"/privacy",children:"Политика конфиденциальности"}),r.jsx(g,{href:"/terms",children:"Условия использования"}),r.jsx(g,{href:"/sitemap",children:"Карта сайта"})]})]})]})}},6360:(e,t,i)=>{"use strict";i.d(t,{Z:()=>u});var r=i(997),o=i(6689),a=i(7518);let n=a.styled.header`
  position: fixed;
  top: ${e=>e.isScrolled?"20px":"0"};
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>e.isScrolled?"0.8rem 2rem":"1.2rem 2rem"};
  background-color: ${e=>e.isScrolled?"rgba(255, 255, 255, 0.95)":"transparent"};
  box-shadow: ${e=>e.isScrolled?"0 2px 10px rgba(0, 0, 0, 0.1)":"none"};
  transition: all 0.4s ease;
  z-index: 1000;
  box-sizing: border-box;
  backdrop-filter: ${e=>e.isScrolled?"blur(10px)":"none"};
  width: ${e=>e.isScrolled?"60%":"100%"};
  border-radius: ${e=>e.isScrolled?"40px":"0"};
  margin: ${e=>(e.isScrolled,"0 auto")};
`,s=a.styled.div`
  display: flex;
  align-items: center;
`,d=a.styled.img`
  height: 40px;
  margin-right: 10px;
`,l=a.styled.h1`
  font-size: ${e=>e.isScrolled?"1.5rem":"1.8rem"};
  font-weight: 700;
  color: ${e=>e.isScrolled?"#333":"#fff"};
  margin: 0;
  transition: all 0.3s ease;
  text-shadow: ${e=>e.isScrolled?"none":"0 2px 4px rgba(0, 0, 0, 0.3)"};
`,c=a.styled.nav`
  display: flex;
  align-items: center;
`,p=a.styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`,x=a.styled.li`
  margin-left: 2rem;

  a {
    color: ${e=>e.isScrolled?"#333":"#fff"};
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    transition: all 0.2s ease;
    text-shadow: ${e=>e.isScrolled?"none":"0 1px 2px rgba(0, 0, 0, 0.3)"};

    &:hover {
      color: ${e=>e.isScrolled?"#4caf50":"#e0e0e0"};
    }
  }
`,m=a.styled.button`
  display: none;
  background: none;
  border: none;
  color: ${e=>e.isScrolled?"#333":"#fff"};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`,h=a.styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transform: ${e=>e.isOpen?"translateX(0)":"translateX(100%)"};
  transition: transform 0.3s ease;
  z-index: 1001;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;a.styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0 0 0;
`;let g=a.styled.li`
  margin-bottom: 1.5rem;

  a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.2rem;

    &:hover {
      color: #4caf50;
    }
  }
`,f=a.styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`,b=a.styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${e=>e.isOpen?1:0};
  visibility: ${e=>e.isOpen?"visible":"hidden"};
  transition: all 0.3s ease;
  z-index: 999;
`,u=({initialLogoSrc:e="https://storage.yandexcloud.net/ilia/2025-03-17%2015.36.35%20(2)%20(2).png",scrolledLogoSrc:t="https://storage.yandexcloud.net/ilia/2025-03-17%2015.36.35%20(2)%20(3).png"})=>{let[i,a]=(0,o.useState)(!1),[u,w]=(0,o.useState)(!1),[j,v]=(0,o.useState)(e);(0,o.useEffect)(()=>{let i=()=>{window.scrollY>50?(a(!0),v(t)):(a(!1),v(e))};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[e,t]);let y=()=>{w(!u)},k=(e,t)=>{e.preventDefault();let i=document.getElementById(t);i&&i.scrollIntoView({behavior:"smooth"}),u&&y()};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n,{isScrolled:i,children:[(0,r.jsxs)(s,{children:[r.jsx(d,{src:j,alt:"Granum Stone Works Logo"}),r.jsx(l,{isScrolled:i,children:"Гранум"})]}),(0,r.jsxs)(c,{children:[(0,r.jsxs)(p,{children:[r.jsx(x,{isScrolled:i,children:r.jsx("a",{href:"#catalog",onClick:e=>k(e,"catalog"),children:"Каталог"})}),r.jsx(x,{isScrolled:i,children:r.jsx("a",{href:"#works",onClick:e=>k(e,"works"),children:"Работы"})}),r.jsx(x,{isScrolled:i,children:r.jsx("a",{href:"#about",onClick:e=>k(e,"about"),children:"О нас"})}),r.jsx(x,{isScrolled:i,children:r.jsx("a",{href:"#contact",onClick:e=>k(e,"contact"),children:"Связаться"})})]}),r.jsx(m,{isScrolled:i,onClick:y,children:"☰"})]})]}),(0,r.jsxs)(h,{isOpen:u,children:[r.jsx(f,{onClick:y,children:"✕"}),r.jsx(g,{children:r.jsx("a",{href:"#catalog",onClick:e=>k(e,"catalog"),children:"Каталог"})}),r.jsx(g,{children:r.jsx("a",{href:"#works",onClick:e=>k(e,"works"),children:"Работы"})}),r.jsx(g,{children:r.jsx("a",{href:"#about",onClick:e=>k(e,"about"),children:"О нас"})}),r.jsx(g,{children:r.jsx("a",{href:"#contact",onClick:e=>k(e,"contact"),children:"Связаться"})})]}),r.jsx(b,{isOpen:u,onClick:y})]})}},1088:(e,t,i)=>{"use strict";i.d(t,{A:()=>c,q:()=>l});var r=i(997),o=i(7518),a=i.n(o);i(6689);let n=a().button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
  }
`,s=a().svg`
  width: 28px;
  height: 28px;
  transition: all 0.3s ease;

  ${n}:hover & {
    transform: scale(1.1);
  }
`,d=a().div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${e=>"left"===e.position?"left: 20px;":"right: 20px;"}
  z-index: 10;
`,l=({onClick:e,position:t})=>r.jsx(d,{position:t,children:r.jsx(n,{onClick:e,"aria-label":"Previous slide",children:r.jsx(s,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M15 18L9 12L15 6",stroke:"#FFFFFF",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),c=({onClick:e,position:t})=>r.jsx(d,{position:t,children:r.jsx(n,{onClick:e,"aria-label":"Next slide",children:r.jsx(s,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M9 18L15 12L9 6",stroke:"#FFFFFF",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})})})},2203:(e,t,i)=>{"use strict";i.d(t,{Z:()=>f});var r=i(997),o=i(6689),a=i(7518),n=i.n(a),s=i(1088);let d=n().div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,l=n().div`
  background-color: black;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.4s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,c=n().button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    width: 36px;
    height: 36px;
    font-size: 20px;
  }
`,p=n().div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 20px;
  position: relative;

  @media (max-width: 768px) {
    padding: 10px;
  }
`,x=n().img`
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    max-height: 75vh;
  }
`,m=n().div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #333;
  }

  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    padding: 10px 5px;
    gap: 6px;
  }
`,h=n().img`
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  border: ${e=>e.isSelected?"3px solid #3b7a57":"3px solid transparent"};
  opacity: ${e=>e.isSelected?1:.7};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 45px;
    border-width: 2px;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;n().h2`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 15px;
  border-radius: 4px;
  max-width: 70%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    top: 10px;
    left: 10px;
    padding: 6px 10px;
    max-width: 60%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    max-width: 50%;
  }
`;let g=n().div`
  @media (max-width: 768px) {
    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 24px;
      height: 24px;
    }
  }
`,f=({isOpen:e,onClose:t,product:i})=>{let[a,n]=(0,o.useState)(i.imageSrc),[f,b]=(0,o.useState)(0),u=[i.imageSrc,...i.additionalImages||[]];(0,o.useEffect)(()=>{let e=u.findIndex(e=>e===a);b(e>=0?e:0)},[a,u]),(0,o.useEffect)(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}),[]),(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key?t():"ArrowRight"===e.key?w():"ArrowLeft"===e.key&&j()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[t,f]);let w=()=>{if(u.length>1){let e=(f+1)%u.length;b(e),n(u[e])}},j=()=>{if(u.length>1){let e=(f-1+u.length)%u.length;b(e),n(u[e])}};return r.jsx(d,{onClick:t,children:(0,r.jsxs)(l,{onClick:e=>e.stopPropagation(),children:[r.jsx(c,{onClick:t,children:"\xd7"}),(0,r.jsxs)(p,{children:[r.jsx(x,{src:a,alt:i.title}),u.length>1&&(0,r.jsxs)(r.Fragment,{children:[r.jsx(g,{children:r.jsx(s.q,{onClick:j,position:"left"})}),r.jsx(g,{children:r.jsx(s.A,{onClick:w,position:"right"})})]})]}),u.length>1&&r.jsx(m,{children:u.map((e,t)=>r.jsx(h,{src:e,alt:`${i.title} - изображение ${t+1}`,onClick:()=>{n(e),b(t)},isSelected:a===e},t))})]})})}},581:(e,t,i)=>{"use strict";i.d(t,{Z:()=>k});var r=i(997),o=i(6689),a=i(1088),n=i(7518),s=i.n(n);let d=s().div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100vh; /* Ensure full height on mobile */
  }
`,l=s().div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${e=>e.imageSrc});
  background-size: cover;
  background-position: center;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
  animation: fadeIn 1s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`,c=s().div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 80%;
  max-width: 800px;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`,p=s().div`
  position: relative;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`,x=s().div`
  padding: 3rem;
  border-radius: 15px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,m=s().h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,h=s().h2`
  font-size: 1.8rem;
  font-weight: 400;
  color: #f0f0f0;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`,g=(0,n.keyframes)`
  0%, 100% {
    transform: rotateY(-15deg) scale(1) rotate(-4deg);
    opacity: 1;
  }
  30% {
    transform: rotateY(0deg) scale(1.15) rotate(-2deg);
    opacity: 1;
  }
  50% {
    transform: rotateY(15deg) scale(1.3) rotate(0deg);
    opacity: 1;
  }
  70% {
    transform: rotateY(0deg) scale(1.15) rotate(2deg);
    opacity: 1;
  }
`,f=s().img`
  width: 24px;
  height: 24px;
  animation: ${g} 3s ease-in-out infinite;
  transform-style: preserve-3d;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`,b=s().button`
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: rgb(0, 0, 0, 0.6);
  color: #ffffff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.7rem 1.5rem;
  }

  &:hover {
    background-color: rgb(0, 0, 0, 1);
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`,u=s().div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 480px) {
    margin-top: 0.75rem;
  }
`,w=s().div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${e=>e.active?"#ffffff":"rgba(255, 255, 255, 0.5)"};
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
    margin: 0 4px;
  }
`;s().button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;

  left: ${e=>"left"===e.position?"10px":"auto"};
  right: ${e=>"right"===e.position?"10px":"auto"};

  &:hover {
    color: #3b7a57;
  }

  &:before {
    content: '';
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: middle;

    ${e=>"left"===e.position?`
            transform: rotate(180deg);
          `:""}
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }

  @media (max-width: 768px) {
    &:before {
      width: 1.75rem;
      height: 1.75rem;
    }
  }

  @media (max-width: 480px) {
    &:before {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;let j=(0,n.keyframes)`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,v=s().div`
  opacity: 0;
  animation: ${j} 0.8s ease-out forwards;
  animation-delay: ${e=>e.delay||0}s;
`,y=s().div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
  animation: fadeIn 1s forwards;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }

  video {
    width: 120%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;

    @media (max-width: 768px) {
      width: 130%; /* Slightly wider to ensure coverage on mobile */
    }

    @media (max-width: 480px) {
      width: 150%; /* Even wider for small screens */
    }
  }
`;s().p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 12px;
  }
`;let k=({slides:e,buttonText:t,onButtonClick:i})=>{let[n,s]=(0,o.useState)(0);return(0,r.jsxs)(d,{children:[(()=>{let t=e[n];return"video"===(t.type||"image")?r.jsx(y,{children:r.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,poster:t.imageSrc,onError:e=>console.error("Video loading error:",e),children:r.jsx("source",{src:t.imageSrc,type:"video/mp4"})})}):r.jsx(l,{imageSrc:t.imageSrc})})(),(0,r.jsxs)(c,{children:[r.jsx(p,{children:(0,r.jsxs)(x,{children:[r.jsx(v,{children:r.jsx(m,{children:e[n].title})}),r.jsx(v,{delay:.3,children:r.jsx(h,{children:e[n].subtitle})}),r.jsx(v,{delay:.6,children:(0,r.jsxs)(b,{onClick:i,children:[r.jsx(f,{src:"https://storage.yandexcloud.net/ilia/2025-03-17%2015.36.35%20(2)%20(2).png",alt:"Button icon"}),t]})})]})}),r.jsx(u,{children:e.map((e,t)=>r.jsx(w,{active:t===n,onClick:()=>s(t)},t))}),r.jsx(a.q,{onClick:()=>{s(t=>0===t?e.length-1:t-1)},position:"left"}),r.jsx(a.A,{onClick:()=>{s(t=>(t+1)%e.length)},position:"right"})]})]})}},3593:(e,t,i)=>{"use strict";i.d(t,{Ny:()=>h,Yh:()=>p,_v:()=>n,cK:()=>m,hv:()=>l,mU:()=>s,nz:()=>d,rr:()=>c,tS:()=>g,we:()=>x});var r=i(7518),o=i.n(r);let a=(0,r.keyframes)`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,n=o().section`
  width: 100%;
  box-sizing: border-box;
  max-width: 1400px;
  margin: 4rem auto;
  padding: 0 1rem;
  position: relative;
  overflow: hidden;
`,s=o().div`
  text-align: center;
  margin-bottom: 3rem;
  animation: ${a} 0.8s ease-out forwards;
`,d=o().h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,l=o().div`
  position: relative;
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 20px;
  
  .swiper {
    padding-bottom: 50px; /* Space for pagination dots */
  }
  
  .swiper-pagination {
    bottom: 0;
  }
  
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #ccc;
    opacity: 0.7;
    transition: all 0.3s ease;
  }
  
  .swiper-pagination-bullet-active {
    background: #000;
    opacity: 1;
    width: 12px;
    height: 12px;
  }
`,c=o().img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.5s ease;
`,p=o().div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
`,x=o().div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 1.0rem;
  color: white;
  z-index: 2;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
  
  div:hover & {
    transform: translateY(0);
    opacity: 1;
  }
`,m=o().h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);
`,h=o().p`
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,g=o().div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  z-index: 10;
  pointer-events: none;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  
  /* This ensures the buttons themselves can be clicked */
  & > * {
    pointer-events: auto;
  }
  
  @media (max-width: 768px) {
    padding: 0 5px;
  }
`},4539:(e,t,i)=>{"use strict";i.a(e,async(e,r)=>{try{i.d(t,{Z:()=>p});var o=i(997),a=i(6689);i(7644),i(5392);var n=i(2184),s=i(3015),d=i(1088),l=i(3593),c=e([n,s]);[n,s]=c.then?(await c)():c;let p=({works:e,onWorkClick:t})=>{let i=(0,a.useRef)(null);return(0,o.jsxs)(l._v,{id:"works",children:[o.jsx(l.mU,{children:o.jsx(l.nz,{children:"Наши работы"})}),(0,o.jsxs)(l.hv,{children:[o.jsx(s.Swiper,{ref:i,modules:[n.Pagination,n.Autoplay],spaceBetween:30,slidesPerView:1,pagination:{clickable:!0},autoplay:{delay:5e3,disableOnInteraction:!1},breakpoints:{600:{slidesPerView:2},900:{slidesPerView:3},1200:{slidesPerView:4}},children:e.map(e=>o.jsx(s.SwiperSlide,{children:(0,o.jsxs)("div",{onClick:()=>t(e),style:{cursor:"pointer",position:"relative",borderRadius:"12px",overflow:"hidden"},children:[o.jsx(l.rr,{src:e.imageSrc,alt:e.title}),o.jsx(l.Yh,{}),(0,o.jsxs)(l.we,{children:[o.jsx(l.cK,{children:e.title}),e.description&&o.jsx(l.Ny,{children:e.description})]})]})},e.id))}),(0,o.jsxs)(l.tS,{children:[o.jsx(d.q,{onClick:()=>{i.current&&i.current.swiper&&i.current.swiper.slidePrev()},position:"left"}),o.jsx(d.A,{onClick:()=>{i.current&&i.current.swiper&&i.current.swiper.slideNext()},position:"right"})]})]})]})};r()}catch(e){r(e)}})},5392:()=>{},7644:()=>{},5833:()=>{},2636:()=>{},5244:(e,t)=>{"use strict";var i;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return i}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(i||(i={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},7518:e=>{"use strict";e.exports=require("styled-components")},5315:e=>{"use strict";e.exports=require("path")},2184:e=>{"use strict";e.exports=import("swiper/modules")},3015:e=>{"use strict";e.exports=import("swiper/react")}};var t=require("../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[859],()=>i(1496));module.exports=r})();