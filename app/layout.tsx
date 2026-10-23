import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { EMPRESA } from "./lib/empresa";

const GTM_ID = "GTM-NQJPCLZW";
const GA4_ID = "G-TGH47QLJXD";
const META_PIXEL_ID = "1892065927978129";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://goviaje.uk";
const SITE_TITLE = "GoViaje | Asesoría Profesional para Visas de Turismo";
const SITE_DESCRIPTION =
  "Asesoría especializada para visas de turismo a Estados Unidos, Canadá y México. Fundador con +10 años en asesoría de visas, evaluación previa de tu caso y atención 100% online.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | GoViaje",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: SITE_URL,
    siteName: "GoViaje",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  other: {
    "facebook-domain-verification": "bystbxnv9udg8avmapt1kpq86a8bmp",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: EMPRESA.nombreComercial,
  legalName: EMPRESA.razonSocial,
  taxID: EMPRESA.ruc,
  url: SITE_URL,
  email: EMPRESA.emailAtencion,
  telephone: "+51928672932",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Benavides 1944",
    addressLocality: "Miraflores",
    addressRegion: "Lima",
    addressCountry: "PE",
  },
  description: SITE_DESCRIPTION,
  areaServed: ["PE", "CO", "MX", "EC"],
  knowsAbout: [
    "Visa de turismo Estados Unidos B1/B2",
    "Visa de turismo Canadá",
    "Visa de turismo México",
    "Asesoría migratoria",
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61580668796322",
    "https://www.instagram.com/gotravel2.0/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+51928672932",
    email: EMPRESA.emailAtencion,
    areaServed: ["PE", "CO", "MX", "EC"],
    availableLanguage: "Spanish",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        {/* GA4 — carga después de interactiva para no bloquear el render */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');`}
        </Script>
        {/* Meta Pixel — carga después de interactiva; PageView al iniciar */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
        </Script>
        {/* GTM — solo Google Ads, carga diferida */}
        <Script id="gtm-init" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="min-h-screen bg-white text-slate-900">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
