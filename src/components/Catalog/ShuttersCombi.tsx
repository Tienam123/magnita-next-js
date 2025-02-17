"use client"
import GalleryFancyBox from "@/src/components/ui/GalleryFancyBox";
import {useTranslations} from "next-intl";
import Callback from "@/src/components/Callback";
import MapComponent from "@/src/components/MapComponent";

export interface ShuttersCombiProps {

}

const ShuttersCombi = ({}: ShuttersCombiProps) => {
    const t = useTranslations();
    return (
        <>
            <section className="category-content">
                <div className="container">
                    <GalleryFancyBox images={['/img/categories/combi/1.jpg', '/img/categories/combi/2.jpg']} dataId={"test6"} className={"images"}/>
                    <h2 className="h2_title">{t('combi_desc_page_title_1')}</h2>
                    <p className="desc" dangerouslySetInnerHTML={{__html: t.raw('combi_desc_page_desc_1')}}/>
                    <h2 className="h2_title">{t('combi_desc_page_subtitle_2')}</h2>
                    <p className="desc"><span>{t('combi_desc_page_subdesc_2')}</span>
                    </p>
                    <div className="control-items">
                        <div className="item">
                            <img
                                className="img"
                                src="/img/categories/combi/5.jpg" title={t('combi_type_1')}
                            />
                            <p className="desc">{t('combi_type_1')}</p>
                        </div>
                        <div className="item">
                            <img
                                className="img"
                                src="/img/categories/combi/3.jpg" title={t('combi_type_1')}
                            />
                            <p className="desc">{t('combi_type_1')}</p>
                        </div>
                        <div className="item">
                            <img
                                className="img"
                                src="/img/categories/combi/4.png" title={t('combi_type_1')}
                            />
                            <p className="desc">{t('combi_type_1')}</p>
                        </div>
                    </div>
                    <h2 className="h2_title">{t('combi_desc_page_title_1')}</h2>
                    <div className="desc-block">
                        <p className="desc">
                            <span>● </span>
                            {t('combi_desc_page_subdesc_3')}
                        </p>
                        <p className="desc">
                            <span>● </span>
                            {t('combi_desc_page_subdesc_4')}
                        </p>
                    </div>
                    <br/>
                    <p className="desc">
                        <span>● </span>
                        {t('combi_desc_page_subdesc_5')}
                    </p>
                    <h2 style={{color:'red'}}>{t('alarm')}</h2>
                    <h2 className="h2_title">{t('combi_alarm')} </h2>
                    <Callback />
                </div>
                <MapComponent />

            </section>
        </>
    );
};

export default ShuttersCombi;