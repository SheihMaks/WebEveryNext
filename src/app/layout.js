import { Suspense } from 'react';
import { Jura } from 'next/font/google';
import './globals.scss';
import TranslaterProvider from '@/translater/i18Provider';
import { ModalProvider } from '@/hooks';
import Loading from './loading';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

const jura = Jura({ subsets: ['latin'] })

export const metadata = {
  title: 'WebEvery',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html >
      {/* <body className={jura.className} id="modal" > */}
      <body className={jura.className} id="modal" >
        {/* <div > */}
        <TranslaterProvider>
          <ModalProvider>
            <Header />
            <Suspense fallback={<Loading/>}>
              {children}
              <BackToTop />
              <Footer />  
            </Suspense>
          </ModalProvider>
          </TranslaterProvider>
          {/* </div> */}
      </body>
    </html>
  )
}
