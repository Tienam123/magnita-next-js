import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import React from "react";
import Header from "@/src/components/Header";
import '@/src/styles/all.scss'
import Footer from "@/src/components/Footer";
import {notFound} from "next/navigation";
import {routing} from "@/i18n/routing";

export default async function RootLayout({
                                               children,
                                               params
                                           }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages();
    const {locale} = await params;
    if (!routing.locales.includes(locale as any)) {
          notFound()
    }
    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider messages={messages}>
            <Header/>
            {children}
            <Footer/>
        </NextIntlClientProvider>
        </body>
        </html>

    );
}