"use client"
import {Link} from "@/i18n/routing";
import {useLocale, useTranslations} from "next-intl";
interface ActiveLink {
    active: true;
    href: string; // обязательно
    label: string;
}

interface InactiveLink {
    active: false;
    href?: string; // может отсутствовать
    label: string;
}
type Breadcrumb = ActiveLink | InactiveLink;
export interface BreadcrumpsProps {
    links:Breadcrumb[];
}

const Breadcrumps = ({links}: BreadcrumpsProps) => {
    const locale: string = useLocale();
    const t = useTranslations();
    return (
              <>
                  <ul>
                      {links.map((link,index) => (
                          <li key={index}>
                              {link.active ? ( <Link href={link.href} locale={locale}>{t(link.label)}</Link>) : t(link.label)}
                          </li>
                      ))}
                  </ul>
              </>
    );
};

export default Breadcrumps;