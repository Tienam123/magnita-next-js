"use client"
import {useLocale, useTranslations} from "next-intl";
import {useEffect, useState} from "react";
import {API_URL} from "@/contants";
import {Link} from "@/i18n/routing";
import GalleryFancyBox from "@/src/components/ui/GalleryFancyBox";
import {ControlItem, MontageItem, ProductTypeCatalog} from "@/types";
import RollerControl from "@/src/components/Catalog/RollerControl";
import ShutterMount from "@/src/components/Catalog/ShutterMount";
import DeliveryTowns from "@/src/components/Catalog/DeliveryTowns";

interface Props {
    towns: ProductTypeCatalog[]
}
const montageItems:MontageItem[] = [
    { imgSrc: "/img/products/4f2.jpg", title: "montage_1" },
    { imgSrc: "/img/products/41f.jpg", title: "montage_2" },
    { imgSrc: "/img/products/42f.jpg", title: "montage_3" },
    { imgSrc: "/img/products/43f2.jpg", title: "montage_4" },
];

const ProtectiveRoller = ({towns}:Props) => {
    const locale = useLocale();
    const t = useTranslations();
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



    return (
        <section className="category-content">
            <div className="container">
                <GalleryFancyBox images={['/img/categories/12.jpg.webp','/img/products/233646713.jpg']} dataId={'gallery'} className="images"/>
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

                <ShutterMount items={montageItems} />
                <RollerControl controlItems={controlItems} title="control_title" description="control_desc"/>

                <DeliveryTowns towns={towns} locale={locale} />

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