import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
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
  console.log('_app.tsx rendering with pageProps:', pageProps);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
