import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const herculanum = localFont({
    src: "/fonts/Herculanum.ttf",
    variable: "--font-herculanum",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "PixieAR",
    description: "Interactive Learning",
};

export default function RootLayout({
                                       children,
                                       params: {locale}
                                   }: {
    children: React.ReactNode;
    params: {locale: string};
}) {


    return (
        <html lang={locale} className={herculanum.variable}>
        <head>
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href="/icons/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body className={`${herculanum.variable} antialiased`} style={{ background: 'var(--bg-custom-gradient)' }}>

        {children}
        </body>
        </html>
    );
}
