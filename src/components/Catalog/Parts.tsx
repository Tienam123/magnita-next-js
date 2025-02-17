"use client"
import {useTranslations} from "next-intl";
import Callback from "@/src/components/Callback";
import {Map} from "immutable";
import MapComponent from "@/src/components/MapComponent";

export interface PartsProps {

}

const Parts = ({}: PartsProps) => {
    const t = useTranslations();
    return (
        <>
            <section className="catalogue-main-page categories-page">
                <div className="container">

                </div>
            </section>
            <section className="category-content" style={{backgroundImage: "url('/img/bgg2.png.webp')"}}>
                <div className="container">
                    <h1 className="h1_title-p h1_title" data-aos="fade-up" data-aos-duration="1500">{t('parts_h1_1')}</h1>
                    <h2 className="h2_title">{t('parts_title_1')}</h2>
                    <p className="desc-p">{t('parts_desc_1')}</p>
                    <h2 className="h2_title">{t('parts_title_2')}</h2>
                    <ol className="desc-p" style={{listStyle:' - '}} dangerouslySetInnerHTML={{__html:t.raw('parts_list_2')}} />
                    <p className="desc-p">{t('parts_desc_2')}</p>
                    <h2 className="h2_title">{t('parts_title_3')}</h2>
                    <p className="desc-p">{t('parts_desc_3')}</p>
                    <ol className="desc-p" style={{listStyle:' - '}} dangerouslySetInnerHTML={{__html:t.raw('parts_list_3')}} />
                    <h2 className="h2_title">{t('parts_title_4')}</h2>
                    <ol className="desc-p" style={{listStyle:"disc"}} dangerouslySetInnerHTML={{__html:t.raw('parts_list_4')}} />
                </div>
            </section>
            <Callback />
            <MapComponent />
        </>
    );
};


export default Parts;