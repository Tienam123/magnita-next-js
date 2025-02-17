"use client"
import GalleryFancyBox from "@/src/components/ui/GalleryFancyBox";
import {useLocale, useTranslations} from "next-intl";
import ShutterMount from "@/src/components/Catalog/ShutterMount";
import {ControlItem, MontageItem} from "@/types";
import RollerControl from "@/src/components/Catalog/RollerControl";
import {Link} from "@/i18n/routing";
import {getLocale} from "next-intl/server";

export interface BlindsDescProps {

}


const BlindsDesc = ({}: BlindsDescProps) => {
    const t = useTranslations()
    const locale = useLocale();
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
    const montageItems:MontageItem[] = [
        { imgSrc: "/img/products/4d.jpg", title: "montage_1" },
        { imgSrc: "/img/products/41d.jpg", title: "montage_2" },
        { imgSrc: "/img/products/43d.jpg", title: "montage_5" },
        { imgSrc: "/img/products/42d.jpg", title: "montage_6" },
    ];
    return (
        <>
            <section className="category-content" style={{ backgroundImage: 'url(/img/bgg2.png.webp)' }}>
            <div className="container">
                <GalleryFancyBox images={['/img/categories/2.jpg.webp','/img/categories/10.jpg.webp']} dataId={'test'} className='images'/>
                <h2 className="h2_title">{t('blinds_desc_page_title_0')}</h2>
                <h3 className="desc" dangerouslySetInnerHTML={{ __html: t.raw('blinds_desc_page_desc_0') }} />
                <h2 className="h2_title">{t('blinds_desc_page_title_1')}</h2>
                <h3 className="desc" dangerouslySetInnerHTML={{ __html: t.raw('blinds_desc_page_desc_0') }} />

                <ul className="marker">
                    <li>{t('blinds_desc_page_desc_1')}</li>
                    <li>{t('blinds_desc_page_desc_2')}</li>
                    <li>{t('blinds_desc_page_desc_3')}</li>
                </ul>
                <br />
                <br />

                <h2 className="h2_title">{t('blinds_desc_page_title_2')}</h2>
                <ul className="marker">
                    <li>
                        <span>{t('blinds_desc_page_subtitle_1')}:</span>
                        {t('blinds_desc_page_subdesc_1')}
                    </li>
                    <li>
                        <span>{t('blinds_desc_page_subtitle_2')}:</span>
                        {t('blinds_desc_page_subdesc_2')}
                    </li>
                    <li>
                        <span>{t('blinds_desc_page_subtitle_3')}:</span>
                        {t('blinds_desc_page_subdesc_3')}
                    </li>
                </ul>

                <div className="text-block wide">
                    <div
                        title={t('blinds_desc_page_subtitle_4')}
                        className="img"
                        style={{ backgroundImage: 'url(/img/1-2-4.png)' }}
                    />
                    <div className="desc-content">
                        <h2 className="h2_title">{t('blinds_desc_page_subtitle_4')}</h2>
                        <h3 className="desc" dangerouslySetInnerHTML={{ __html: t.raw('blinds_desc_page_subdesc_4') }} />
                    </div>
                </div>

                <iframe
                    width="100%"
                    style={{ height: '45vw', padding: '14px' }}
                    src="https://www.youtube.com/embed/7Dj3qLakXA4"
                    title="Ролетні решітки - огляд ролетних систем Магніта"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />

                <ShutterMount items={montageItems} />
                <RollerControl controlItems={controlItems} title="control_title_2" description="control_desc_2" />

                <div className="btns-block">
                    <Link href={`/calculator-horizontal-blinds`} locale={locale}>{t('individual_order')}</Link>
                    <Link href={`/protective-blinds`} locale={locale}>{t('catalog')}</Link>
                </div>



            </div>
            </section>
        </>
    );
};


export default BlindsDesc;