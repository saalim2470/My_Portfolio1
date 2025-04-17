import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Poppins } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${poppins.variable}`}>
      <div className="min-h-screen bg-white text-gray-800 antialiased">
        <Head>
          {/* <!-- Charset --> */}
          <meta charSet="UTF-8" />

          {/* <!-- Viewport for mobile responsiveness --> */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* <!-- Page Title (optional but good to have for SEO) --> */}
          <title>Saalim Shaikh | ReactJS & MERN Stack Developer</title>

          {/* <!-- Description for SEO (shown in search results) --> */}
          <meta name="description" content="Portfolio of Saalim Shaikh – a passionate ReactJS & MERN stack developer with experience in building scalable web and mobile applications." />

          {/* <!-- Keywords (optional for SEO, but not heavily used anymore) --> */}
          <meta name="keywords" content="ReactJS Developer, MERN Stack, Full Stack Developer, Saalim Shaikh, React Native, Web Developer Portfolio" />

          {/* <!-- Author of the website --> */}
          <meta name="author" content="Saalim Shaikh" />

          {/* <!-- Theme Color (for mobile browser address bar color) --> */}
          <meta name="theme-color" content="#0d6efd" />

          {/* <!-- Favicon (optional, for tab icon) --> */}
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
} 