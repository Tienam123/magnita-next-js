"use client"
import {useLocale, useTranslations} from "next-intl";
import {useEffect, useState} from "react";
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import {API_URL} from "@/contants";
import {Link} from "@/i18n/routing";
export interface Product {
    id: number
    parent_slug: string
    title: string
    title_en: string
    title_ua: string
    slug: string
    desc: string
    desc_en: string
    desc_ua: string
    content: string
    content_en: any
    content_ua: string
    created_at: string
    updated_at: string
    table_name: string
    table_name_ua: string
    table_name_en: string
    table_first_column_name: string
    table_first_column_name_ua: string
    table_first_column_name_en: string
    title_page: string
    title_page_ua: string
    title_page_en: string
    type: number
    [key: string]: string | any;
}
interface MontageItem {
    imgSrc:string;
    title:string;
}
interface ControlItem {
    title:string;
    imgSrc:string|string[];
    wide?:boolean
}

const montageItems:MontageItem[] = [
    { imgSrc: "/img/products/4f2.jpg", title: "montage_1" },
    { imgSrc: "/img/products/41f.jpg", title: "montage_2" },
    { imgSrc: "/img/products/42f.jpg", title: "montage_3" },
    { imgSrc: "/img/products/43f2.jpg", title: "montage_4" },
];
const controlItems:ControlItem[] = [
    { imgSrc: "/img/products/512.jpg", title: "control_type_3" },
    { imgSrc: "/img/products/52.jpg", title: "control_type_4" },
    { imgSrc: "/img/products/53.jpg", title: "control_type_5" },
    {
        imgSrc: ["/img/products/54.jpg", "/img/products/control_1.png"],
        title: "control_type_6",
        wide: true,
    },
];
type Field = 'table_first_column_name' | 'table_first_column_name_ua' | 'table_first_column_name_en';


const ProtectiveRoller = ({}) => {
    const locale = useLocale();
    const t = useTranslations();
    const [subTowns, setSubTowns] = useState<Product[]>([])

    function fetchText(item: Product, field: Field) {
        if (locale === 'ua') {
            return item[field + '_ua'] as string;
        }
        if (locale === 'en') {
            return item[field + '_en'] as string;
        }
        return item[field] as string;
    }

    const getSubTowns = async (slug: string) => {
        const res = await fetch(`${API_URL}api/fetch-subtowns/${slug}`);
        const data = await res.json();
        console.log(data)
        setSubTowns(data);
    };

    useEffect(() => {
        getSubTowns('products')
        Fancybox.bind('[data-fancybox="gallery"]', {
        });
    }, []);
    return (
        <section className="category-content">
            <div className="container">
                <div className="images">
                    <a
                        href="/img/categories/12.jpg.webp"
                        title="$t('protective_shrutters')" className="img-item"
                        data-fancybox="gallery" style={{backgroundImage: "url('/img/categories/12.jpg.webp')"}}
                    ></a>

                    <a
                        href="/img/products/233646713.jpg"
                        title="$t('protective_shrutters')" className="img-item"
                        data-fancybox="gallery" style={{backgroundImage: "url('/img/products/233646713.jpg')"}}
                    ></a>
                </div>
                <div>
                    <h2 className="h2_title">{t('protective_shrutters')}</h2>
                    <h3 className="desc" dangerouslySetInnerHTML={{__html:t.raw('shutters_page_desc_1')}} />
                </div>
                <div className="text-block">
                    <div title={t('shutters_page_title_2')} className="img" style={{backgroundImage: "url('/img/1-2-2.png')"}}></div>
                    <div className="desc-content">
                        <h2 className="h2_title">{t('shutters_page_title_2')}</h2>
                        <h3 className="desc">
                            {t('shutters_page_desc_2') }
                        </h3>
                    </div>
                </div>
                <div className="text-block">
                    <div className="desc-content">
                        <h2 className="h2_title">{t("shutters_page_title_3")}</h2>
                        <h3 className="desc">{t("shutters_page_desc_3")}</h3>
                    </div>
                    <div
                        title={t("shutters_page_title_3")}
                        className="img"
                        style={{ backgroundImage: "url('/img/1-2-3.png')" }}
                    ></div>
                </div>
                <div className="text-block wide">
                    <div
                        title={t("shutters_page_title_4")}
                        className="img"
                        style={{ backgroundImage: "url('/img/products/23364da3873.png')" }}
                    ></div>
                    <div className="desc-content">
                        <h2 className="h2_title">{t("shutters_page_title_4")}</h2>
                        <h3 className="desc" dangerouslySetInnerHTML={{ __html: t.raw("shutters_page_desc_4") }} />
                    </div>
                </div>
                <h2 className="h2_title">{t("montage_title")}</h2>
                <div className="montazh">
                    {montageItems.map((item, index) => (
                        <div key={index} className="item">
                            <img className="img" src={item.imgSrc} title={t(item.title)} alt={t(item.title)} />
                            <h3 className="text">{t(item.title)}</h3>
                        </div>
                    ))}
                </div>
                <h2 className="h2_title">{t("control_title")}</h2>
                <h3 className="desc">{t("control_desc")}</h3>
                <div className="type-control">
                    <h3 className="desc">{t("control_type_1")}</h3>
                    <h3 className="desc">{t("control_type_2")}</h3>
                </div>
                <div className="control-items">
                    {controlItems.map((item, index) => {
                        if (Array.isArray(item.imgSrc)) {
                            return (
                                <div key={index} className="item-wide">
                                    <div className="imgs">
                                        {item.imgSrc.map((image,idx) => (<img className="img" src={image} key={idx} alt={t(item.title)}/>))}
                                    </div>
                                    <h3 className="desc">{t(item.title)}</h3>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index} className="item">
                                    <img className="img" src={item.imgSrc} title={t(item.title)} alt={t(item.title)} />
                                    <h3 className="desc">{t(item.title)}</h3>
                                </div>
                            )
                        }
                    })}
                </div>

                <h2>{t('delivery_to_city')}</h2>

                {subTowns.length > 0 && (
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
                        {subTowns.map((item, index) => (
                            <li key={index} className="towns__list_item">
                                <Link
                                    locale={locale}
                                    href={`/roleti/${item.slug}`}
                                    className="towns__list_item-link"
                                >
                                    {fetchText(item,'table_first_column_name')}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

                <div className="btns-block">
                    <a href={`/${locale}/calculator-protective-shutters`}>
                        {t('individual_order')}
                    </a>
                    <a href={`/${locale}/products`}>
                        {t('catalog')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProtectiveRoller;