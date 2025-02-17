import {Link} from "@/i18n/routing";
import {ProductTypeCatalog} from "@/types";
import {useTranslations} from "next-intl";

export interface DeliveryTownsProps {
    towns: ProductTypeCatalog[],
    locale: string
}

const DeliveryTowns = ({towns, locale}: DeliveryTownsProps) => {
    const t = useTranslations()
    type Field = 'table_first_column_name' | 'table_first_column_name_ua' | 'table_first_column_name_en';
    function fetchText(item: ProductTypeCatalog, field: Field) {
        if (locale === 'ua') {
            return item[field + '_ua'] as string;
        }
        if (locale === 'en') {
            return item[field + '_en'] as string;
        }
        return item[field] as string;
    }
    return (
        <>
            <h2>{t('delivery_to_city')}</h2>
            {towns.length > 0 && (
                <ul
                    className="towns__list"
                    style={{
                        margin: '50px 0',
                        fontWeight: '700',
                        listStyle: 'disc',
                        textDecoration: 'underline',
                        paddingLeft: '20px',
                    }}
                >
                    {towns.map((item, index) => (
                        <li key={index} className="towns__list_item">
                            <Link
                                locale={locale}
                                href={`/roleti/${item.slug}`}
                                className="towns__list_item-link"
                            >
                                {fetchText(item, 'table_first_column_name')}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};


export default DeliveryTowns;