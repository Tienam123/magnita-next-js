"use client"

import GalleryFancyBox from "@/src/components/ui/GalleryFancyBox";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/routing";
import MapComponent from "@/src/components/MapComponent";

export interface OtlivyProps {
locale:string
}

const Otlivy = ({locale}: OtlivyProps) => {
    const t = useTranslations();
    return (
        <>
            <section className="category-content" style={{backgroundImage: "url('/img/bgg2.png.webp')"}}>
                <div className="container">
                    <GalleryFancyBox images={['/img/products/otliv1.jpg', '/img/products/otliv2.jpg']} dataId={"gallery"} className="images"/>
                    <div className="otlivy-desc" style={{textAlign: "center"}}>
                        <p className="desc" style={{fontWeight: "bold"}}>
                            {t('otlivy_desc_1')}
                        </p>
                        <p className="desc">
                            40 / 70 / 90 / 100 / 125 / 150 / 175 / 200 / 225 / 250 / 275 / 300 / 325 / 350
                        </p>
                        <p className="desc" style={{fontWeight: "bold"}}>
                            {t('otlivy_desc_2')}
                        </p>
                        <p className="desc">
                            {t('otlivy_desc_3')}
                        </p>
                        <p className="desc">
                            {t('otlivy_desc_4')}
                        </p>
                        <p className="desc">
                            {t('otlivy_desc_5')}
                        </p>
                    </div>
                    <div className="btns-block">
                        <Link locale={locale} href="#" className="get-consult-btn-otlivy">
                            {t('get_consultation')}
                        </Link>
                    </div>
                </div>
                <MapComponent />
            </section>
        </>
    );
};

export default Otlivy;