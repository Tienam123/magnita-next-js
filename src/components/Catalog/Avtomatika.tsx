import GalleryFancyBox from "@/src/components/ui/GalleryFancyBox";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/routing";
import MapComponent from "@/src/components/MapComponent";


export interface AvtomatikaProps {
    locale: string
}

const Avtomatika = ({locale}: AvtomatikaProps) => {
    const t = useTranslations();
    return (
        <>
            <section className="category-content" style={{backgroundImage: "url('/img/bgg2.png.webp')"}}>
                <div className="container">
                    <GalleryFancyBox images={['/img/categories/12.jpg.webp']} dataId={"gallery"} className="images"/>
                    <div>
                        <p className="desc">
                            {t('avtomatika_desc_1')}
                        </p>
                        <p className="desc">
                            {t('avtomatika_desc_2')}
                        </p>
                        <ol style={{listStyle: "disc"}}>
                            <li className="desc">
                                {t('avtomatika_desc_3')}
                            </li>
                            <li className="desc">
                                {t('avtomatika_desc_4')}
                            </li>
                            <li className="desc">
                                {t('avtomatika_desc_5')}
                            </li>
                        </ol>
                        <p className="desc">
                            {t('avtomatika_desc_6')}
                        </p>
                    </div>
                    <h2 className="h2_title">{t('avtomatika_desc_7')}</h2>
                    <p className="desc">
                        {t('avtomatika_desc_8')}
                    </p>
                    <ol style={{listStyle: "disc"}}>
                        <li className="desc">
                            {t('avtomatika_desc_9')}
                        </li>
                    </ol>
                    <h2 className="h2_title">{t('avtomatika_desc_10')}</h2>
                    <p className="desc">
                        {t('avtomatika_desc_11')}
                    </p>
                    <ol style={{listStyle: "disc"}}>
                        <li className="desc">
                            {t('avtomatika_desc_12')}
                        </li>
                        <li className="desc">
                            {t('avtomatika_desc_13')}
                        </li>
                    </ol>
                    <p className="desc">
                        {t('avtomatika_desc_14')}
                    </p>
                    <p className="desc">
                        {t('avtomatika_desc_15')}
                    </p>
                    <h2 className="h2_title">{t('avtomatika_desc_16')}</h2>
                    <p className="desc" dangerouslySetInnerHTML={{__html: t.raw('avtomatika_desc_17')}}/>
                    <div className="btns-block" style={{paddingBottom:'10vh',marginBottom:'0px'}}>
                        <Link locale={locale} href="'/'+$i18n.locale+'/product-parts'">
                            {t('catalog')}
                        </Link>
                    </div>
                </div>
            </section>
            <MapComponent/>
        </>
    );
};

export default Avtomatika;