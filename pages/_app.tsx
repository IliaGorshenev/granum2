import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Script from 'next/script';
import '../src/index.css';
import '../src/App.css';

const GlobalStyle = createGlobalStyle`
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
`;

const theme = {
  colors: {
    primary: '#3b7a57',
    secondary: '#6b8e23',
    background: '#f9f9f9',
    text: '#2d3748',
    lightText: '#4a5568',
  },
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Track page views on route change
    const handleRouteChange = (url: string) => {
      if (typeof window !== 'undefined' && (window as any).ym) {
        (window as any).ym(104541636, 'hit', url);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  console.log('_app.tsx rendering with pageProps:', pageProps);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/* Yandex.Metrika counter */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                  if (document.scripts[j].src === r) { return; }
                }
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(104541636, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true,
                ecommerce:"dataLayer"
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/104541636" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
