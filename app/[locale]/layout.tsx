import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {Locale, routing} from '@/i18n/routing';
import React from "react";
import NotFound from "@/app/[locale]/not-found";
import Header from "@/src/components/Header";
import '@/src/styles/all.scss'
export default async function LocaleLayout({
                                             children,
                                             params
                                           }: {
  children: React.ReactNode;
  params: {locale: string};
}) {

    const {locale} = await params;
  if (!routing.locales.includes(locale as Locale)) {
      return <NotFound />
  }
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body>

        <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
      </NextIntlClientProvider>
      </body>
      </html>
  );
}