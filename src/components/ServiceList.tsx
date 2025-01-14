import {Link, Locale} from "@/i18n/routing";
import {Service} from "@/src/components/Header";
import {useLocale} from "next-intl";
import {useState} from "react";

interface Props {
    services:Service[]
}
const ServiceList = ({services}:Props) => {
    const locale = useLocale() as Locale;
    return (
            <ul>
                {services.map((item, key) => (
                    <li key={key}>
                        <Link href={`/services/${item.slug}`} locale={locale}>{item[`title_${locale}`]}</Link>
                    </li>
                ))}
            </ul>
    );
};
;

export default ServiceList;