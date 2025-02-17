"use client"
import GalleryFancyBox from "@/src/components/ui/GalleryFancyBox";
import {Link} from "@/i18n/routing";
import Questions from "@/src/components/Main/Questions";
import {useTranslations} from "next-intl";
import {ProductTypeCatalog} from "@/types";
import DeliveryTowns from "@/src/components/Catalog/DeliveryTowns";

export interface RoletniVorotaProps {
locale:string,
    towns:ProductTypeCatalog[]
}

const RoletniVorota = ({locale,towns}: RoletniVorotaProps) => {
    const t = useTranslations()
    return (
        <section className="category-content">
            <div className="container">
                <h2 className="h2_title" data-aos="fade-up" data-aos-duration="1500" style={{marginTop: "20px", marginBottom: "20px"}}>
                    {t('rol-vorota_h2_0')}</h2>
                <GalleryFancyBox images={['/img/categories/roll-v/roller_door_1.jpg', '/img/categories/roll-v/roller_door_2.jpg']} dataId={'gallery'} className={'images'}/>
                <h2 className="h2_title" data-aos="fade-up" data-aos-duration="1500" style={{marginTop: "20px", marginBottom: "20px"}}>
                    {t('rol-vorota_h2_1')}</h2>
                <div>
                    <p className="desc">
                        {t('rol-vorota_desc')}</p>
                </div>
                <h2 className="h2_title" data-aos="fade-up" data-aos-duration="1500" style={{marginTop: "20px", marginBottom: "20px"}}>
                    {t('rol-vorota_h2_2')}</h2>
                <div className="text-block">
                    <img
                        style={{height: "100%"}} className="img" title={t('rol-vorota')}
                        src="/img/categories/roll-v/roller_gates_1.jpg"
                    />
                    <div className="desc-content">
                        <div className="desc">{t('rol-vorota_desc_1_0')}
                            <h3 className="h2_title" style={{marginTop: "20px", marginBottom: "20px"}}>{t('rol-vorota_h2_3')} </h3>
                            <p className="desc">{t('rol-vorota_desc_1')}
                            </p>
                            <h3 className="h2_title" style={{marginTop: "20px", marginBottom: "20px"}}>{t('rol-vorota_h2_4')} </h3>
                            <p className="desc">
                                {t('rol-vorota_desc_2')}
                            </p>

                            <h3 className="h2_title" style={{marginTop: "20px", marginBottom: "20px"}}> {t('rol-vorota_h2_5')} </h3>
                            <p className="desc">
                                {t('rol-vorota_desc_3')}
                            </p>
                        </div>
                    </div>
                </div>
                <h2 className="h2_title" data-aos="fade-up" data-aos-duration="1500" style={{marginTop: "20px", marginBottom: "20px"}}>
                    {t('rol-vorota_h2_6')} </h2>
                <p className="desc">
                    {t('rol-vorota_desc_3_0')}</p>
                <div className="text-block">
                    <div style={{width: '30%'}}>
                        <img
                            title={t('rol-vorota')} style={{margin: "10px 0"}} className="img roll"
                            src="/img/categories/roll-v/roller_gates_2.jpg"
                        />
                        <img
                            title={t('rol-vorota')} style={{margin: "10px 0"}} className="img roll"
                            src="/img/categories/roll-v/roller_gates_for_garage.jpg"
                        />
                        <img
                            title={t('rol-vorota')} style={{margin: "10px 0"}} className="img roll"
                            src="/img/categories/roll-v/roller_hand.jpg"
                        />
                    </div>
                    <div className="desc-content">
                        <div dangerouslySetInnerHTML={{__html: t.raw('rol-vorota_desc_4')}}/>
                    </div>
                </div>
                <div className="btns-block">
                    <Link href="/calculator-horizontal-blinds" locale={locale}>
                        {t('individual_order')}
                    </Link>
                    <Link href="/protective-blinds">
                        {t('catalog')}
                    </Link>
                </div>
                <h2 className="h2_title" data-aos="fade-up" data-aos-duration="1500" style={{marginTop: "20px", marginBottom: "20px"}}>
                    {t('rol-vorota_h2_7')}
                </h2>
                <h3 className="desc" dangerouslySetInnerHTML={{__html: t.raw('rol-vorota_desc_6')}}/>
                <h2 className="h2_title" data-aos="fade-up" data-aos-duration="1500">{t('faq')}</h2>
                <Questions/>
                <GalleryFancyBox images={['/img/categories/roll-v/roletni_vorota.jpg', '/img/categories/roll-v/Roletni_vorota_na_garage.jpg']} dataId={'gallery'} className={'images'}/>
                <h2 className="h2_title" data-aos="fade-up" data-aos-duration="1500" style={{marginTop: "20px", marginBottom: "20px"}}>
                    {t('rol-vorota_h2_8')}
                </h2>
                <ul className="marker">
                    <li className="desc-p" dangerouslySetInnerHTML={{__html: t.raw('rol-vorota_desc_7')}}/>
                    <li className="desc-p" dangerouslySetInnerHTML={{__html: t.raw('rol-vorota_desc_8')}}/>
                    <li className="desc-p" dangerouslySetInnerHTML={{__html: t.raw('rol-vorota_desc_9')}}/>
                    <li className="desc-p" dangerouslySetInnerHTML={{__html: t.raw('rol-vorota_desc_10')}}/>
                </ul>
                <DeliveryTowns towns={towns} locale={locale} />
            </div>
        </section>
    );
};


export default RoletniVorota;