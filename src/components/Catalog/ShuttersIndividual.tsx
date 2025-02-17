"use client"
import GalleryFancyBox from "@/src/components/ui/GalleryFancyBox";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/routing";
import {getLocale} from "next-intl/server";
import MapComponent from "@/src/components/MapComponent";

export interface ShuttersIndividualProps {
locale: string
}

const ShuttersIndividual = ({locale}: ShuttersIndividualProps) => {
    const t = useTranslations();
    const images = [
        '/img/PSG45/1.png',
        '/img/PSG45/2.png',
        '/img/PSG45/3.png',
        '/img/PSG45/4.png',
        '/img/PSG45/5.png',
        '/img/PSG45/6.png',
        '/img/PSG45/7.png',
        '/img/PSG45/8.png'
    ];
    const imagesSecond = [
        '/img/PAEG37/11.png',
        '/img/PAEG37/12.png',
        '/img/PAEG37/13.png',
        '/img/PAEG37/14.png',
        '/img/PAEG37/15.png',
        '/img/PAEG37/16.png',
        '/img/PAEG37/17.png',
        '/img/PAEG37/18.png',
        '/img/PAEG37/19.png',
    ];
    return (
        <>
            <section className="category-content">
                <div className="container">
                    <GalleryFancyBox images={['/img/categories/2.jpg.webp', '/img/categories/10.jpg.webp']} dataId={'gallery'} className={'images'}/>
                    <h2 className="h2_title">{t('individual_desc_page_title_0')}</h2>
                    <h3 className="desc" dangerouslySetInnerHTML={{__html: t.raw('individual_desc_page_desc_0')}}/>
                    <h3 className="desc">{t('individual_desc_page_desc')}</h3>
                    <h2 className="h2_title">{t('individual_desc_page_title_2')}</h2>
                    <GalleryFancyBox images={images} dataId={'test4'} className={'blind-items'} itemClass={'item'}/>
                    <h3 className="desc">
                        {t('individual_desc_page_desc_1')}
                    </h3>
                    <h2 className="h2_title">
                        {t('individual_desc_page_title_3')}
                    </h2>
                    <GalleryFancyBox images={imagesSecond} dataId={"test5"} className="blind-items row3" itemClass="item"/>
                    <p className="desc">{t('individual_desc_page_desc_2')}</p>
                    <div className="text-block wide">
                        <div title={t('individual_desc_page_title_4')} className="img" style={{backgroundImage: " url('/img/1-2-4.png')"}}></div>
                        <div className="desc-content">
                            <h2 className="h2_title">{t('individual_desc_page_title_4')}</h2>
                            <h3 className="desc" dangerouslySetInnerHTML={{__html: t.raw('individual_desc_page_desc_4')}}/>
                        </div>
                    </div>
                    <div className="btns-block">
                        <Link href="/price-calculator-protective-shutters" locale={locale}>
                            {t('individual_order')}
                        </Link>
                    </div>
                    <MapComponent />
                </div>
            </section>
        </>
    );
};

ShuttersIndividual.propTypes = {};

export default ShuttersIndividual;